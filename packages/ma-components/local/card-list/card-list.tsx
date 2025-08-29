import './card-list.css';

export function CardList(props: CardListProps) {
  const children = Array.isArray(props.children) ? props.children : [props.children];

  return (
    <ul className="ma-card-list" role="list">
      {children.map((child, index) => (
        <li key={`${index}`}>{child}</li>
      ))}
    </ul>
  );
}
