'use client';

import { motion } from 'framer-motion';

interface GlowDividerProps {
  className?: string;
  animated?: boolean;
}

export default function GlowDivider({ className = '', animated = true }: GlowDividerProps) {
  return (
    <div className={`my-24 ${className}`}>
      <div className="h-[19px] bg-gray-200"></div>
    </div>
  );
}
