'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';

interface EmailProvider {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  url: string;
}

const emailProviders: EmailProvider[] = [
  {
    name: 'QQ邮箱',
    icon: '✉️',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
    url: 'https://mail.qq.com'
  },
  {
    name: '网易邮箱',
    icon: '📧',
    color: 'text-red-600',
    bgColor: 'bg-red-50 hover:bg-red-100',
    url: 'https://mail.163.com'
  },
  {
    name: 'Gmail',
    icon: '📮',
    color: 'text-red-500',
    bgColor: 'bg-white hover:bg-gray-50 border-2 border-gray-200',
    url: 'https://mail.google.com'
  },
  {
    name: 'Outlook',
    icon: '📨',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
    url: 'https://outlook.live.com'
  },
  {
    name: '126邮箱',
    icon: '📩',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 hover:bg-orange-100',
    url: 'https://mail.126.com'
  },
  {
    name: 'Yahoo邮箱',
    icon: '✉️',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 hover:bg-purple-100',
    url: 'https://mail.yahoo.com'
  }
];

interface EmailSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  recipientEmail: string;
}

export default function EmailSelector({ isOpen, onClose, recipientEmail }: EmailSelectorProps) {
  const handleEmailClick = (provider: EmailProvider) => {
    // 构建mailto链接，如果邮箱支持的话
    const mailtoLink = `mailto:${recipientEmail}`;
    
    // 先尝试打开mailto链接
    window.location.href = mailtoLink;
    
    // 然后打开邮箱提供商的网站
    setTimeout(() => {
      window.open(provider.url, '_blank');
    }, 100);
    
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* 弹窗内容 - 从顶部按钮下方显示 */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-4 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-xl shadow-xl w-80 p-4 border border-gray-200">
              {/* 标题栏 */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-inter font-bold text-gray-900">选择邮箱</h3>
                </div>
                <motion.button
                  onClick={onClose}
                  className="w-6 h-6 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-4 h-4 text-gray-500" />
                </motion.button>
              </div>

              {/* 收件人邮箱显示 */}
              <div className="mb-3 p-2 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 font-inter">{recipientEmail}</p>
              </div>

              {/* 邮箱提供商列表 */}
              <div className="grid grid-cols-2 gap-2">
                {emailProviders.map((provider, index) => (
                  <motion.button
                    key={provider.name}
                    onClick={() => handleEmailClick(provider)}
                    className={`${provider.bgColor} p-3 rounded-lg flex flex-col items-center justify-center gap-1 transition-all duration-200 relative overflow-hidden border-2 border-transparent`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ 
                      scale: 0.95,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)"
                    }}
                  >
                    <span className="text-2xl">{provider.icon}</span>
                    <span className={`text-xs font-inter font-medium ${provider.color}`}>
                      {provider.name}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* 提示文字 */}
              <p className="text-xs text-gray-400 text-center mt-3">
                点击后自动打开
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

