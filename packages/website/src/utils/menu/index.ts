import type {
  MenuItem,
  MenuItemFolder,
  MenuItemPage,
} from '@nl-design-system-community/ma-components/local/menu/index.tsx';
import { isPage, isFolder } from '@nl-design-system-community/ma-components/local/menu/index.tsx';
import { getMenuStructure } from './_build-menu-structure.ts';
export { toCleanRoute, toCleanTag } from './to-clean-route.ts';

const menuItems = await getMenuStructure();

// The replace is because there is a space in one of the folders that is not
// escaped
const isActivePage = (item: MenuItem, pathName: string): item is MenuItemPage =>
  isPage(item) && pathName.includes(item.slug.replace(' ', '%20'));

const isActiveFolder = (folder: MenuItem, pathName: string): folder is MenuItemFolder =>
  isFolder(folder) && folder.items.some((item) => isActiveFolder(item, pathName) || isActivePage(item, pathName));

/**
 * Get a data structure for the menu items. When the `currentUrl` is provided,
 * the menu items are marked as `current`.
 */
export function getMenuItems(currentUrl?: URL) {
  const pathName = currentUrl?.pathname;
  const clonedItems = structuredClone(menuItems);

  function markItem(item: MenuItem): MenuItem {
    if (pathName && isActivePage(item, pathName)) {
      return {
        ...item,
        current: 'page',
      };
    }

    if (pathName && isActiveFolder(item, pathName)) {
      return {
        ...item,
        current: true,
        items: item.items.map(markItem),
      };
    }

    return item;
  }

  return clonedItems.map(markItem);
}

/**
 * Get a list of the current `MenuItem`s
 */
export function getCurrentMenuItems(menu: MenuItem[]) {
  const currentItems: MenuItem[] = [];

  function findCurrentItem(items: MenuItem[]) {
    const currentItem: MenuItem | undefined = items?.find((item) => item.current);

    if (currentItem) {
      currentItems.push(currentItem);
    }

    if (isFolder(currentItem)) {
      findCurrentItem(currentItem.items);
    }
  }

  findCurrentItem(menu);

  return currentItems;
}
