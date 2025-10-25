'use client';

import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Phone, GraduationCap, MessageCircle, Award } from 'lucide-react';
import Image from 'next/image';
import { profile } from '@/data/cn';
import Tooltip from './Tooltip';
import RotatingSkills from './RotatingSkills';
import Guestbook from './Guestbook';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="space-y-12"
        >
          {/* Photo & Name */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            {/* Profile Photo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative w-28 h-36 sm:w-36 sm:h-48 rounded-2xl overflow-hidden border border-gray-200">
                <Image
                  src="/证件照1.jpg"
                  alt="杨毅睿"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Name & Role */}
            <div className="space-y-6 flex-1">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-inter font-bold text-gray-900"
              >
                {profile.name}
              </motion.h1>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center space-x-2 text-gray-600 text-lg sm:text-xl md:text-2xl mt-4"
              >
                <GraduationCap className="w-6 h-6" />
                <span className="font-inter">{profile.education[0].school} · {profile.education[0].major}</span>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center space-x-2 text-gray-600 text-base sm:text-lg md:text-xl mt-4 mb-6"
              >
                <Award className="w-5 h-5" />
                <span className="font-inter">{profile.gpa}</span>
              </motion.div>
            </div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 gap-x-6 gap-y-6"
          >
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="w-5 h-5" />
              <span className="font-inter text-sm">{profile.phone}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="w-5 h-5" />
              <span className="font-inter text-sm">{profile.email}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MessageCircle className="w-5 h-5" />
              <span className="font-inter text-sm">WeChat: ruiyi7788aa</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span className="font-inter text-sm">{profile.location}</span>
            </div>
          </motion.div>

          {/* Guestbook */}
          <Guestbook />
        </motion.div>

        {/* Right Content - 苹果式简洁设计 */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="relative"
        >
          <div className="relative w-full h-[700px] lg:h-[800px]">
            {/* 苹果式卡片设计 */}
            <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-gray-200 p-10">
              {/* 技能轮转展示 */}
              <div className="h-full flex flex-col items-center space-y-10 pt-4">
                {/* 圆形旋转技能图标 */}
                <RotatingSkills />
                
                {/* 简洁的成就展示 */}
                <div className="w-full space-y-6 -mt-8">
                  <h3 className="text-2xl font-inter font-bold text-gray-900 text-center">核心优势</h3>
                  <div className="space-y-5 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <Tooltip 
                        content={
                          <div className="text-sm text-gray-700 leading-normal">
                            在三段实习中深入参与采购、计划、排产、物流、销售等供应链全链路环节，对于供应链有深入的认知。
                          </div>
                        }
                        position="bottom"
                      >
                        <span className="text-lg text-gray-600 hover:text-blue-600 transition-colors cursor-pointer underline decoration-dotted decoration-blue-400 text-center">
                          供应链全链路深度参与
                        </span>
                      </Tooltip>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2.5 h-2.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <Tooltip 
                        content={
                          <div className="text-sm text-gray-700 leading-normal">
                            深度参与供应链相关database的搭建与数据迁移，负责多个提升采购和供应链效率的数字化项目。
                          </div>
                        }
                        position="bottom"
                      >
                        <span className="text-lg text-gray-600 hover:text-purple-600 transition-colors cursor-pointer underline decoration-dotted decoration-purple-400 text-center">
                          供应链数字化项目经验
                        </span>
                      </Tooltip>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0"></div>
                      <Tooltip 
                        content={
                          <div className="text-sm text-gray-700 leading-normal">
                            利用施耐德内部AI Agent应用，搭建采购文件/图纸/图片的自动解析与摘要，以及语义检索、采购知识库问答的AI Agent，利用AI切实解决业务痛点。
                          </div>
                        }
                        position="bottom"
                      >
                        <span className="text-lg text-gray-600 hover:text-green-600 transition-colors cursor-pointer underline decoration-dotted decoration-green-400 text-center">
                          AI Agent 开发经验
                        </span>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
