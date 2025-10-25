'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'accent' | 'warning' | 'purple' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

export default function Badge({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  animated = true 
}: BadgeProps) {
  const variantClasses = {
    primary: 'border-blue-200 text-blue-700 bg-blue-50',
    accent: 'border-pink-200 text-pink-700 bg-pink-50',
    warning: 'border-yellow-200 text-yellow-700 bg-yellow-50',
    purple: 'border-purple-200 text-purple-700 bg-purple-50',
    gray: 'border-gray-200 text-gray-700 bg-gray-50',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const BadgeComponent = animated ? motion.span : 'span';

  const baseClasses = `
    inline-flex items-center font-inter font-medium rounded-full border
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  const animationProps = animated ? {
    whileHover: { 
      scale: 1.02,
    },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  } : {};

  return (
    <BadgeComponent
      className={baseClasses}
      {...animationProps}
    >
      {children}
    </BadgeComponent>
  );
}
