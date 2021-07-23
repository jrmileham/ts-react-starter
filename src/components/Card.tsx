import { HTMLAttributes, PropsWithChildren } from 'react';
import './Card.scss';

type CardProps = HTMLAttributes<HTMLDivElement> & {};

function Card(props: PropsWithChildren<CardProps>): JSX.Element {
  return <div className={`card ${props.className}`}>{props.children}</div>;
}

export default Card;