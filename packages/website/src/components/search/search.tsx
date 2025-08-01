import { IconSearch } from '@tabler/icons-react';
import './search.css';
import { Button } from '@utrecht/component-library-react';

export function Search() {
  /* @FIXME: This is only the markup. There is nog functionality behind it yet */
  return (
    <search className="ma-search">
      <input type="text" className="utrecht-textbox" placeholder="Bijvoorbeeld zwembad of grofvuil" />
      <Button appearance="secondary-action-button">
        <IconSearch /> Zoeken
      </Button>
    </search>
  );
}
