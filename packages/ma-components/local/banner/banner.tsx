import type { ReactNode } from 'react';
import './banner.css';

export interface BannerProps {
  version?: 'hero' | 'updates';
  imageAppearance?: 'small' | 'large';
  image?: ReactNode;
  heading?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
}

export function Banner(props: BannerProps) {
  return (
    <section
      className={`
        ma-banner
        ${props.version === 'hero' ? 'ma-banner--hero' : ''}
        ${props.version === 'updates' ? 'ma-banner--updates' : ''}
        ${props.imageAppearance === 'small' ? 'ma-banner--image-appearance-small' : ''}
      `.trim()}
    >
      <div className="ma-banner__content">
        {props.image && <div className="ma-banner__image">{props.image}</div>}

        {props.heading && <header className="ma-banner__header">{props.heading}</header>}

        <div className="ma-banner__copy">{props.content}</div>

        {props.footer && <footer className="ma-banner__footer">{props.footer}</footer>}
      </div>
    </section>
  );
}
