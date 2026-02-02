import { Button, Textbox } from '@utrecht/component-library-react';
import { useEffect, useState, type FormEvent, type FormEventHandler } from 'react';

export interface SearchFormProps {
  value?: string | null;
  onChange?: (value: string | undefined | null) => void;
}

export function SearchForm(props: SearchFormProps) {
  const [value, setValue] = useState<string | undefined | null>('');

  useEffect(() => setValue(props.value), [props.value]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props?.onChange?.(value);
  };

  return (
    <form action="/zoeken" onSubmit={handleSubmit}>
      <Textbox name="query" required value={value || ''} onChange={(event: Event) => setValue(event.target.value)} />
      <Button type="submit">Zoeken</Button>
    </form>
  );
}
