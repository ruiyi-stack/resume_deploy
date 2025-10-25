'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Mail, Calendar, Building2 } from 'lucide-react';

interface Message {
  id: number;
  name: string;
  email: string;
  company: string;
  message: string;
  date: string;
}

export default function Guestbook() {
  const [showForm, setShowForm] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: '张三',
      email: 'zhangsan@example.com',
      company: '阿里巴巴',
      message: '非常优秀的简历！希望可以进一步交流。',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: '李四',
      email: 'lisi@example.com',
      company: '腾讯',
      message: '你的供应链经验很丰富，期待合作机会。',
      date: '2024-01-10'
    },
    {
      id: 3,
      name: '王五',
      email: 'wangwu@example.com',
      company: '京东',
      message: '对你的AI Agent开发经验很感兴趣，希望有机会合作。',
      date: '2024-01-08'
    },
    {
      id: 4,
      name: '赵六',
      email: 'zhaoliu@example.com',
      company: '美团',
      message: '优秀的供应链数字化项目经验，希望能进一步了解。',
      date: '2024-01-05'
    },
    {
      id: 5,
      name: '孙七',
      email: 'sunqi@example.com',
      company: '字节跳动',
      message: '看了你的经历很受启发，想请教一些供应链优化的问题。',
      date: '2024-01-03'
    }
  ]);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage: Message = {
      id: messages.length + 1,
      name,
      email,
      company,
      message,
      date: new Date().toISOString().split('T')[0]
    };
    setMessages([newMessage, ...messages]);
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setShowForm(false);
  };

  // 自动滚动效果
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.25; // 滚动速度（像素/帧）- 苹果式缓慢优雅
    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused && container) {
        const maxScroll = container.scrollHeight - container.clientHeight;
        
        if (scrollPosition >= maxScroll) {
          // 滚动到底部后，等待2秒然后平滑回到顶部
          setTimeout(() => {
            scrollPosition = 0;
            container.scrollTo({ top: 0, behavior: 'smooth' });
          }, 2000);
        } else {
          scrollPosition += scrollSpeed;
          container.scrollTop = scrollPosition;
        }
        
        animationFrameId = requestAnimationFrame(scroll);
      }
    };

    // 延迟启动滚动，给用户时间阅读（3秒）
    const startDelay = setTimeout(() => {
      if (!isPaused) {
        animationFrameId = requestAnimationFrame(scroll);
      }
    }, 3000);

    return () => {
      clearTimeout(startDelay);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  // 自动恢复滚动（在用户停止交互后）
  useEffect(() => {
    if (isPaused) {
      // 清除之前的定时器
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
      
      // 设置新的定时器，3秒后恢复滚动
      resumeTimerRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 3000);
    }

    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, [isPaused]);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="w-full"
    >
      {/* Header with Add Button */}
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-xl font-inter font-bold text-gray-900">留言板</h3>
        <motion.button
          onClick={() => setShowForm(!showForm)}
          className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          {showForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Add Message Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-10 overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="您的姓名"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-400 focus:bg-white focus:outline-none transition-all font-inter text-sm"
                />
                <input
                  type="email"
                  placeholder="您的邮箱"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-400 focus:bg-white focus:outline-none transition-all font-inter text-sm"
                />
              </div>
              <input
                type="text"
                placeholder="公司名称"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-400 focus:bg-white focus:outline-none transition-all font-inter text-sm"
              />
              <textarea
                placeholder="留下您的留言..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={3}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-400 focus:bg-white focus:outline-none transition-all font-inter text-sm resize-none"
              />
              <div className="flex gap-3">
                <motion.button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-inter font-medium hover:bg-gray-200 transition-colors duration-200"
                  whileTap={{ scale: 0.98 }}
                >
                  取消
                </motion.button>
                <motion.button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-blue-400 text-white rounded-xl font-inter font-medium hover:bg-blue-500 transition-colors duration-200"
                  whileTap={{ scale: 0.98 }}
                >
                  发送
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages List with Scroll */}
      <div className="relative">
        {/* Colorful border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-[2px] opacity-20"></div>
        
        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="relative bg-white rounded-2xl p-5 max-h-[320px] overflow-y-auto custom-scrollbar"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onWheel={() => setIsPaused(true)}
        >
          <div className="space-y-7 pr-2">
            {messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h4 className="text-sm font-inter font-semibold text-gray-900 mb-3">{msg.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Mail className="w-3 h-3" />
                      <span>{msg.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Building2 className="w-3 h-3" />
                      <span>{msg.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400 whitespace-nowrap">
                    <Calendar className="w-3 h-3" />
                    <span>{msg.date}</span>
                  </div>
                </div>
                <p className="text-xs font-inter text-gray-700 leading-relaxed">{msg.message}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

