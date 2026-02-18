import { AnimatedSection } from "./components/animations";
import Giscus from "./components/Giscus";
import BlogPreview from "./components/BlogPreview";
import { GISCUS_CONFIG } from "./lib/config";
import Image from "next/image";
import ParticleBackground from "./components/ParticleBackground";
import TypingEffect from "./components/TypingEffect";
import AnimatedCounter from "./components/AnimatedCounter";
import TiltCard from "./components/TiltCard";
import GlowCard from "./components/GlowCard";
import WaveDivider from "./components/WaveDivider";
import GridPattern from "./components/GridPattern";
import GradientMesh from "./components/GradientMesh";
import MorphingText from "./components/MorphingText";
import TextRevealOnScroll from "./components/TextRevealOnScroll";
import ParallaxSection from "./components/ParallaxSection";
import SmoothCounter from "./components/SmoothCounter";
import Timeline from "./components/Timeline";
import RevealText from "./components/RevealText";
import Spotlight from "./components/Spotlight";
import SkillBar from "./components/SkillBar";
import Marquee from "./components/Marquee";
import BlurReveal from "./components/BlurReveal";
import CardFlip from "./components/CardFlip";
import MagneticButton from "./components/MagneticButton";

export default function Home() {
  const timelineItems = [
    {
      date: "2022 - 2026",
      title: "哈尔滨工业大学(深圳)",
      subtitle: "通信工程 · 本科",
      icon: "🎓",
      color: "var(--primary)",
      content: (
        <div>
          <p>
            <span className="font-semibold text-[var(--primary)]">GPA:</span>{" "}
            <AnimatedCounter target={88.587} decimals={3} className="font-bold text-[var(--accent)]" />/100
            <span className="mx-2 text-[var(--accent)]">·</span>
            <span className="font-semibold text-[var(--primary)]">排名:</span>{" "}
            <AnimatedCounter target={45} decimals={0} className="font-bold text-[var(--accent)]" />/240 (前18.75%)
          </p>
        </div>
      ),
    },
    {
      date: "2025.12 - 2026.04",
      title: "南芯半导体",
      subtitle: "模拟IC验证实习生",
      icon: "💼",
      color: "var(--success)",
      content: (
        <ul className="space-y-1.5">
          <li className="flex items-start">
            <span className="text-[var(--success)] mr-2 mt-0.5">◆</span>
            <span>参与电源管理芯片(PMIC)的验证测试工作</span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--success)] mr-2 mt-0.5">◆</span>
            <span>使用示波器、信号源、负载等仪器进行芯片电气特性测试</span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--success)] mr-2 mt-0.5">◆</span>
            <span>协助完成测试数据记录与分析，撰写测试报告</span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--success)] mr-2 mt-0.5">◆</span>
            <span>了解芯片研发流程，积累模拟电路设计与验证经验</span>
          </li>
        </ul>
      ),
    },
  ];

  const statsData = [
    { label: "GPA", value: 88.587, decimals: 3, suffix: "" },
    { label: "专业排名", value: 45, suffix: "/240" },
    { label: "项目经历", value: 3, suffix: "+" },
    { label: "获奖次数", value: 6, suffix: "+" },
  ];

  const skillBarData = [
    { name: "C语言", level: 90 },
    { name: "Python", level: 70 },
    { name: "STM32/MSP单片机", level: 85 },
    { name: "通信协议 (I2C/UART/SPI)", level: 85 },
    { name: "RTOS", level: 65 },
    { name: "EDA工具", level: 75 },
  ];

  const marqueeItems = [
    "C语言", "Python", "STM32", "MSP430", "MSPM0", "RTOS",
    "I2C", "UART", "SPI", "Git", "Makefile", "Linux",
    "Multisim", "Cadence", "Virtuoso", "Altium Designer",
    "K230", "MPU6050", "蓝牙", "超声波", "PWM", "ADC",
  ];

  const awardsData = [
    {
      title: "全国大学生数学竞赛黑龙江赛区一等奖",
      detail: "2次获得（2023, 2024）",
      emoji: "🏆",
      backText: "连续两年获得全国大学生数学竞赛一等奖，展现扎实的数学基础和逻辑思维能力。",
    },
    {
      title: "学校学业奖学金",
      detail: "2次获得（2023, 2024）",
      emoji: "🎓",
      backText: "连续两年获得学业奖学金，学业成绩优秀稳定。",
    },
    {
      title: "华大九天杯深圳市电子设计邀请赛三等奖",
      detail: "2025.04",
      emoji: "🥉",
      backText: "参与视觉导航智能小车项目，负责视觉模块与主控通信、ADC按键和无线通信部分。",
    },
    {
      title: "哈尔滨工业大学优秀学生荣誉",
      detail: "2024.10",
      emoji: "⭐",
      backText: "学业和综合表现突出，获得学校优秀学生荣誉称号。",
    },
  ];

  return (
    <div>
      {/* ============ 1. Hero Section (enhanced) ============ */}
      <section className="relative mb-0 overflow-hidden">
        <GradientMesh />
        <GridPattern variant="dots" className="opacity-50" />
        <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
          <div className="animate-fade-in-up">
            <ParticleBackground />
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className="flex-1">
                <h1 className="text-5xl font-serif font-bold text-[var(--primary)] mb-4 hover-scale inline-block">
                  张昕
                </h1>
                <h2 className="text-xl text-[var(--text-secondary)] mb-2 animate-fade-in delay-200 font-medium">
                  <TypingEffect
                    words={["嵌入式开发工程师", "通信工程学生", "硬件设计爱好者"]}
                  />
                </h2>
                <p className="text-lg text-[var(--text-muted)] mb-6 animate-fade-in delay-300">
                  <MorphingText words={["热爱技术", "追求卓越", "连接万物", "赋能未来"]} interval={3000} />
                </p>
                <div className="prose max-w-none text-[var(--foreground)] leading-relaxed animate-fade-in delay-300 text-justify">
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
              <div className="w-48 h-48 rounded-full overflow-hidden hover-scale animate-scale-in delay-200 shadow-xl ring-4 ring-[var(--accent)] ring-offset-4 relative">
                <Image
                  src="/photo.jpg"
                  alt="张昕"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. WaveDivider (wave) ============ */}
      <WaveDivider variant="wave" />

      {/* ============ 3. TextRevealOnScroll — dramatic quote ============ */}
      <section className="bg-[var(--section-bg)]">
        <div className="max-w-5xl mx-auto px-6">
          <ParallaxSection speed={0.15}>
            <TextRevealOnScroll text="编写代码，连接万物，让嵌入式系统赋能智能未来。" />
          </ParallaxSection>
        </div>
      </section>

      {/* ============ 4. WaveDivider (curve) ============ */}
      <WaveDivider variant="curve" flip />

      {/* ============ 5. SmoothCounter — stats banner ============ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <SmoothCounter stats={statsData} />
        </div>
      </section>

      {/* ============ 6. WaveDivider (tilt) ============ */}
      <WaveDivider variant="tilt" />

      {/* ============ 7. Timeline — Education + Internship ============ */}
      <section id="education" className="bg-[var(--section-bg)] py-16 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1 h-8 bg-[var(--accent)] rounded-full"></div>
              <RevealText>
                <h2 className="text-2xl font-serif font-bold text-[var(--primary)]">
                  教育背景 & 实习经历
                </h2>
              </RevealText>
            </div>
          </AnimatedSection>
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* ============ 8. WaveDivider (wave) ============ */}
      <WaveDivider variant="wave" flip />

      {/* ============ 9. Projects — TiltCards wrapped in Spotlight ============ */}
      <AnimatedSection delay={100}>
        <section id="projects" className="py-16 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[var(--accent)] rounded-full"></div>
              <RevealText>
                <h2 className="text-2xl font-serif font-bold text-[var(--primary)]">
                  项目经历
                </h2>
              </RevealText>
            </div>
            <Spotlight>
              <div className="space-y-6">
                <TiltCard className="rounded-lg">
                  <article className="bg-[var(--card-bg)] rounded-lg shadow-md border-l-4 border-[var(--accent)] p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-[var(--primary)]">
                        华大九天杯深圳市电子设计邀请赛 · 视觉导航智能小车
                      </h3>
                      <span className="text-sm text-[var(--text-muted)] bg-[var(--section-bg)] px-3 py-1 rounded-full whitespace-nowrap ml-4">2025.04</span>
                    </div>
                    <p className="text-sm text-[var(--accent)] font-medium mb-3">项目成员</p>
                    <ul className="text-[var(--text-secondary)] space-y-2">
                      <li className="flex items-start">
                        <span className="text-[var(--accent)] mr-2 mt-1.5">◆</span>
                        <span>小车通过摄像头识别道路红线，完成道路寻线，并利用神经网络识别道路标识</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--accent)] mr-2 mt-1.5">◆</span>
                        <span>根据标识完成停车、左转右转等动作</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--accent)] mr-2 mt-1.5">◆</span>
                        <span>负责视觉模块K230与主控芯片MSPM0G3507板间通信数据传输</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--accent)] mr-2 mt-1.5">◆</span>
                        <span>负责ADC按键、蜂鸣器、小车与上位机无线通信部分</span>
                      </li>
                    </ul>
                  </article>
                </TiltCard>

                <TiltCard className="rounded-lg">
                  <article className="bg-[var(--card-bg)] rounded-lg shadow-md border-l-4 border-[var(--primary)] p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-[var(--primary)]">
                        个人项目 · 智能蓝牙避障小车
                      </h3>
                      <span className="text-sm text-[var(--text-muted)] bg-[var(--section-bg)] px-3 py-1 rounded-full whitespace-nowrap ml-4">2025.01</span>
                    </div>
                    <p className="text-sm text-[var(--success)] font-medium mb-3">项目负责人</p>
                    <ul className="text-[var(--text-secondary)] space-y-2">
                      <li className="flex items-start">
                        <span className="text-[var(--primary)] mr-2 mt-1.5">◆</span>
                        <span>实现小车自动避障功能，并通过蓝牙返回到障碍物的距离</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--primary)] mr-2 mt-1.5">◆</span>
                        <span>主控芯片STM32F103C8T6，通过定时器输出两路PWM控制电机</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--primary)] mr-2 mt-1.5">◆</span>
                        <span>蓝牙模块通过串口与主控通信，超声波测量障碍物距离并控制运动逻辑</span>
                      </li>
                    </ul>
                  </article>
                </TiltCard>

                <TiltCard className="rounded-lg">
                  <article className="bg-[var(--card-bg)] rounded-lg shadow-md border-l-4 border-[var(--text-muted)] p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-[var(--primary)]">
                        2024全国电子设计大赛H题（练习）· 红外巡线小车
                      </h3>
                      <span className="text-sm text-[var(--text-muted)] bg-[var(--section-bg)] px-3 py-1 rounded-full whitespace-nowrap ml-4">2025.01</span>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] font-medium mb-3">项目成员</p>
                    <ul className="text-[var(--text-secondary)] space-y-2">
                      <li className="flex items-start">
                        <span className="text-[var(--text-muted)] mr-2 mt-1.5">◆</span>
                        <span>实现小车按指定路线寻线</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--text-muted)] mr-2 mt-1.5">◆</span>
                        <span>负责MPU6050六轴传感器部分，采用I2C通信协议</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--text-muted)] mr-2 mt-1.5">◆</span>
                        <span>实现传感器与主控芯片MSPM0通信，通过数据融合获得小车姿态角</span>
                      </li>
                    </ul>
                  </article>
                </TiltCard>
              </div>
            </Spotlight>
          </div>
        </section>
      </AnimatedSection>

      {/* ============ 10. WaveDivider (curve) ============ */}
      <WaveDivider variant="curve" />

      {/* ============ 11. Blog Preview ============ */}
      <AnimatedSection delay={100}>
        <section className="py-16 bg-[var(--section-bg)] scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <BlogPreview />
          </div>
        </section>
      </AnimatedSection>

      {/* ============ 12. WaveDivider (triangle) ============ */}
      <WaveDivider variant="triangle" flip />

      {/* ============ 13. Skills Section ============ */}
      <AnimatedSection delay={100}>
        <section id="skills" className="py-16 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[var(--accent)] rounded-full"></div>
              <RevealText>
                <h2 className="text-2xl font-serif font-bold text-[var(--primary)]">
                  专业技能
                </h2>
              </RevealText>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <GlowCard>
                <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">编程语言</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  熟练使用C语言，能够使用Python编程
                </p>
              </GlowCard>
              <GlowCard>
                <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">嵌入式开发</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  熟悉STM32、MSP系列单片机开发，熟悉I2C、UART、SPI等通信协议
                </p>
              </GlowCard>
              <GlowCard>
                <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">操作系统</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  熟悉RTOS，了解Linux应用开发
                </p>
              </GlowCard>
              <GlowCard>
                <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">EDA工具</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  熟悉Multisim、Cadence、Virtuoso、AD等EDA软件
                </p>
              </GlowCard>
            </div>
            <div className="mb-8">
              <GlowCard>
                <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">开发工具</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  熟悉Git版本控制、Makefile构建工具
                </p>
              </GlowCard>
            </div>
            <SkillBar skills={skillBarData} />
          </div>
        </section>
      </AnimatedSection>

      {/* ============ 14. Marquee — tech stack ============ */}
      <section className="py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Marquee items={marqueeItems} />
        </div>
      </section>

      {/* ============ 15. WaveDivider (wave) ============ */}
      <WaveDivider variant="wave" />

      {/* ============ 16. Awards — CardFlip + BlurReveal ============ */}
      <AnimatedSection delay={100}>
        <section id="awards" className="py-16 bg-[var(--section-bg)] scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[var(--accent)] rounded-full"></div>
              <RevealText>
                <h2 className="text-2xl font-serif font-bold text-[var(--primary)]">
                  荣誉奖励
                </h2>
              </RevealText>
            </div>
            <Spotlight>
              <div className="grid md:grid-cols-2 gap-4">
                {awardsData.map((award, i) => (
                  <BlurReveal key={award.title} delay={i * 100}>
                    <CardFlip
                      className="h-40"
                      front={
                        <div className="bg-gradient-to-r from-[var(--section-bg)] to-[var(--card-bg)] rounded-lg p-5 border border-[var(--border)] h-full flex items-center hover:shadow-md transition-shadow">
                          <div className="flex-1">
                            <h3 className="text-base font-semibold text-[var(--primary)]">{award.title}</h3>
                            <p className="text-sm text-[var(--text-muted)] mt-1">{award.detail}</p>
                          </div>
                          <span className="text-3xl ml-3">{award.emoji}</span>
                        </div>
                      }
                      back={
                        <div className="bg-[var(--primary)] rounded-lg p-5 h-full flex items-center justify-center text-center">
                          <p className="text-white text-sm leading-relaxed">{award.backText}</p>
                        </div>
                      }
                    />
                  </BlurReveal>
                ))}
              </div>
            </Spotlight>
          </div>
        </section>
      </AnimatedSection>

      {/* ============ 17. WaveDivider (tilt) ============ */}
      <WaveDivider variant="tilt" flip />

      {/* ============ 18. Contact — MagneticButton + GradientMesh ============ */}
      <AnimatedSection delay={100}>
        <section id="contact" className="py-16 relative overflow-hidden scroll-mt-20">
          <GradientMesh className="opacity-40" />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[var(--accent)] rounded-full"></div>
              <h2 className="text-2xl font-serif font-bold text-[var(--primary)]">
                联系方式
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[var(--card-bg)] rounded-lg shadow-md p-5 border border-[var(--border)] hover:shadow-lg transition-all duration-300">
                <h3 className="text-base font-semibold text-[var(--primary)] mb-3 flex items-center gap-2">
                  <span className="text-[var(--accent)]">📍</span> 地址
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  哈尔滨工业大学(深圳)<br />
                  南山区, 深圳市 518052
                </p>
              </div>

              <div className="bg-[var(--card-bg)] rounded-lg shadow-md p-5 border border-[var(--border)] hover:shadow-lg transition-all duration-300">
                <h3 className="text-base font-semibold text-[var(--primary)] mb-3 flex items-center gap-2">
                  <span className="text-[var(--accent)]">📧</span> 联系方式
                </h3>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <p>
                    <span className="inline-block w-12 text-[var(--text-muted)]">邮箱:</span>
                    <MagneticButton>
                      <a href="mailto:zx2567617517@foxmail.com" className="text-[var(--link)] hover:text-[var(--link-hover)] hover:underline">
                        zx2567617517@foxmail.com
                      </a>
                    </MagneticButton>
                  </p>
                  <p>
                    <span className="inline-block w-12 text-[var(--text-muted)]">电话:</span>
                    <span className="text-[var(--primary)] font-medium">(+86) 188-7061-9179</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[var(--card-bg)] rounded-lg shadow-md p-5 border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-base font-semibold mb-3 text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">个人链接</h3>
              <div className="flex gap-4 text-sm">
                <MagneticButton>
                  <a
                    href="https://github.com/zhangxin-hiter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ============ 19. WaveDivider (curve) ============ */}
      <WaveDivider variant="curve" />

      {/* ============ 20. Guestbook ============ */}
      <AnimatedSection delay={100}>
        <section id="guestbook" className="py-16 bg-[var(--section-bg)] scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[var(--accent)] rounded-full"></div>
              <h2 className="text-2xl font-serif font-bold text-[var(--primary)]">
                留言板
              </h2>
            </div>
            <Giscus {...GISCUS_CONFIG} />
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
