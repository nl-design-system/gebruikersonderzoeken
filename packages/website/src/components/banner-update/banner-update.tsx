import type { ReactNode } from 'react';
import { Heading } from '@components/heading/heading.tsx';
import { Paragraph } from '@components/paragraph/paragraph.tsx';
import { Banner } from '@nl-design-system-community/ma-banner-react/dist/ma-banner.mjs';
import '@nl-design-system-community/ma-banner-css/dist/ma-banner.css';

export interface BannerUpdateProps {
  image?: ReactNode;
  heading: ReactNode;
  content: ReactNode;
  footerActions?: {
    href: string;
    label: ReactNode;
  }[];
}

export function BannerUpdate(props: BannerUpdateProps) {
  return (
    <Banner
      image={props.image}
      imageAppearance="small"
      version="updates"
      heading={<Heading level={2}>{props.heading}</Heading>}
      copy={<Paragraph>{props.content}</Paragraph>}
      footer={
        props.footerActions ? (
          <div className="utrecht-action-group">
            {props.footerActions.map((item, index) => (
              <a
                className={`
                utrecht-button-link
                utrecht-button-link--html-a
                ${index === 0 ? 'utrecht-button-link--primary-action' : 'utrecht-button-link--secondary-action'}
              `}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : undefined
      }
    />
  );
}
