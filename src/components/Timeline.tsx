'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Card from './Card';

interface TimelineItem {
  period: string;
  title: string;
  subtitle?: string;
  content: ReactNode;
  color?: 'primary' | 'accent' | 'warning' | 'purple';
  companyIcon?: ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className = '' }: TimelineProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card topRightContent={item.companyIcon}>
            <div className="space-y-4 pr-20">
              {/* 时间标签 */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-inter text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {item.period}
                </span>
              </div>
              
              {/* 标题和副标题 */}
              <div className="space-y-2">
                <h3 className="text-2xl font-inter font-bold text-gray-900">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-lg font-inter text-gray-600">
                    {item.subtitle}
                  </p>
                )}
              </div>
              
              {/* 内容 */}
              <div className="text-gray-700 font-inter leading-relaxed">
                {item.content}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
