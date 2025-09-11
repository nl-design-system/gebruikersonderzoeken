import './navigation-drawer.css';

function Header() {
  return (
    <header className="ma-navigation-drawer__header">
      <button command="close" commandfor="ma-navigation-drawer">
        sluiten
      </button>
    </header>
  );
}

function Item() {
  return <li className="ma-navigation-drawer__item">foo</li>;
}

export function NavigationDrawer() {
  return (
    <dialog id="ma-navigation-drawer" className="ma-navigation-drawer">
      <Header />
      <ul role="list">
        <Item />
        <Item />
      </ul>
    </dialog>
  );
}
