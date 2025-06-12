import './logo.css';

export interface LogoProps {
  version: 'text' | 'visual';
}

export function Logo(props: LogoProps) {
  const width = props.version === 'text' ? 263 : 40; // Values taken from SVG Viewbox in ./logo.svg
  const height = props.version === 'text' ? 48 : 40; // Values taken from SVG Viewbox in ./logo.svg
  const label = props.version === 'text' ? 'Gebruikersonderzoeken' : 'Logo Gebruikersonderzoeken';

  return (
    <svg className="ma-logo" width={width} height={height} aria-label={label} data-version={props.version} role="img">
      <use xlinkHref={`#logo-${props.version}`} />
    </svg>
  );
}
