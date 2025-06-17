import type { MenuItem } from '@nl-design-system-community/ma-components/local/menu/index.tsx';
import { isFolder } from '@nl-design-system-community/ma-components/local/menu/index.tsx';
import '@utrecht/breadcrumb-nav-css/dist/index.css';
import { IconChevronRight } from '@tabler/icons-react';
import { BreadcrumbNav, BreadcrumbNavLink, BreadcrumbNavSeparator } from '@utrecht/component-library-react';
import { Fragment } from 'react';

export interface BreadcrumbProps {
  items: MenuItem[];
}

export function Breadcrumb(props: BreadcrumbProps) {
  const items = props.items;
  return (
    <BreadcrumbNav label="Kruimelpad">
      <BreadcrumbNavLink href="/" index={0} rel="home">
        Home
      </BreadcrumbNavLink>

      {items.map((item, itemIndex, list) => {
        const current = itemIndex === list.length - 1;
        const index = itemIndex + 1;

        // @ts-expect-error - Slug is only available on MenuItemPage, in the future (#355) this will also be available for
        // MenuItemFolder
        const href = isFolder(item) ? item.slug : null;

        return (
          <Fragment>
            <BreadcrumbNavSeparator>
              <IconChevronRight />
            </BreadcrumbNavSeparator>

            <BreadcrumbNavLink current={current} index={index} href={href}>
              {item.label}
            </BreadcrumbNavLink>
          </Fragment>
        );
      })}
    </BreadcrumbNav>
  );
}
