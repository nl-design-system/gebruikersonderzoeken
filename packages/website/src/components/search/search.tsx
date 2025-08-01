import './search.css';
import { IconSearch } from '@tabler/icons-react';

export function Search() {
  /* @FIXME: This is only the markup. There is nog functionality behind it yet */
  return (
    <search className="ma-search">
      <input type="text" className="utrecht-textbox" placeholder="Bijvoorbeeld zwembad of grofvuil" />
      <button className="utrecht-button utrecht-button--secondary-action">
        <IconSearch /> Zoeken
      </button>
    </search>
  );
}
