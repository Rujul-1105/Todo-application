import React from 'react';
import { cn } from '../../utils/classNames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'danger' | 'success';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'default', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const variantClasses = {
    default: 'text-[var(--text-primary)] hover:text-[var(--accent)]',
    danger: 'text-red-400 hover:text-red-300',
    success: 'text-green-400 hover:text-green-300',
  };

  return (
    <button
      className={cn(
        'neumorphic-button p-2 rounded-lg transition-colors',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}