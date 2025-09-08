import { Fragment, PropsWithChildren } from 'react';
import './data-summary.css';

type Term = string;
type Definition = string;

export interface DataSummaryItem {
  term: Term;
  definition?: Definition | Definition[];
}

export interface DataSummaryProps {
  appearance: 'rows' | 'columns';
  items: DataSummaryItem[];
}

function TermElement(props: PropsWithChildren) {
  return <dt>{props.children}</dt>;
}

function DefinitionElement(props: PropsWithChildren) {
  return Array.isArray(props.children) ? (
    <div>
      {props.children.map((definitionItem) => (
        <dd>{definitionItem}</dd>
      ))}
    </div>
  ) : (
    <dd>{props.children}</dd>
  );
}

const hasDefinition = (item: DataSummaryItem) =>
  Array.isArray(item.definition) ? item.definition.length > 0 : item.definition;

export function DataSummary(props: DataSummaryProps) {
  const items = props.items.filter((item) => item.term && hasDefinition(item));

  return items.length > 0 ? (
    <dl
      className={`
        ma-data-summary
        ${props.appearance === 'rows' ? 'ma-data-summary--appearance-rows' : ''}
        ${props.appearance === 'columns' ? 'ma-data-summary--appearance-columns' : ''}
      `.trim()}
    >
      {items.map((item) => (
        <Fragment>
          <TermElement>{item.term}</TermElement>
          <DefinitionElement>{item.definition}</DefinitionElement>
        </Fragment>
      ))}
    </dl>
  ) : null;
}
