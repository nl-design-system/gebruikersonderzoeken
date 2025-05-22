import type { JSX, CSSProperties, PropsWithChildren } from 'react';
import './styles.css';

type SpaceValues = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

interface PanelProps {
  space?: SpaceValues;
  spaceBlock?: SpaceValues;
  spaceBlockStart?: SpaceValues;
  spaceBlockEnd?: SpaceValues;
  spaceInline?: SpaceValues;
  spaceInlineStart?: SpaceValues;
  spaceInlineEnd?: SpaceValues;
}

export function Panel(props: PropsWithChildren<PanelProps>): JSX.Element {
  const spaceInlineStart = props.spaceInlineStart || props.spaceInline || props.space;
  const spaceInlineEnd = props.spaceInlineEnd || props.spaceInline || props.space;
  const spaceBlockStart = props.spaceBlockStart || props.spaceBlock || props.space;
  const spaceBlockEnd = props.spaceBlockEnd || props.spaceBlock || props.space;

  const style: CSSProperties = {};

  if (spaceInlineStart) {
    style['--ma-space-inline-start'] = `var(--basis-space-inline-${spaceInlineStart})`;
  }

  if (spaceInlineEnd) {
    style['--ma-space-inline-end'] = `var(--basis-space-inline-${spaceInlineEnd})`;
  }

  if (spaceBlockStart) {
    style['--ma-space-block-start'] = `var(--basis-space-block-${spaceBlockStart})`;
  }

  if (spaceBlockEnd) {
    style['--ma-space-block-end'] = `var(--basis-space-block-${spaceBlockEnd})`;
  }

  return (
    <section className="ma-panel" style={style}>
      {props.children}
    </section>
  );
}
