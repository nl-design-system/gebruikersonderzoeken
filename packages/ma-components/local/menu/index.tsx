interface MenuProps {
  items: MenuItem[];
}

export interface MenuItemFolder {
  id: string;
  label: string;
  expandable: true;
  expanded: boolean;
  current?: boolean;
  items: Array<MenuItemFolder | MenuItemPage>;
}

export interface MenuItemPage {
  id: string;
  label: string;
  slug: string;
  current?: 'page';
}

export type MenuItem = MenuItemFolder | MenuItemPage;

export function isPage(item: unknown): item is MenuItemPage {
  return typeof (item as MenuItemPage)?.slug === 'string';
}

export function isFolder(item: unknown): item is MenuItemFolder {
  return (item as MenuItemFolder)?.expandable === true;
}

export function isMenuItem(item: unknown): item is MenuItem {
  return isFolder(item) || isPage(item);
}

function Page(props: Readonly<MenuItemPage>) {
  return (
    <a href={props.slug} aria-current={props.current || null}>
      {props.current ? <b>{props.label}</b> : props.label}
    </a>
  );
}

function Folder(props: Readonly<MenuItemFolder>) {
  const folders = props.items.filter(isFolder);
  const pages = props.items.filter(isPage);

  return (
    <details open={props.expanded || props.current}>
      <summary>{props.current ? <b>{props.label}</b> : props.label}</summary>
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
