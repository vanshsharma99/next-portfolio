import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'cyan' | 'indigo' | 'purple' | 'gray' | 'success';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'cyan',
  children,
  className,
  ...props
}) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    gray: 'bg-gray-800/80 text-gray-300 border-gray-700/50',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-md',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
