import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Timeline from '@/components/Timeline';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import GlowDivider from '@/components/GlowDivider';
import Footer from '@/components/Footer';
import { Mail, Download } from 'lucide-react';
import Image from 'next/image';
import { profile } from '@/data/cn';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        <GlowDivider />

        {/* Education Section */}
        <Section id="education" title="教育背景" subtitle="学术成就与专业学习">
          <Timeline
            items={profile.education.map(edu => ({
              period: edu.period,
              title: edu.school,
              subtitle: edu.major,
              content: (
                <div className="space-y-4">
                  <p className="text-gray-600 font-inter leading-relaxed">
                    主修课程涵盖物流管理、数据分析、供应链优化等核心领域，具备扎实的理论基础和专业技能。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, index) => (
                      <Badge key={index} variant="primary" size="sm">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              ),
              color: 'primary' as const,
              companyIcon: (
                <Image
                  src="/tju.jpg"
                  alt="同济大学"
                  width={120}
                  height={120}
                  className="object-contain rounded-lg"
                />
              )
            }))}
          />
        </Section>

        <GlowDivider />

        {/* Awards Section */}
        <Section id="awards" title="获奖经历" subtitle="学术与竞赛成就">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.awards.map((award, index) => (
              <Card key={index}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-inter font-bold text-gray-900">
                      {award.title}
                    </h3>
                    <Badge variant="accent" size="sm">
                      {award.year}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <GlowDivider />

        {/* Experience Section */}
        <Section id="experience" title="工作经历" subtitle="实习与项目经验">
          <Timeline
            items={profile.experiences.map((exp, index) => {
              // 根据公司选择不同的logo
              let companyIcon;
              if (exp.company === '施耐德电气') {
                companyIcon = (
                  <Image
                    src="/logos/schneider-electric-logo.jpg"
                    alt="施耐德电气"
                    width={120}
                    height={120}
                    className="object-contain rounded-lg"
                  />
                );
              } else if (exp.company === '比瑞吉（上海）') {
                companyIcon = (
                  <Image
                    src="/logos/biruiji-logo.jpg"
                    alt="比瑞吉"
                    width={120}
                    height={120}
                    className="object-contain rounded-lg"
                  />
                );
              } else if (exp.company === '广东华电清远能源公司') {
                companyIcon = (
                  <Image
                    src="/logos/huadian-logo.jpg"
                    alt="华电清远"
                    width={120}
                    height={120}
                    className="object-contain rounded-lg"
                  />
                );
              }

              return {
                period: exp.period,
                title: exp.title,
                subtitle: exp.company,
                content: (
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1 flex-shrink-0 text-sm">▸</span>
                        <span className="text-gray-600 font-inter leading-relaxed text-sm flex-1">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                ),
                color: 'warning' as const,
                companyIcon
              };
            })}
          />
        </Section>

        <GlowDivider />

        {/* Projects Section */}
        <Section id="projects" title="项目经历" subtitle="技术项目与创新实践">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {profile.projects.map((project, index) => (
              <Card key={index}>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-inter font-bold text-gray-900">
                      {project.name}
                    </h3>
                    <Badge variant="purple" size="sm">
                      {project.role}
                    </Badge>
                  </div>
                  <p className="text-gray-600 font-inter font-medium">
                    {project.period}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-sm font-inter font-semibold text-gray-700">
                      技术栈：
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="gray" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <h4 className="text-sm font-inter font-semibold text-gray-700">
                      项目亮点：
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start space-x-2">
                          <span className="text-purple-500 mt-1">▸</span>
                          <span className="text-gray-600 font-inter text-sm leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <GlowDivider />

        {/* Skills Section */}
        <Section id="skills" title="技能专长" subtitle="技术能力与语言水平">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-lg font-inter font-bold text-gray-900 mb-4">
                语言能力
              </h3>
              <div className="space-y-2">
                {profile.skills.languages.map((lang, index) => (
                  <Badge key={index} variant="primary" size="md">
                    {lang}
                  </Badge>
                ))}
              </div>
            </Card>
            
            <Card>
              <h3 className="text-lg font-inter font-bold text-gray-900 mb-4">
                编程语言
              </h3>
              <div className="space-y-2">
                {profile.skills.coding.map((skill, index) => (
                  <Badge key={index} variant="accent" size="md">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            
            <Card>
              <h3 className="text-lg font-inter font-bold text-gray-900 mb-4">
                数据可视化
              </h3>
              <div className="space-y-2">
                {profile.skills.viz.map((tool, index) => (
                  <Badge key={index} variant="warning" size="md">
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
        </div>
        </Section>

      </main>

      <Footer />
    </div>
  );
}
