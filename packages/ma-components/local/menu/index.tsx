interface MenuProps {
  items: MenuItem[];
}

interface MenuItemFolder {
  id: string;
  label: string;
  collapsible: boolean;
  collapsed: boolean;
  children: Array<MenuItemFolder | MenuItemPage>;
}

interface MenuItemPage {
  id: string;
  label: string;
  slug: string;
}

export type MenuItem = MenuItemFolder | MenuItemPage;

export function isPage(item: unknown): item is MenuItemPage {
  return typeof (item as MenuItemPage)?.slug === 'string';
}

export function isFolder(item: unknown): item is MenuItemFolder {
  return (item as MenuItemFolder)?.collapsible === true;
}

export function isMenuItem(item: unknown): item is MenuItem {
  return isFolder(item) || isPage(item);
}

function Page(props: Readonly<MenuItemPage>) {
  return <a href={props.slug}>{props.label}</a>;
}

function Folder(props: Readonly<MenuItemFolder>) {
  const folders = props.children.filter(isFolder);
  const pages = props.children.filter(isPage);

  return (
    <details open={props.collapsed === false}>
      <summary>{props.label}</summary>
      <ul>
        {[...folders, ...pages].map((child) => (
          <li key={child.id}>
            <Item {...child} />
          </li>
        ))}
      </ul>
    </details>
  );
}

function Item(item: Readonly<MenuItem>) {
  if (isPage(item)) {
    return <Page {...item} />;
  }

  if (isFolder(item)) {
    return <Folder {...item} />;
  }

  return null;
}

export function Menu(menu: Readonly<MenuProps>) {
  return (
    <nav>
      <details open>
        <summary>Menu</summary>
        <ul>
          {menu.items.map((item) => (
            <li key={item.id}>
              <Item {...item} />
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}
