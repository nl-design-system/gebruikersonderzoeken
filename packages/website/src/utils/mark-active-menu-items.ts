import type { MenuItem } from '@nl-design-system-community/ma-components/local/menu/index.tsx';
import { isPage, isFolder } from '@nl-design-system-community/ma-components/local/menu/index.tsx';

function isActivePage(item: MenuItem, pathName: string) {
  return isPage(item) && pathName.includes(item.slug);
}

function isActiveFolder(children: MenuItem[], pathName: string): boolean {
  if (children.length === 0) return false;

  if (children.find((child) => isActivePage(child, pathName))) {
    return true;
  }

  if (children.find((child) => isFolder(child) && isActiveFolder(child.children, pathName))) {
    return true;
  }

  return false;
}

export function markActiveMenuItems(items: MenuItem[], currentUrl: URL) {
  const pathName = currentUrl.pathname;

  const itemsClone = structuredClone(items);

  function markItem(item: MenuItem) {
    if (isActivePage(item, pathName)) {
      item.current = 'page';
    }

    if (isFolder(item) && isActiveFolder(item.children, pathName)) {
      item.current = true;
      item.children.forEach(markItem);
    }
  }

  itemsClone.forEach(markItem);

  return itemsClone;
}
