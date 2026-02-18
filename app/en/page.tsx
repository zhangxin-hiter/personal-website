import { AnimatedSection } from "../components/animations";
import BlogPreview from "../components/BlogPreview";
import Giscus from "../components/Giscus";
import type { Metadata } from "next";
import { GISCUS_CONFIG } from "../lib/config";
import Image from "next/image";
import ParticleBackground from "../components/ParticleBackground";
import TypingEffect from "../components/TypingEffect";
import AnimatedCounter from "../components/AnimatedCounter";
import TiltCard from "../components/TiltCard";
import GlowCard from "../components/GlowCard";
import WaveDivider from "../components/WaveDivider";
import GridPattern from "../components/GridPattern";
import GradientMesh from "../components/GradientMesh";
import MorphingText from "../components/MorphingText";
import TextRevealOnScroll from "../components/TextRevealOnScroll";
import ParallaxSection from "../components/ParallaxSection";
import SmoothCounter from "../components/SmoothCounter";
import Timeline from "../components/Timeline";
import RevealText from "../components/RevealText";
import Spotlight from "../components/Spotlight";
import SkillBar from "../components/SkillBar";
import Marquee from "../components/Marquee";
import BlurReveal from "../components/BlurReveal";
import CardFlip from "../components/CardFlip";
import MagneticButton from "../components/MagneticButton";

