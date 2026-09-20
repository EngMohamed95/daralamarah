import React from 'react';
import { Link } from 'react-router-dom';
import { UIButton } from './ui/button';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'stone-primary';
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  id?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  id,
  icon,
}) => {
  const getVariant = (): 'default' | 'secondary' => {
    switch (variant) {
      case 'secondary':
        return 'secondary';
      case 'stone-primary':
        return 'default';
      case 'primary':
      default:
        return 'default';
    }
  };

  if (to) {
    return (
      <UIButton asChild variant={getVariant()} className={className}>
        <Link to={to} id={id} onClick={onClick}>{children}{icon && <span className="ui-button__icon">{icon}</span>}</Link>
      </UIButton>
    );
  }

  if (href) {
    return (
      <UIButton asChild variant={getVariant()} className={className}>
        <a href={href} id={id} onClick={onClick} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {children}{icon && <span className="ui-button__icon">{icon}</span>}
        </a>
      </UIButton>
    );
  }

  return (
    <UIButton type={type} variant={getVariant()} className={className} id={id} onClick={onClick}>
      {children}{icon && <span className="ui-button__icon">{icon}</span>}
    </UIButton>
  );
};
