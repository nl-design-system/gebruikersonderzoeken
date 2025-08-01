import './logo.css';

export function Logo() {
  return (
    <div className="ma-logo">
      <svg width="40" height="40" aria-label="Logo Gebruikersonderzoeken" data-version="visual" role="img">
        <use xlinkHref="#logo-visual" />
      </svg>

      <svg width="184" height="41" aria-label="Gebruikersonderzoeken" data-version="text" role="img">
        <use xlinkHref="#logo-text" />
      </svg>
    </div>
  );
}
