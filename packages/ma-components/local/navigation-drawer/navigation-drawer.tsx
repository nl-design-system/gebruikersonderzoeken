import './navigation-drawer.css';

interface NavigationDrawerItemProps {
  expandable?: boolean;
  current?: boolean;
  label: string;
  href: string;
}

function Header() {
  return (
    <header className="ma-navigation-drawer__header">
      <button command="close" commandfor="ma-navigation-drawer">
        sluiten
      </button>
    </header>
  );
}

function Item(props: NavigationDrawerItemProps) {
  return (
    <li className="ma-navigation-drawer__item ma-focus-indicator-inset">
      <a href={props.href} aria-current={props.current ? 'page' : null}>
        {props.label}
      </a>
    </li>
  );
}

export function NavigationDrawer() {
  return (
    <dialog id="ma-navigation-drawer" className="ma-navigation-drawer">
      <Header />
      <ul className="ma-navigation-drawer__list" role="list">
        <Item label="foo" href="#" />
        <Item label="bar" href="#" current />
        <Item label="baz" href="#" />
      </ul>
    </dialog>
  );
}
