import React from 'react';
import { cn } from '../../utils/classNames';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea
      className={cn(
        'w-full bg-transparent outline-none text-[var(--text-primary)] text-sm placeholder-[var(--text-secondary)]',
        className
      )}
      {...props}
    />
  );
}