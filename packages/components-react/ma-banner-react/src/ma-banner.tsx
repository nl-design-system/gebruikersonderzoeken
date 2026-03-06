import type { ReactNode, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface BannerProps extends HTMLAttributes<HTMLElement> {
  version?: 'hero' | 'updates';
  imageAppearance?: 'small' | 'large';
  image?: ReactNode;
  heading?: ReactNode;
  copy?: ReactNode;
  footer?: ReactNode;
}

export const Banner = forwardRef<HTMLElement, BannerProps>(function Banner(props, forwardedRef) {
  const { className, copy, footer, heading, image, imageAppearance, version, ...restProps } = props;

  return (
    <section
      className={clsx(
        'ma-banner',
        version === 'hero' && 'ma-banner--hero',
        version === 'updates' && 'ma-banner--updates',
        imageAppearance === 'small' && 'ma-banner--image-appearance-small',
        className,
      )}
      ref={forwardedRef}
      {...restProps}
    >
      <div className="ma-banner__content">
        {image && <div className="ma-banner__image">{image}</div>}

        {heading && <header className="ma-banner__header">{heading}</header>}

        <div className="ma-banner__copy">{copy}</div>

        {footer && <footer className="ma-banner__footer">{footer}</footer>}
      </div>
    </section>
  );
});

Banner.displayName = 'Banner';
