import { Paragraph } from '@nl-design-system-candidate/paragraph-react';
import { SearchError as SearchErrorClass } from '../algolia-api/fetch-results.ts';
import { GroupError } from '../algolia-api/group-hits-to-pages.ts';

export interface SearchErrorProps {
  error: SearchErrorClass | GroupError;
}

export function SearchError(props: SearchErrorProps) {
  let status: number | undefined;
  let userMessage: string;

  if (props.error instanceof SearchErrorClass) {
    status = props.error.status;
    console.error(`Search Error${status ? ` (${status})` : ''}:`, props.error);
  }

  if (props.error instanceof GroupError) {
    console.error(`Group Error:`, props.error);
  }

  switch (status) {
    case 400:
      userMessage = 'Er is een verkeerde zoekterm gebruikt';
      break;
    case 404:
      userMessage = 'Er zijn geen resultaten gevonden';
      break;
    default:
      userMessage = 'Er gaat iets mis met het ophalen van de zoek resultaten';
  }

  return <Paragraph>{userMessage}</Paragraph>;
}
