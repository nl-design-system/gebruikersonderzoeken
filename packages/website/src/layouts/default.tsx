import type { PropsWithChildren } from 'react';

export function Default(props: PropsWithChildren) {
  return (
    <html lang="en" className="ma-theme">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
        <title>Astro</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
}
