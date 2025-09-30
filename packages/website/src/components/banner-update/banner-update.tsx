import type { ReactNode } from 'react';
import { Heading } from '@nl-design-system-candidate/heading-react';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react';
import { Banner } from '@nl-design-system-community/ma-components/banner/banner.tsx';

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
      content={<Paragraph>{props.content}</Paragraph>}
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