export const metadata: Metadata = {
  title: "Xin Zhang - Personal Website",
  description: "Telecommunications Engineering undergraduate at HIT Shenzhen, embedded systems developer specializing in microcontroller development and intelligent hardware design.",
  keywords: ["Xin Zhang", "Harbin Institute of Technology", "Telecommunications Engineering", "Embedded Systems", "STM32", "Microcontroller"],
  openGraph: {
    title: "Xin Zhang - Personal Website",
    description: "Telecommunications Engineering undergraduate at HIT Shenzhen, embedded systems developer",
    type: "website",
    locale: "en_US",
    images: [{ url: "/photo.jpg", width: 400, height: 400 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xin Zhang - Personal Website",
    description: "Telecommunications Engineering undergraduate at HIT Shenzhen, embedded systems developer",
  },
  alternates: {
    canonical: "/en",
    languages: {
      "en-US": "/en",
      "zh-CN": "/",
    },
  },
};

export default function Home() {
  const timelineItems = [
    {
      date: "2022 - 2026",
      title: "Harbin Institute of Technology (Shenzhen)",
      subtitle: "B.E. in Telecommunications Engineering",
      icon: "🎓",
      color: "var(--primary)",
      content: (
        <div>
          <p>
            <span className="font-semibold text-[var(--primary)]">GPA:</span>{" "}
            <AnimatedCounter target={88.587} decimals={3} className="font-bold text-[var(--accent)]" />/100
            <span className="mx-2 text-[var(--accent)]">·</span>
            <span className="font-semibold text-[var(--primary)]">Rank:</span>{" "}
            <AnimatedCounter target={45} decimals={0} className="font-bold text-[var(--accent)]" />/240 (Top 18.75%)
          </p>
        </div>
      ),
    },
    {
      date: "Dec 2025 - Apr 2026",
      title: "Southchip Semiconductor",
      subtitle: "Analog IC Verification Intern",
      icon: "💼",
      color: "var(--success)",
      content: (
        <ul className="space-y-1.5">
          <li className="flex items-start">
            <span className="text-[var(--success)] mr-2 mt-0.5">◆</span>
            <span>Participated in verification testing of power management ICs (PMIC)</span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--success)] mr-2 mt-0.5">◆</span>
            <span>Conducted chip electrical characteristic tests using oscilloscopes, signal generators, and electronic loads</span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--success)] mr-2 mt-0.5">◆</span>
            <span>Assisted in test data recording and analysis, prepared test reports</span>
          </li>
          <li className="flex items-start">
            <span className="text-[var(--success)] mr-2 mt-0.5">◆</span>
            <span>Gained hands-on experience in chip R&D processes and analog circuit design verification</span>
          </li>
        </ul>
      ),
    },
  ];

  const statsData = [
    { label: "GPA", value: 88.587, decimals: 3, suffix: "" },
    { label: "Class Rank", value: 45, suffix: "/240" },
    { label: "Projects", value: 3, suffix: "+" },
    { label: "Awards", value: 6, suffix: "+" },
  ];

  const skillBarData = [
    { name: "C Language", level: 90 },
    { name: "Python", level: 70 },
    { name: "STM32/MSP MCUs", level: 85 },
    { name: "Protocols (I2C/UART/SPI)", level: 85 },
    { name: "RTOS", level: 65 },
    { name: "EDA Tools", level: 75 },
  ];

  const marqueeItems = [
    "C", "Python", "STM32", "MSP430", "MSPM0", "RTOS",
    "I2C", "UART", "SPI", "Git", "Makefile", "Linux",
    "Multisim", "Cadence", "Virtuoso", "Altium Designer",
    "K230", "MPU6050", "Bluetooth", "Ultrasonic", "PWM", "ADC",
  ];

  const awardsData = [
    {
      title: "First Prize, National College Mathematics Competition",
      detail: "Awarded twice (2023, 2024)",
      emoji: "🏆",
      backText: "Won first prize in the National College Mathematics Competition for two consecutive years, demonstrating strong mathematical foundations.",
    },
    {
      title: "Academic Scholarship",
      detail: "Awarded twice (2023, 2024)",
      emoji: "🎓",
      backText: "Received academic scholarship for two consecutive years for outstanding academic performance.",
    },
    {
      title: "Third Prize, Huada Jiutian Cup Electronic Design Invitational",
      detail: "Apr 2025",
      emoji: "🥉",
      backText: "Contributed to the vision-guided smart car project, responsible for vision module communication and wireless systems.",
    },
    {
      title: "Outstanding Student Award, HIT",
      detail: "Oct 2024",
      emoji: "⭐",
      backText: "Recognized for outstanding academic and overall performance at Harbin Institute of Technology.",
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
                  Xin Zhang
                </h1>
                <h2 className="text-xl text-[var(--text-secondary)] mb-2 animate-fade-in delay-200 font-medium">
                  <TypingEffect
                    words={["Embedded Systems Developer", "Telecom Engineering Student", "Hardware Design Enthusiast"]}
                  />
                </h2>
                <p className="text-lg text-[var(--text-muted)] mb-6 animate-fade-in delay-300">
                  <MorphingText words={["Passion for Tech", "Pursuing Excellence", "Connecting Everything", "Empowering the Future"]} interval={3000} />
                </p>
                <div className="prose max-w-none text-[var(--foreground)] leading-relaxed animate-fade-in delay-300">
                  <p className="mb-4">
                    I am an undergraduate student majoring in Telecommunications Engineering at Harbin Institute of Technology (Shenzhen),
                    with a GPA of 88.587/100 (Top 18.75%, 45/240). I am passionate about embedded systems development and intelligent hardware design,
                    with extensive project experience in microcontroller development, sensor applications, and wireless communication.
                  </p>
                  <p>
                    I have received multiple honors including First Prize in the National College Mathematics Competition and Academic Scholarships.
                    I am proficient in C and Python programming, familiar with STM32 and MSP series microcontroller development,
                    and possess solid hardware design and software development capabilities.
                  </p>
                </div>
              </div>
              <div className="w-48 h-48 rounded-full overflow-hidden hover-scale animate-scale-in delay-200 shadow-xl ring-4 ring-[var(--accent)] ring-offset-4 relative">
                <Image
                  src="/photo.jpg"
                  alt="Xin Zhang"
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
            <TextRevealOnScroll text="Writing code, connecting everything, empowering a smarter future with embedded systems." />
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
                  Education & Experience
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
                  Projects
                </h2>
              </RevealText>
            </div>
            <Spotlight>
              <div className="space-y-6">
                <TiltCard className="rounded-lg">
                  <article className="bg-[var(--card-bg)] rounded-lg shadow-md border-l-4 border-[var(--accent)] p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-[var(--primary)]">
                        Huada Jiutian Cup Shenzhen Electronic Design Invitational · Vision-Guided Smart Car
                      </h3>
                      <span className="text-sm text-[var(--text-muted)] bg-[var(--section-bg)] px-3 py-1 rounded-full whitespace-nowrap ml-4">Apr 2025</span>
                    </div>
                    <p className="text-sm text-[var(--accent)] font-medium mb-3">Team Member</p>
                    <ul className="text-[var(--text-secondary)] space-y-2">
                      <li className="flex items-start">
                        <span className="text-[var(--accent)] mr-2 mt-1.5">◆</span>
                        <span>Implemented lane following using camera-based red line detection and neural network-based road sign recognition</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--accent)] mr-2 mt-1.5">◆</span>
                        <span>Enabled the car to perform actions such as parking, turning left/right based on identified signs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--accent)] mr-2 mt-1.5">◆</span>
                        <span>Responsible for data transmission between K230 vision module and MSPM0G3507 MCU</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--accent)] mr-2 mt-1.5">◆</span>
                        <span>Implemented ADC buttons, buzzer, and wireless communication between car and host computer</span>
                      </li>
                    </ul>
                  </article>
                </TiltCard>

                <TiltCard className="rounded-lg">
                  <article className="bg-[var(--card-bg)] rounded-lg shadow-md border-l-4 border-[var(--primary)] p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-[var(--primary)]">
                        Personal Project · Bluetooth Obstacle-Avoidance Smart Car
                      </h3>
                      <span className="text-sm text-[var(--text-muted)] bg-[var(--section-bg)] px-3 py-1 rounded-full whitespace-nowrap ml-4">Jan 2025</span>
                    </div>
                    <p className="text-sm text-[var(--success)] font-medium mb-3">Project Lead</p>
                    <ul className="text-[var(--text-secondary)] space-y-2">
                      <li className="flex items-start">
                        <span className="text-[var(--primary)] mr-2 mt-1.5">◆</span>
                        <span>Implemented automatic obstacle avoidance and distance feedback via Bluetooth to mobile phone</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--primary)] mr-2 mt-1.5">◆</span>
                        <span>Used STM32F103C8T6 as main controller, generating dual PWM signals via timer output compare to control motors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--primary)] mr-2 mt-1.5">◆</span>
                        <span>Bluetooth module communicated with MCU via UART; ultrasonic sensors measured obstacle distances to control motion logic</span>
                      </li>
                    </ul>
                  </article>
                </TiltCard>

                <TiltCard className="rounded-lg">
                  <article className="bg-[var(--card-bg)] rounded-lg shadow-md border-l-4 border-[var(--text-muted)] p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-[var(--primary)]">
                        2024 National Electronic Design Contest Problem H (Practice) · Infrared Line-Following Car
                      </h3>
                      <span className="text-sm text-[var(--text-muted)] bg-[var(--section-bg)] px-3 py-1 rounded-full whitespace-nowrap ml-4">Jan 2025</span>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] font-medium mb-3">Team Member</p>
                    <ul className="text-[var(--text-secondary)] space-y-2">
                      <li className="flex items-start">
                        <span className="text-[var(--text-muted)] mr-2 mt-1.5">◆</span>
                        <span>Implemented line following along specified routes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--text-muted)] mr-2 mt-1.5">◆</span>
                        <span>Responsible for MPU6050 6-axis sensor using I2C communication protocol</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[var(--text-muted)] mr-2 mt-1.5">◆</span>
                        <span>Implemented communication between sensor and MSPM0 MCU; obtained car orientation angles through sensor fusion</span>
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
                  Skills
                </h2>
              </RevealText>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <GlowCard>
                <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Programming Languages</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Proficient in C; competent in Python
                </p>
              </GlowCard>
              <GlowCard>
                <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Embedded Development</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Familiar with STM32 and MSP series MCUs; proficient in I2C, UART, SPI protocols
                </p>
              </GlowCard>
              <GlowCard>
                <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Operating Systems</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Familiar with RTOS; basic knowledge of Linux application development
                </p>
              </GlowCard>
              <GlowCard>
                <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">EDA Tools</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Familiar with Multisim, Cadence, Virtuoso, Altium Designer
                </p>
              </GlowCard>
            </div>
            <div className="mb-8">
              <GlowCard>
                <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Development Tools</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Git version control, Makefile build system
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
                  Honors & Awards
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
                Contact
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[var(--card-bg)] rounded-lg shadow-md p-5 border border-[var(--border)] hover:shadow-lg transition-all duration-300">
                <h3 className="text-base font-semibold text-[var(--primary)] mb-3 flex items-center gap-2">
                  <span className="text-[var(--accent)]">📍</span> Address
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Harbin Institute of Technology (Shenzhen)<br />
                  Nanshan District, Shenzhen 518052, China
                </p>
              </div>

              <div className="bg-[var(--card-bg)] rounded-lg shadow-md p-5 border border-[var(--border)] hover:shadow-lg transition-all duration-300">
                <h3 className="text-base font-semibold text-[var(--primary)] mb-3 flex items-center gap-2">
                  <span className="text-[var(--accent)]">📧</span> Contact
                </h3>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <p>
                    <span className="inline-block w-14 text-[var(--text-muted)]">Email:</span>
                    <MagneticButton>
                      <a href="mailto:zx2567617517@foxmail.com" className="text-[var(--link)] hover:text-[var(--link-hover)] hover:underline">
                        zx2567617517@foxmail.com
                      </a>
                    </MagneticButton>
                  </p>
                  <p>
                    <span className="inline-block w-14 text-[var(--text-muted)]">Phone:</span>
                    <span className="text-[var(--primary)] font-medium">(+86) 188-7061-9179</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[var(--card-bg)] rounded-lg shadow-md p-5 border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-base font-semibold mb-3 text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">Links</h3>
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
                Guestbook
              </h2>
            </div>
            <Giscus {...GISCUS_CONFIG} />
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
