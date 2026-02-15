import { AnimatedSection } from "../components/animations";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="mb-16 animate-fade-in-up">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h1 className="text-5xl font-serif font-bold text-[#1e3a5f] mb-4 hover-scale inline-block">
              Xin Zhang
            </h1>
            <h2 className="text-xl text-[#475569] mb-6 animate-fade-in delay-200 font-medium">
              Telecommunications Engineering · Undergraduate · Harbin Institute of Technology (Shenzhen)
            </h2>
            <div className="prose max-w-none text-[#334155] leading-relaxed animate-fade-in delay-300">
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
          <div className="w-48 h-48 rounded-full overflow-hidden hover-scale animate-scale-in delay-200 shadow-xl ring-4 ring-[#c9a227] ring-offset-4">
            <img 
              src="/photo.jpg" 
              alt="Xin Zhang" 
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
              Education
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-md border border-[#e2e8f0] p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f]">
                  Harbin Institute of Technology (Shenzhen)
                </h3>
                <p className="text-[#475569] mt-1 font-medium">B.E. in Telecommunications Engineering</p>
              </div>
              <span className="text-sm text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-full">2022 - 2026</span>
            </div>
            <div className="mt-4 pt-4 border-t border-[#e2e8f0]">
              <p className="text-[#475569]">
                <span className="font-semibold text-[#1e3a5f]">GPA:</span> 88.587/100
                <span className="mx-2 text-[#c9a227]">•</span>
                <span className="font-semibold text-[#1e3a5f]">Rank:</span> 45/240 (Top 18.75%)
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
              Projects
            </h2>
          </div>
          <div className="space-y-6">
            <article className="bg-white rounded-lg shadow-md border-l-4 border-[#c9a227] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-[#1e3a5f]">
                  Huada Jiutian Cup Shenzhen Electronic Design Invitational · Vision-Guided Smart Car
                </h3>
                <span className="text-sm text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-full whitespace-nowrap ml-4">Apr 2025</span>
              </div>
              <p className="text-sm text-[#c9a227] font-medium mb-3">Team Member</p>
              <ul className="text-[#475569] space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2 mt-1.5">◆</span>
                  <span>Implemented lane following using camera-based red line detection and neural network-based road sign recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2 mt-1.5">◆</span>
                  <span>Enabled the car to perform actions such as parking, turning left/right based on identified signs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2 mt-1.5">◆</span>
                  <span>Responsible for data transmission between K230 vision module and MSPM0G3507 MCU</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a227] mr-2 mt-1.5">◆</span>
                  <span>Implemented ADC buttons, buzzer, and wireless communication between car and host computer</span>
                </li>
              </ul>
            </article>

            <article className="bg-white rounded-lg shadow-md border-l-4 border-[#1e3a5f] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-[#1e3a5f]">
                  Personal Project · Bluetooth Obstacle-Avoidance Smart Car
                </h3>
                <span className="text-sm text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-full whitespace-nowrap ml-4">Jan 2025</span>
              </div>
              <p className="text-sm text-[#059669] font-medium mb-3">Project Lead</p>
              <ul className="text-[#475569] space-y-2">
                <li className="flex items-start">
                  <span className="text-[#1e3a5f] mr-2 mt-1.5">◆</span>
                  <span>Implemented automatic obstacle avoidance and distance feedback via Bluetooth to mobile phone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a5f] mr-2 mt-1.5">◆</span>
                  <span>Used STM32F103C8T6 as main controller, generating dual PWM signals via timer output compare to control motors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a5f] mr-2 mt-1.5">◆</span>
                  <span>Bluetooth module communicated with MCU via UART; ultrasonic sensors measured obstacle distances to control motion logic</span>
                </li>
              </ul>
            </article>

            <article className="bg-white rounded-lg shadow-md border-l-4 border-[#64748b] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-[#1e3a5f]">
                  2024 National Electronic Design Contest Problem H (Practice) · Infrared Line-Following Car
                </h3>
                <span className="text-sm text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-full whitespace-nowrap ml-4">Jan 2025</span>
              </div>
              <p className="text-sm text-[#64748b] font-medium mb-3">Team Member</p>
              <ul className="text-[#475569] space-y-2">
                <li className="flex items-start">
                  <span className="text-[#64748b] mr-2 mt-1.5">◆</span>
                  <span>Implemented line following along specified routes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64748b] mr-2 mt-1.5">◆</span>
                  <span>Responsible for MPU6050 6-axis sensor using I2C communication protocol</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64748b] mr-2 mt-1.5">◆</span>
                  <span>Implemented communication between sensor and MSPM0 MCU; obtained car orientation angles through sensor fusion</span>
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
              Skills
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:border-[#c9a227] hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors">Programming Languages</h3>
              <p className="text-[#475569] text-sm">
                Proficient in C; competent in Python
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:border-[#c9a227] hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors">Embedded Development</h3>
              <p className="text-[#475569] text-sm">
                Familiar with STM32 and MSP series MCUs; proficient in I2C, UART, SPI protocols
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:border-[#c9a227] hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors">Operating Systems</h3>
              <p className="text-[#475569] text-sm">
                Familiar with RTOS; basic knowledge of Linux application development
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:border-[#c9a227] hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#c9a227] transition-colors">EDA Tools</h3>
              <p className="text-[#475569] text-sm">
                Familiar with Multisim, Cadence, Virtuoso, Altium Designer
              </p>
            </div>
          </div>
          <div className="mt-4 bg-[#1e3a5f] rounded-lg shadow-md p-5 text-white hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2 text-[#c9a227]">Development Tools</h3>
            <p className="text-gray-200 text-sm">
              Git version control, Makefile build system
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
              Honors & Awards
            </h2>
          </div>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-[#fef9e7] to-white rounded-lg p-4 border-l-4 border-[#c9a227] hover:shadow-md transition-all duration-300 hover:translate-x-1">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-semibold text-[#1e3a5f]">First Prize, National College Mathematics Competition (Heilongjiang Division)</h3>
                  <p className="text-sm text-[#64748b]">Awarded twice (2023, 2024)</p>
                </div>
                <span className="text-2xl text-[#c9a227]">🏆</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#fef9e7] to-white rounded-lg p-4 border-l-4 border-[#c9a227] hover:shadow-md transition-all duration-300 hover:translate-x-1">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-semibold text-[#1e3a5f]">Academic Scholarship</h3>
                  <p className="text-sm text-[#64748b]">Awarded twice (2023, 2024)</p>
                </div>
                <span className="text-2xl text-[#c9a227]">🎓</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#fef9e7] to-white rounded-lg p-4 border-l-4 border-[#c9a227] hover:shadow-md transition-all duration-300 hover:translate-x-1">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-semibold text-[#1e3a5f]">Third Prize, Huada Jiutian Cup Shenzhen Electronic Design Invitational</h3>
                  <p className="text-sm text-[#64748b]">Apr 2025</p>
                </div>
                <span className="text-2xl text-[#c9a227]">🥉</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#fef9e7] to-white rounded-lg p-4 border-l-4 border-[#c9a227] hover:shadow-md transition-all duration-300 hover:translate-x-1">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-semibold text-[#1e3a5f]">Outstanding Student Award, Harbin Institute of Technology</h3>
                  <p className="text-sm text-[#64748b]">Oct 2024</p>
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
              Contact
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:shadow-lg transition-all duration-300">
              <h3 className="text-base font-semibold text-[#1e3a5f] mb-3 flex items-center gap-2">
                <span className="text-[#c9a227]">📍</span> Address
              </h3>
              <p className="text-sm text-[#475569]">
                Harbin Institute of Technology (Shenzhen)<br />
                Nanshan District, Shenzhen 518052, China
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-5 border border-[#e2e8f0] hover:shadow-lg transition-all duration-300">
              <h3 className="text-base font-semibold text-[#1e3a5f] mb-3 flex items-center gap-2">
                <span className="text-[#c9a227]">📧</span> Contact
              </h3>
              <div className="space-y-2 text-sm text-[#475569]">
                <p>
                  <span className="inline-block w-14 text-[#64748b]">Email:</span>
                  <a href="mailto:zx2567617517@foxmail.com" className="text-[#2563eb] hover:text-[#1d4ed8] hover:underline">
                    zx2567617517@foxmail.com
                  </a>
                </p>
                <p>
                  <span className="inline-block w-14 text-[#64748b]">Phone:</span>
                  <span className="text-[#1e3a5f] font-medium">(+86) 188-7061-9179</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] rounded-lg shadow-md p-5 text-white">
            <h3 className="text-base font-semibold mb-3 text-[#c9a227]">Links</h3>
            <div className="flex gap-4 text-sm">
              <a
                href="https://github.com/zhangxin-hiter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#c9a227] transition-colors flex items-center gap-1"
              >
                <span>🔗</span> GitHub
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
