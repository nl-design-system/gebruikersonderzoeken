import type { PropsWithChildren } from 'react';

interface Props {
  title?: string;
  description?: string;
  canonical: URL;
}

export function Default(props: PropsWithChildren<Props>) {

  const { canonical, description, title: pageTitle } = props;

  const lang = 'nl';
  const title = pageTitle ? `${pageTitle} | Gebruikersonderzoeken` : 'Gebruikersonderzoeken';

  return (
    <html lang={lang} dir="ltr" className="ma-theme">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title}</title>
        {description && <meta name="description" content={description} />}

        <link rel="canonical" href={canonical.href} />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />

        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#ffffff" />

        {/* OpenGraph data */}
        <meta property="og:url" content={canonical.href} />
        <meta property="og:locale" content={lang} />
        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}

        {/* X */}
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>{props.children}</body>
    </html>
  );
}
