#!/usr/bin/env bash

NC=$(tput sgr0)
RED=$(tput setaf 1)
CYAN=$(tput setaf 6)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)

if [[ "$1" == '-h' ]] || [[ "$1" == '--help' ]]; then
  echo "usage: ./create-package.sh [PACKAGE-TYPE] [COMPONENT-NAME] [COMPONENT-DESCRIPTION]"
  echo ""
  echo "PACKAGE TYPE:"
  echo "  What type of package are you trying to create."
  echo "  Available options:"
  echo "    - css"
  echo "    - react"
  echo ""
  echo "COMPONENT NAME:"
  echo "  What is the name of your component. Provide it in kebab-case"
  echo ""
  echo "COMPONENT DESCRIPTION:"
  echo "  The description of your component"
  exit 0
fi

set -euo pipefail

to_kebab_case() {
  echo "$*" \
    | tr '[:upper:]' '[:lower:]' \
    | sed 's/ /-/g'
  return 0
}

# Assumes kebab-case
to_snake_case() {
  local input="$1"

  echo "$input" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E 's/-/_/g'
  return 0
}

# Assumes kebab-case
to_title_case() {
  local input="$1"

  echo "-$input" \
    | tr '[:upper:]' '[:lower:]' \
    | awk -F'-' '{
        printf "%s", $1;
        for(i = 2; i <= NF; i++) {
            printf "%s ", toupper(substr($i, 1, 1)) substr($i, 2);
        }
        print "";
      }' \
    | xargs
  return 0
}

# Assumes kebab-case
to_camel_case() {
  local input="$1"

  echo "$input" \
    | tr '[:upper:]' '[:lower:]' \
    | awk -F'-' '{
        printf "%s", $1;
        for(i = 2; i <= NF; i++) {
            printf "%s", toupper(substr($i, 1, 1)) substr($i, 2);
        }
        print "";
      }'
  return 0
}

# Assumes kebab-case
to_pascal_case() {
  local input="$1"

  echo "-$input" \
    | tr '[:upper:]' '[:lower:]' \
    | awk -F'-' '{
        printf "%s", $1;
        for(i = 1; i <= NF; i++) {
            printf "%s", toupper(substr($i, 1, 1)) substr($i, 2);
        }
        print "";
      }'
  return 0
}

if [[ -z ${1+x} ]]; then
  read -p "What kind of package are you creating (css/react)? " -r
  PACKAGE=$REPLY
else
  PACKAGE=$1
fi

case "$PACKAGE" in
  css|react|docs|tokens)
    ;;
  *)
    printf "%s Package \"$PACKAGE\" is not recognised$NC\n" "$RED"
    printf "    Available types:\n"
    printf "    -%s css$NC\n" "$YELLOW"
    printf "    -%s react$NC\n" "$YELLOW"
    exit 1
esac

PACKAGE_PARENT_DIR="$(echo "$PACKAGE" | sed -e 's/css/components-css/' | sed -e 's/react/components-react/')"

if [[ -z ${2+x} ]]; then
  read -p "What is the name of the component (in kebab-case)? " -r
  COMPONENT=${REPLY//"-$PACKAGE"//}
else
  COMPONENT=${2//"-$PACKAGE"//}
fi

if [[ -z ${3+x} ]]; then
  read -p "What is the description of the component? " -r
  DESCRIPTION=$REPLY
else
  DESCRIPTION=$3
fi


COMPONENT_KEBAB_CASE=$(to_kebab_case "$COMPONENT")
COMPONENT_CAMEL_CASE=$(to_camel_case "$COMPONENT_KEBAB_CASE")
COMPONENT_SNAKE_CASE=$(to_snake_case "$COMPONENT_KEBAB_CASE")
COMPONENT_TITLE_CASE=$(to_title_case "$COMPONENT_KEBAB_CASE")
COMPONENT_PASCAL_CASE=$(to_pascal_case "$COMPONENT_KEBAB_CASE")
COMPONENT_PACKAGE="$COMPONENT_KEBAB_CASE-$PACKAGE"

TEMPLATE_FOLDER="/scripts/templates/${PACKAGE_PARENT_DIR}"
DESTINATION_FOLDER="/packages/$PACKAGE_PARENT_DIR/ma-$COMPONENT_PACKAGE"

# change to the repository root directory
cd "$(git rev-parse --show-toplevel)"

echo ""
printf "Creating new component: %s$COMPONENT_KEBAB_CASE$NC\n" "$YELLOW"
printf "Template:    %s$TEMPLATE_FOLDER$NC\n" "$CYAN"
printf "Destination: %s$DESTINATION_FOLDER$NC\n" "$CYAN"
printf "Description: %s\n" "$DESCRIPTION"
echo ""
read -p "Are you sure (y/N)? " -n 1 -r
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  exit 1 # handle exits from shell or function but don't exit interactive shell
fi
echo ""
echo ""

printf "Copying template files: "
# Create folders
find "$(pwd)$TEMPLATE_FOLDER" -type d \
  | sed -e "s/scripts\/templates\/$PACKAGE_PARENT_DIR/packages\/$PACKAGE_PARENT_DIR\/ma-$COMPONENT_PACKAGE/" \
  | xargs -n1 mkdir -p;

# Copy files to the destination folder and renaming them where needed
set +e # Temporary disable set -e because cp can exit with an 1 exit code
find "$(pwd)$TEMPLATE_FOLDER" -type f \
  | sed -e "p;s/new-component/$COMPONENT_KEBAB_CASE/" \
        -e "s/scripts\/templates\/$PACKAGE_PARENT_DIR/packages\/$PACKAGE_PARENT_DIR\/ma-$COMPONENT_PACKAGE/" \
  | xargs -n2 cp -n;
set -e
printf "%s✔︎$NC\n" "$GREEN"

printf "Replace placeholder values: "
find "$(pwd)$DESTINATION_FOLDER" -type f -print0 \
  | xargs -0 \
    sed -i '' \
      -e "s/New Component/$COMPONENT_TITLE_CASE/g" \
      -e "s/new_component/$COMPONENT_SNAKE_CASE/g" \
      -e "s/new-component/$COMPONENT_KEBAB_CASE/g" \
      -e "s/newComponent/$COMPONENT_CAMEL_CASE/g" \
      -e "s/NewComponent/$COMPONENT_PASCAL_CASE/g" \
      -e "s/{{DESCRIPTION}}/$DESCRIPTION/g" \
    ;
printf "%s✔︎$NC\n" "$GREEN"

echo ""
printf "Build component "
cd "$(pwd)$DESTINATION_FOLDER"
pnpm install --quiet
pnpm run --silent build
printf "%s✔︎$NC\n" "$GREEN"

printf "Add new component for direct use "
cd ../../website
pnpm add "@nl-design-system-community/ma-$COMPONENT_PACKAGE@workspace:*" --quiet
printf "%s✔︎$NC\n" "$GREEN"

echo ""
echo "Done! 🎉"
echo ""
printf "You might want to run %spnpm run build$NC to\n" "$CYAN"
printf "validate that everything is working properly\n"
