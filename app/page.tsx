export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              张昕
            </h1>
            <h2 className="text-xl text-gray-600 mb-6">
              通信工程 · 本科在读 · 哈尔滨工业大学(深圳)
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
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
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <img 
              src="/photo.jpg" 
              alt="张昕" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="education" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
          教育背景
        </h2>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  哈尔滨工业大学(深圳)
                </h3>
                <p className="text-gray-700">通信工程 · 本科</p>
              </div>
              <span className="text-sm text-gray-600">2022 - 2026</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              GPA: 88.587/100（45/240，前18.75%）
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
          项目经历
        </h2>
        <div className="space-y-6">
          <article className="border-l-4 border-blue-600 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-semibold text-gray-900">
                华大九天杯深圳市电子设计邀请赛 · 视觉导航智能小车
              </h3>
              <span className="text-sm text-gray-600">2025.04</span>
            </div>
            <p className="text-sm text-gray-700 mb-2">项目成员</p>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>小车通过摄像头识别道路红线，完成道路寻线，并利用神经网络识别道路标识</li>
              <li>根据标识完成停车、左转右转等动作</li>
              <li>负责视觉模块K230与主控芯片MSPM0G3507板间通信数据传输</li>
              <li>负责ADC按键、蜂鸣器、小车与上位机无线通信部分</li>
            </ul>
          </article>

          <article className="border-l-4 border-blue-600 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-semibold text-gray-900">
                个人项目 · 智能蓝牙避障小车
              </h3>
              <span className="text-sm text-gray-600">2025.01</span>
            </div>
            <p className="text-sm text-gray-700 mb-2">项目负责人</p>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>实现小车自动避障功能，并通过蓝牙返回到障碍物的距离</li>
              <li>主控芯片STM32F103C8T6，通过定时器输出两路PWM控制电机</li>
              <li>蓝牙模块通过串口与主控通信，超声波测量障碍物距离并控制运动逻辑</li>
            </ul>
          </article>

          <article className="border-l-4 border-gray-400 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-semibold text-gray-900">
                2024全国电子设计大赛H题（练习）· 红外巡线小车
              </h3>
              <span className="text-sm text-gray-600">2025.01</span>
            </div>
            <p className="text-sm text-gray-700 mb-2">项目成员</p>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>实现小车按指定路线寻线</li>
              <li>负责MPU6050六轴传感器部分，采用I2C通信协议</li>
              <li>实现传感器与主控芯片MSPM0通信，通过数据融合获得小车姿态角</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="skills" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
          专业技能
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">编程语言</h3>
            <p className="text-gray-600 text-sm">
              熟练使用C语言，能够使用Python编程
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">嵌入式开发</h3>
            <p className="text-gray-600 text-sm">
              熟悉STM32、MSP系列单片机开发，熟悉I2C、UART、SPI等通信协议
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">操作系统</h3>
            <p className="text-gray-600 text-sm">
              熟悉RTOS，了解Linux应用开发
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">EDA工具</h3>
            <p className="text-gray-600 text-sm">
              熟悉Multisim、Cadence、Virtuoso、AD等EDA软件
            </p>
          </div>
        </div>
        <div className="mt-4 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">开发工具</h3>
          <p className="text-gray-600 text-sm">
            熟悉Git版本控制、Makefile构建工具
          </p>
        </div>
      </section>

      <section id="awards" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
          荣誉奖励
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-start border-b border-gray-200 pb-4">
            <div>
              <h3 className="text-base font-semibold text-gray-900">全国大学生数学竞赛黑龙江赛区一等奖</h3>
              <p className="text-sm text-gray-600">2次获得（2023, 2024）</p>
            </div>
          </div>
          <div className="flex justify-between items-start border-b border-gray-200 pb-4">
            <div>
              <h3 className="text-base font-semibold text-gray-900">学校学业奖学金</h3>
              <p className="text-sm text-gray-600">2次获得（2023, 2024）</p>
            </div>
          </div>
          <div className="flex justify-between items-start border-b border-gray-200 pb-4">
            <div>
              <h3 className="text-base font-semibold text-gray-900">华大九天杯深圳市电子设计邀请赛三等奖</h3>
              <p className="text-sm text-gray-600">2025.04</p>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base font-semibold text-gray-900">哈尔滨工业大学优秀学生荣誉</h3>
              <p className="text-sm text-gray-600">2024.10</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mb-8 scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
          联系方式
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-3">地址</h3>
            <p className="text-sm text-gray-600">
              哈尔滨工业大学(深圳)<br />
              南山区, 深圳市 518052
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-3">联系方式</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="inline-block w-12">邮箱:</span>
                <a href="mailto:zx2567617517@foxmail.com" className="text-blue-600 hover:underline">
                  zx2567617517@foxmail.com
                </a>
              </p>
              <p>
                <span className="inline-block w-12">电话:</span>
                (+86) 188-7061-9179
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-base font-semibold text-gray-900 mb-3">个人链接</h3>
          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com/zhangxin-hiter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
