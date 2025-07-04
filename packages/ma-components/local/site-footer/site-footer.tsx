import './site-footer.css';
import { Fragment } from 'react/jsx-runtime';
import { Logo } from '../logo/logo';
import graphic from './graphic.svg?raw';

export function SiteFooter() {
  return (
    <Fragment>
      <div className="ma-site-footer-graphic">
        <div dangerouslySetInnerHTML={{ __html: graphic }} />
      </div>
      <footer className="ma-site-footer">
        <div className="ma-site-footer__content">
          <div className="ma-site-footer__logo">
            <Logo version="visual" scaleFactor={1.6} />
            <Logo version="text" scaleFactor={1.6} />
          </div>

          <nav className="ma-site-footer__contact-links">
            <b>Contact</b>
            <a href="mailto:info@nldesignsystem.nl">
              NL Design System kernteam - <span>info@nldesignsystem.nl</span>
            </a>
            <a href="mailto:j.du.chatinier@utrecht.nl">
              Jeroen du Chatinier - <span>j.du.chatinier@utrecht.nl</span>
            </a>
          </nav>

          <nav className="ma-site-footer__social-links">
            <a href="#">GitHub</a>
          </nav>
        </div>
      </footer>
    </Fragment>
  );
}
