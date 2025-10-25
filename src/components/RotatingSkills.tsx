'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  icon: string;
  label: string;
  color: string;
}

const skills: Skill[] = [
  { icon: '💻', label: '供应链数字化', color: 'from-blue-200 to-blue-300' },
  { icon: '📊', label: '数据分析', color: 'from-purple-200 to-purple-300' },
  { icon: '🗄️', label: '数据仓库', color: 'from-green-200 to-green-300' },
  { icon: '🚚', label: '供应链运营', color: 'from-orange-200 to-orange-300' },
];

export default function RotatingSkills() {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 600);
  };

  const radius = 140;
  const centerX = 250;
  const centerY = 250;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Mobile: Static Grid Layout */}
      <div className="lg:hidden w-full grid grid-cols-2 gap-4 px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full"
          >
            <motion.div
              className={`w-full aspect-square bg-gradient-to-br ${skill.color} rounded-2xl flex flex-col items-center justify-center shadow-lg cursor-pointer group relative overflow-hidden transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* 背景光效 */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* 图标 */}
              <span className="text-4xl mb-2 relative z-10">{skill.icon}</span>
              
              {/* 文字 */}
              <p className="text-xs font-inter font-bold text-gray-700 drop-shadow-sm relative z-10 px-2 text-center leading-tight">
                {skill.label}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Desktop: Rotating container */}
      <motion.div 
        className="hidden lg:block relative w-[400px] h-[400px] xl:w-[500px] xl:h-[500px]"
        style={{ transformOrigin: 'center center' }}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {/* Wave circle line with color animation */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6">
                <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#8b5cf6">
                <animate attributeName="offset" values="0.5;1.5;0.5" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#10b981">
                <animate attributeName="offset" values="1;2;1" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            d="M 390,250 A 140,140 0 1,1 110,250 M 110,250 A 140,140 0 1,1 390,250"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="6"
            filter="url(#glow)"
          >
            <animate
              attributeName="d"
              values="M 390,250 A 140,140 0 1,1 110,250 M 110,250 A 140,140 0 1,1 390,250;
                     M 395,250 A 140,140 0 1,1 105,250 M 105,250 A 140,140 0 1,1 395,250;
                     M 390,250 A 140,140 0 1,1 110,250 M 110,250 A 140,140 0 1,1 390,250"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {/* Skill items */}
        {skills.map((skill, index) => {
          // Fixed positions for four quadrants: top, right, bottom, left
          const angle = (index * 90 - 90);
          const radian = (angle * Math.PI) / 180;
          const itemX = centerX + radius * Math.cos(radian);
          const itemY = centerY + radius * Math.sin(radian);

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: itemX - 70,
                top: itemY - 70,
              }}
              initial={{ scale: 0 }}
              animate={{ 
                scale: clickedIndex === index ? [1, 1.2, 1] : 1,
                rotate: clickedIndex === index ? [0, -10, 10, -10, 10, 0] : -360,
              }}
              transition={{ 
                scale: { duration: 0.6 },
                rotate: clickedIndex === index 
                  ? { duration: 0.6 }
                  : { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              onClick={() => handleClick(index)}
            >
              <motion.div
                className={`w-[120px] h-[120px] xl:w-[140px] xl:h-[140px] bg-gradient-to-br ${skill.color} rounded-full flex flex-col items-center justify-center shadow-xl cursor-pointer group relative overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* 背景光效 */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* 图标 */}
                <span className="text-4xl xl:text-5xl mb-2 relative z-10">{skill.icon}</span>
                
                {/* 文字 */}
                <p className="text-xs font-inter font-bold text-gray-700 drop-shadow-sm relative z-10 px-2 text-center leading-tight">
                  {skill.label}
                </p>
              </motion.div>
            </motion.div>
          );
        })}

      </motion.div>
    </div>
  );
}

