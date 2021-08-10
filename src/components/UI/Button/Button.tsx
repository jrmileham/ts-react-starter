import { FC, PropsWithChildren } from 'react';

import './Button.scss';

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = (props): JSX.Element => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
