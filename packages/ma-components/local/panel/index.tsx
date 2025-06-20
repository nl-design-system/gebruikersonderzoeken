import type { JSX, PropsWithChildren } from 'react';
import './styles.css';

type SpaceValues = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

interface PanelProps {
  space?: SpaceValues;
  spaceBlock?: SpaceValues;
  spaceInline?: SpaceValues;
}

export function Panel(props: PropsWithChildren<PanelProps>): JSX.Element {
  const spaceInline = props.spaceInline ?? props.space;
  const spaceBlock = props.spaceBlock ?? props.space;

  return (
    <section className="ma-panel" data-space-inline={spaceInline} data-space-block={spaceBlock}>
      {props.children}
    </section>
  );
}
