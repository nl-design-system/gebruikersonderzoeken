import type { MenuItem } from '@nl-design-system-community/ma-components/local/menu/index.tsx';
import { isPage, isFolder } from '@nl-design-system-community/ma-components/local/menu/index.tsx';
import { getMenuStructure } from './_build-menu-structure.ts';

const menuItems = await getMenuStructure();

const isActivePage = (item: MenuItem, pathName: string) => {
  // The replace is because there is a space in one of the folders that is not
  // escaped
  return isPage(item) && pathName.includes(item.slug.replace(' ', '%20'));
};

const isActiveFolder = (items: MenuItem[], pathName: string) => {
  if (items.length === 0) return false;

  if (items.some((item) => isActivePage(item, pathName))) {
    return true;
  }

  if (items.find((item) => isFolder(item) && isActiveFolder(item.items, pathName))) {
    return true;
  }

  return false;
};

/**
 * Get a data structure for the menu items. When the `currentUrl` is provided,
 * the menu items are marked as `current`.
 */
export function getMenuItems(currentUrl?: URL) {
  const pathName = currentUrl?.pathname;

  const itemsClone = structuredClone(menuItems);

  function markItem(item: MenuItem) {
    if (pathName) {
      if (isActivePage(item, pathName)) {
        item.current = 'page';
      }

      if (isFolder(item) && isActiveFolder(item.items, pathName)) {
        item.current = true;
        item.items.forEach(markItem);
      }
    }
  }

  itemsClone.forEach(markItem);

  return itemsClone;
}
