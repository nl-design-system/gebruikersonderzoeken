import { ReactNode } from "react";
import './card-as-link.css'

interface MetadataProps {
  icon?: ReactNode
  label: string
}

export interface CardAsLinkProps {
  className?: string
  heading: ReactNode
  href?: string
  description?: ReactNode
  metadata?: MetadataProps | MetadataProps[]
  footer?: ReactNode
}

export function CardAsLink(props: CardAsLinkProps) {
  const metadata = Array.isArray(props.metadata) === false
    ? (
      <div className="ma-card-as-link__metadata">
        {props.metadata.icon && <span className="ma-card-as-link__metadata-icon">{props.metadata.icon}</span>}
        {props.metadata.label}
      </div>
    )
    : (
      <ul className="ma-card-as-link__metadata-list">
        {props.metadata.map(metadata => (
          <li key={metadata.label} className="ma-card-as-link__metadata">
            {metadata.icon && <span className="ma-card-as-link__metadata-icon">{metadata.icon}</span>}
            {metadata.label}
          </li>
        ))}
      </ul>
    )

  return (
    <article className={`ma-card-as-link ${props.className || ''}`.trim()}>
      <header className="ma-card-as-link__header">
        {props.href ? (
          <a className="nl-link" href={props.href}>
            {props.heading}
          </a>
        ) : props.heading}
      </header>

      <p className="ma-card-as-link__description nl-paragraph">
        {props.description}
      </p>

      <footer className="ma-card-as-link__footer">
        {metadata}
      </footer>
    </article>
  );
}

export interface CardAsLinkThemeProps extends CardAsLinkProps {
  icon?: ReactNode
}

export function CardAsLinkTheme(props: CardAsLinkThemeProps) {
  const { heading, href, icon, ...restProps } = props
  const headingElements = (
    <>
      <div className="ma-card-as-link-theme__icon">{icon}</div>
      <a className="nl-link" href={href}>{heading}</a>
    </>
  )

  return (
    <CardAsLink
      {...restProps}
      className="ma-card-as-link-theme"
      heading={headingElements}
    />
  )
}

export interface CardAsLinkComponentProps extends CardAsLinkProps {
  icon?: ReactNode
  status?: 'help-wanted' | 'community' | 'candidate' | 'hall-of-fame'
}

export function CardAsLinkComponent(props: CardAsLinkComponentProps) {
  const heading = (
    <>
      <div className="ma-card-as-link-theme__image">{props.icon}</div>
      {props.heading}
      <span className="ma-card-as-link-theme__status-badge">{props.status}</span>
    </>
  )

  return (
    <CardAsLink
      {...props}
      className="ma-card-as-link-component"
      heading={heading}
    />
  )
}
