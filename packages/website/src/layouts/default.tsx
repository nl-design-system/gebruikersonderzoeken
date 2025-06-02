import type { Cover } from '@schemas/cover.ts';
import type { PropsWithChildren } from 'react';

interface Props {
  canonical: URL;
  cover?: Cover;
  description?: string;
  title?: string;
}

export function Default(props: PropsWithChildren<Props>) {
  const { canonical, cover: pageCover, description, title: pageTitle } = props;

  const fallbackCover: Cover = {
    alt: 'Grafisch vergrootglas over document',
    url: new URL('/placeholder.png', canonical.origin).toString(),
  };

  const lang = 'nl';
  const title = pageTitle ? `${pageTitle} | Gebruikersonderzoeken` : 'Gebruikersonderzoeken';
  const cover = pageCover ?? fallbackCover;

  return (
    <html lang={lang} dir="ltr" className="ma-theme">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title}</title>
        {description && <meta name="description" content={description} />}

        <link rel="canonical" href={canonical.href} />

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />

        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* OpenGraph data */}
        <meta property="og:url" content={canonical.href} />
        <meta property="og:locale" content={lang} />
        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}
        {cover && <meta property="og:image" content={cover.url} />}
        {cover && <meta property="og:image:alt" content={cover.alt} />}

        {/* X */}
        <meta name="twitter:card" content="summary_large_image" />
        {cover && <meta property="twitter:image" content={cover.url} />}
        {cover && <meta property="twitter:image:alt" content={cover.alt} />}
      </head>
      <body>{props.children}</body>
    </html>
  );
}
