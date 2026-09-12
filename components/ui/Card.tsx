import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'glass-card rounded-2xl p-6 relative overflow-hidden',
        hoverEffect && 'glass-card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
