import { AnimatedSection } from "./components/animations";
import Giscus from "./components/Giscus";

const GISCUS_CONFIG = {
  repo: "zhangxin-hiter/personal-website",
  repoId: "R_kgDORQsOIQ",
  category: "Announcements",
  categoryId: "DIC_kwDORQsOIc4C2fRb",
};

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="mb-16 animate-fade-in-up">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h1 className="text-5xl font-serif font-bold text-[#1e3a5f] mb-4 hover-scale inline-block">
              张昕
            </h1>
            <h2 className="text-xl text-[#475569] mb-6 animate-fade-in delay-200 font-medium">
              通信工程 · 本科在读 · 哈尔滨工业大学(深圳)
            </h2>
            <div className="prose max-w-none text-[#334155] leading-relaxed animate-fade-in delay-300 text-justify">
              <p className="mb-4">
                我是哈尔滨工业大学(深圳)通信工程专业的一名本科生，GPA 88.587/100（专业前18.75%）。
                我对嵌入式系统开发和智能硬件设计充满热情，在单片机开发、传感器应用和无线通信方面积累了丰富的项目经验。
              </p>
              <p>
                曾获得全国大学生数学竞赛一等奖、学业奖学金等多项荣誉。熟练掌握C语言、Python编程，
                熟悉STM32和MSP系列单片机开发，具备扎实的硬件设计和软件开发能力。
              </p>
            </div>
          </div>
          <div className="w-48 h-48 rounded-full overflow-hidden hover-scale animate-scale-in delay-200 shadow-xl ring-4 ring-[#c9a227] ring-offset-4">
            <img 
              src="/photo.jpg" 
              alt="张昕" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <AnimatedSection>
        <section id="education" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#c9a227] rounded-full"></div>
            <h2 className="text-2xl font-serif font-bold text-[#1e3a5f]">
              教育背景
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-md border border-[#e2e8f0] p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f]">
                  哈尔滨工业大学(深圳)
                </h3>
                <p className="text-[#475569] mt-1 font-medium">通信工程 · 本科</p>
              </div>
              <span className="text-sm text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-full">2022 - 2026</span>
            </div>
            <div className="mt-4 pt-4 border-t border-[#e2e8f0]">
              <p className="text-[#475569]">
                <span className="font-semibold text-[#1e3a5f]">GPA:</span> 88.587/100
                <span className="mx-2 text-[#c9a227]">•</span>
                <span className="font-semibold text-[#1e3a5f]">排名:</span> 45/240 (前18.75%)
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection delay={100}>
        <section id="projects" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#c9a227] rounded-full"></div>
            <h2 className="text-2xl font-serif font-bold text-[#1e3a5f]">
              项目经历
            </h2>
          </div>
          <div className="space-y-6">
            <article className="bg-white rounded-lg shadow-md border-l-4 border-[#c9a227] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-[#1e3a5f]">
                  华大九天杯深圳市电子设计邀请赛 · 视觉导航智能小车
                </h3>
                <span className="text-sm text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-full whitespace-nowrap ml-4">2025.04</span>
              </div>
              <p className="text-sm text-[#c9a227] font-medium mb-3">项目成员</p>
              <ul className="text-[#475569] space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2 mt-1.5">◆</span>
                  <span>小车通过摄像头识别道路红线，完成道路寻线，并利用神经网络识别道路标识</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2 mt-1.5">◆</span>
                  <span>根据标识完成停车、左转右转等动作</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2 mt-1.5">◆</span>
                  <span>负责视觉模块K230与主控芯片MSPM0G3507板间通信数据传输</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2 mt-1.5">◆</span>
                  <span>负责ADC按键、蜂鸣器、小车与上位机无线通信部分</span>
                </li>
              </ul>
            </article>

            <article className="bg-white rounded-lg shadow-md border-l-4 border-[#1e3a5f] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-[#1e3a5f]">
                  个人项目 · 智能蓝牙避障小车
                </h3>
                <span className="text-sm text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-full whitespace-nowrap ml-4">2025.01</span>
              </div>
              <p className="text-sm text-[#059669] font-medium mb-3">项目负责人</p>
              <ul className="text-[#475569] space-y-2">
                <li className="flex items-start">
                  <span className="text-[#1e3a5f] mr-2 mt-1.5">◆</span>
                  <span>实现小车自动避障功能，并通过蓝牙返回到障碍物的距离</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a5f] mr-2 mt-1.5">◆</span>
                  <span>主控芯片STM32F103C8T6，通过定时器输出两路PWM控制电机</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a5f] mr-2 mt-1.5">◆</span>
                  <span>蓝牙模块通过串口与主控通信，超声波测量障碍物距离并控制运动逻辑</span>
                </li>
              </ul>
            </article>

            <article className="bg-white rounded-lg shadow-md border-l-4 border-[#64748b] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-[#1e3a5f]">
                  2024全国电子设计大赛H题（练习）· 红外巡线小车
                </h3>
                <span className="text-sm text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-full whitespace-nowrap ml-4">2025.01</span>
              </div>
              <p className="text-sm text-[#64748b] font-medium mb-3">项目成员</p>
              <ul className="text-[#475569] space-y-2">
                <li className="flex items-start">
                  <span className="text-[#64748b] mr-2 mt-1.5">◆</span>
                  <span>实现小车按指定路线寻线</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64748b] mr-2 mt-1.5">◆</span>
                  <span>负责MPU6050六轴传感器部分，采用I2C通信协议</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64748b] mr-2 mt-1.5">◆</span>
                  <span>实现传感器与主控芯片MSPM0通信，通过数据融合获得小车姿态角</span>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection delay={100}>
        <section id="skills" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#c9a227] rounded-full"></div>
            <h2 className="text-2xl font-serif font-bold text-[#1e3a5f]">
              专业技能
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:border-[#c9a227] hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors">编程语言</h3>
              <p className="text-[#475569] text-sm">
                熟练使用C语言，能够使用Python编程
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:border-[#c9a227] hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors">嵌入式开发</h3>
              <p className="text-[#475569] text-sm">
                熟悉STM32、MSP系列单片机开发，熟悉I2C、UART、SPI等通信协议
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:border-[#c9a227] hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors">操作系统</h3>
              <p className="text-[#475569] text-sm">
                熟悉RTOS，了解Linux应用开发
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:border-[#c9a227] hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors">EDA工具</h3>
              <p className="text-[#475569] text-sm">
                熟悉Multisim、Cadence、Virtuoso、AD等EDA软件
              </p>
            </div>
          </div>
          <div className="mt-4 bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:border-[#c9a227] hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors">开发工具</h3>
            <p className="text-[#475569] text-sm">
              熟悉Git版本控制、Makefile构建工具
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Awards Section */}
      <AnimatedSection delay={100}>
        <section id="awards" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#c9a227] rounded-full"></div>
            <h2 className="text-2xl font-serif font-bold text-[#1e3a5f]">
              荣誉奖励
            </h2>
          </div>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-[#fef9e7] to-white rounded-lg p-4 border-l-4 border-[#c9a227] hover:shadow-md transition-all duration-300 hover:translate-x-1">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-semibold text-[#1e3a5f]">全国大学生数学竞赛黑龙江赛区一等奖</h3>
                  <p className="text-sm text-[#64748b]">2次获得（2023, 2024）</p>
                </div>
                <span className="text-2xl text-[#c9a227]">🏆</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#fef9e7] to-white rounded-lg p-4 border-l-4 border-[#c9a227] hover:shadow-md transition-all duration-300 hover:translate-x-1">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-semibold text-[#1e3a5f]">学校学业奖学金</h3>
                  <p className="text-sm text-[#64748b]">2次获得（2023, 2024）</p>
                </div>
                <span className="text-2xl text-[#c9a227]">🎓</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#fef9e7] to-white rounded-lg p-4 border-l-4 border-[#c9a227] hover:shadow-md transition-all duration-300 hover:translate-x-1">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-semibold text-[#1e3a5f]">华大九天杯深圳市电子设计邀请赛三等奖</h3>
                  <p className="text-sm text-[#64748b]">2025.04</p>
                </div>
                <span className="text-2xl text-[#c9a227]">🥉</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#fef9e7] to-white rounded-lg p-4 border-l-4 border-[#c9a227] hover:shadow-md transition-all duration-300 hover:translate-x-1">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-semibold text-[#1e3a5f]">哈尔滨工业大学优秀学生荣誉</h3>
                  <p className="text-sm text-[#64748b]">2024.10</p>
                </div>
                <span className="text-2xl text-[#c9a227]">⭐</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection delay={100}>
        <section id="contact" className="mb-8 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#c9a227] rounded-full"></div>
            <h2 className="text-2xl font-serif font-bold text-[#1e3a5f]">
              联系方式
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:shadow-lg transition-all duration-300">
              <h3 className="text-base font-semibold text-[#1e3a5f] mb-3 flex items-center gap-2">
                <span className="text-[#c9a227]">📍</span> 地址
              </h3>
              <p className="text-sm text-[#475569]">
                哈尔滨工业大学(深圳)<br />
                南山区, 深圳市 518052
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:shadow-lg transition-all duration-300">
              <h3 className="text-base font-semibold text-[#1e3a5f] mb-3 flex items-center gap-2">
                <span className="text-[#c9a227]">📧</span> 联系方式
              </h3>
              <div className="space-y-2 text-sm text-[#475569]">
                <p>
                  <span className="inline-block w-12 text-[#64748b]">邮箱:</span>
                  <a href="mailto:zx2567617517@foxmail.com" className="text-[#2563eb] hover:text-[#1d4ed8] hover:underline">
                    zx2567617517@foxmail.com
                  </a>
                </p>
                <p>
                  <span className="inline-block w-12 text-[#64748b]">电话:</span>
                  <span className="text-[#1e3a5f] font-medium">(+86) 188-7061-9179</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:border-[#c9a227] hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-base font-semibold mb-3 text-[#1e3a5f] group-hover:text-[#c9a227] transition-colors">个人链接</h3>
            <div className="flex gap-4 text-sm">
              <a
                href="https://github.com/zhangxin-hiter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#475569] hover:text-[#c9a227] transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Guestbook Section */}
      <AnimatedSection delay={100}>
        <section id="guestbook" className="mb-8 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[#c9a227] rounded-full"></div>
            <h2 className="text-2xl font-serif font-bold text-[#1e3a5f]">
              留言板
            </h2>
          </div>
          <Giscus {...GISCUS_CONFIG} />
        </section>
      </AnimatedSection>
    </div>
  );
}
