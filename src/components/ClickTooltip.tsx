'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ClickTooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export default function ClickTooltip({ 
  content, 
  children, 
  position = 'top'
}: ClickTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const closeTooltip = () => {
    setIsVisible(false);
  };

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
    left: 'right-full top-1/2 -translate-y-1/2 mr-3',
    right: 'left-full top-1/2 -translate-y-1/2 ml-3',
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-gray-900',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-900',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-gray-900',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-gray-900',
  };

  return (
    <div className="relative inline-block">
      <div 
        onClick={toggleVisibility}
        className="cursor-pointer hover:opacity-80 transition-opacity"
      >
        {children}
      </div>
      
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeTooltip}
              className="fixed inset-0 bg-black/20 z-40"
            />
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              className={`fixed z-50 ${positionClasses[position]}`}
            >
              <div className="bg-gray-900 text-white text-sm rounded-lg px-5 py-4 shadow-2xl max-w-md relative">
                {/* Close button */}
                <button
                  onClick={closeTooltip}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                
                {/* Content */}
                <div className="pr-6">
                  {content}
                </div>
                
                {/* Arrow */}
                <div className={`absolute w-0 h-0 border-8 ${arrowClasses[position]}`} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

