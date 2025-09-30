import { PropsWithChildren } from 'react';
import './body-copy.css';

export interface Props {
  small?: boolean;
  large?: boolean;
}

export function BodyCopy(props: PropsWithChildren<Props>) {
  return (
    <div
      className={`
        ma-body-copy
        ${props.small ? 'ma-body-copy__small' : ''}
        ${props.large ? 'ma-body-copy__large' : ''}
      `.trim()}
    >
      {props.children}
    </div>
  );
}
