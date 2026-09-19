import React from 'react';
import { Link } from 'react-router-dom';

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
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary':
        return 'btn-secondary';
      case 'stone-primary':
        return 'btn-stone-primary';
      case 'primary':
      default:
        return 'btn-primary';
    }
  };

  const combinedClass = `btn-base ${getVariantClass()} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={combinedClass} id={id} onClick={onClick}>
        {children}
        {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        id={id}
        onClick={onClick}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
        {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} id={id} onClick={onClick}>
      {children}
      {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
    </button>
  );
};
