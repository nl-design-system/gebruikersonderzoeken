import { ButtonHTMLAttributes, ReactNode } from 'react';
import './toolbar-button.css';

interface ToolbarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

const cn = (...classes: Array<string | undefined | null>): string => classes.filter(Boolean).join(' ');

export function ToolbarButton(props: ToolbarButtonProps) {
  const { children, className, icon, ...attributes } = props;

  return (
    <button className={cn('ma-toolbar-button', className)} {...attributes}>
      {icon}
      {children}
    </button>
  );
}
