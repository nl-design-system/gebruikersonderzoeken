import logo from './logo.svg?raw';

export function Logo() {
  // @TODO: Use a proper logo with a light and dark mode and icon embedded
  return <div dangerouslySetInnerHTML={{ __html: logo }}></div>;
}
