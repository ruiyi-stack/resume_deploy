'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  glowColor?: 'primary' | 'accent' | 'warning' | 'purple';
  animated?: boolean;
  topRightContent?: ReactNode;
}

export default function Card({ 
  children, 
  className = '', 
  hoverable = true,
  glowColor = 'primary',
  animated = true,
  topRightContent
}: CardProps) {
  const baseClasses = `
    bg-white rounded-2xl shadow-sm border border-gray-200 p-6 relative overflow-hidden
    ${hoverable ? 'hover:shadow-md cursor-pointer' : ''}
    ${className}
  `;

  const CardComponent = animated ? motion.div : 'div';

  const animationProps = animated ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    whileHover: hoverable ? {
      y: -2,
    } : {},
    transition: { duration: 0.3 },
    viewport: { once: true }
  } : {};

  return (
    <CardComponent
      className={baseClasses}
      {...animationProps}
    >
      {/* Top Right Content */}
      {topRightContent && (
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20">
          <div className="scale-75 sm:scale-100 lg:scale-110">
            {topRightContent}
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </CardComponent>
  );
}
