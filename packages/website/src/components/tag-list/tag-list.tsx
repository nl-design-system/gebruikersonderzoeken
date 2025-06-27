import type { Tag } from '@utils/tags.ts';
import './tag-list.css';

export interface TagListProps {
  tags?: Tag[];
}

export async function TagList(props: TagListProps) {
  if (!props.tags || props.tags.length === 0) return null;

  return (
    <nav className="ma-tag-list">
      <h2 className="nl-paragraph">Gerelateerde onderwerpen</h2>
      <ul>
        {props.tags.map((tag) => (
          <li key={tag.slug}>
            <a className="nl-data-badge" href={tag.slug}>
              {tag.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
