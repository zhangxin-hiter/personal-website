export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              张三
            </h1>
            <h2 className="text-xl text-gray-600 mb-6">
              副教授 · 计算机科学与技术系
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                我是一名专注于机器学习和人工智能研究的计算机科学学者。我的研究兴趣主要集中在深度学习、自然语言处理和计算机视觉领域。
              </p>
              <p>
                在加入[大学名称]之前，我在[前一个机构]获得了博士学位。我的工作旨在推动人工智能技术在教育、医疗和工业等实际应用场景中的落地。
              </p>
            </div>
          </div>
          <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-400">照片</span>
          </div>
        </div>
      </section>

      <section id="research" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
          研究方向
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">深度学习</h3>
            <p className="text-gray-600 text-sm">
              研究深度神经网络的理论基础，探索高效训练方法和模型压缩技术，以提高模型在资源受限环境中的性能。
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">自然语言处理</h3>
            <p className="text-gray-600 text-sm">
              开发面向中文和英文的预训练语言模型，研究其在机器翻译、文本生成和情感分析等任务中的应用。
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">计算机视觉</h3>
            <p className="text-gray-600 text-sm">
              探索目标检测、图像分割和图像生成技术，致力于将计算机视觉技术应用于医疗诊断和自动驾驶等领域。
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">多模态学习</h3>
            <p className="text-gray-600 text-sm">
              研究视觉和语言信息的联合表示学习，开发跨模态的检索、问答和生成系统。
            </p>
          </div>
        </div>
      </section>

      <section id="publications" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
          发表论文
        </h2>
        <div className="space-y-6">
          <article className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              A Novel Approach to Multi-Modal Learning
            </h3>
            <p className="text-sm text-gray-700 mb-1">
              <strong>张三</strong>, 李四, 王五
            </p>
            <p className="text-sm text-gray-600 italic mb-2">
              IEEE Transactions on Pattern Analysis and Machine Intelligence, 2025
            </p>
            <div className="flex gap-4 text-xs">
              <a href="#" className="text-blue-600 hover:underline">PDF</a>
              <a href="#" className="text-blue-600 hover:underline">Code</a>
              <a href="#" className="text-blue-600 hover:underline">Project Page</a>
            </div>
          </article>

          <article className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              Efficient Training of Deep Neural Networks
            </h3>
            <p className="text-sm text-gray-700 mb-1">
              李四, <strong>张三</strong>, 赵六
            </p>
            <p className="text-sm text-gray-600 italic mb-2">
              NeurIPS 2024
            </p>
            <div className="flex gap-4 text-xs">
              <a href="#" className="text-blue-600 hover:underline">PDF</a>
              <a href="#" className="text-blue-600 hover:underline">Code</a>
              <a href="#" className="text-blue-600 hover:underline">Poster</a>
            </div>
          </article>

          <article className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              Advances in Chinese Natural Language Processing
            </h3>
            <p className="text-sm text-gray-700 mb-1">
              <strong>张三</strong>, 孙七
            </p>
            <p className="text-sm text-gray-600 italic mb-2">
              ACL 2024
            </p>
            <div className="flex gap-4 text-xs">
              <a href="#" className="text-blue-600 hover:underline">PDF</a>
              <a href="#" className="text-blue-600 hover:underline">Slides</a>
            </div>
          </article>

          <article className="border-l-4 border-gray-400 pl-4">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              Visual Question Answering: A Survey
            </h3>
            <p className="text-sm text-gray-700 mb-1">
              周八, <strong>张三</strong>
            </p>
            <p className="text-sm text-gray-600 italic mb-2">
              International Journal of Computer Vision, 2023
            </p>
            <div className="flex gap-4 text-xs">
              <a href="#" className="text-blue-600 hover:underline">PDF</a>
              <a href="#" className="text-blue-600 hover:underline">DOI</a>
            </div>
          </article>
        </div>
      </section>

      <section id="teaching" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
          教学经历
        </h2>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-base font-semibold text-gray-900">
              CS401: 深度学习导论
            </h3>
            <p className="text-sm text-gray-600 mt-1">本科生课程 · 秋季学期 · 2024-2025</p>
            <p className="text-sm text-gray-700 mt-2">
              本课程介绍深度学习的基础理论和核心算法，包括卷积神经网络、循环神经网络、注意力机制等内容。
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-base font-semibold text-gray-900">
              CS502: 自然语言处理
            </h3>
            <p className="text-sm text-gray-600 mt-1">研究生课程 · 春季学期 · 2024-2025</p>
            <p className="text-sm text-gray-700 mt-2">
              深入研究自然语言处理的前沿技术，包括预训练语言模型、机器翻译、对话系统等方向。
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-base font-semibold text-gray-900">
              CS301: 机器学习基础
            </h3>
            <p className="text-sm text-gray-600 mt-1">本科生课程 · 春季学期 · 2023-2024</p>
            <p className="text-sm text-gray-700 mt-2">
              系统介绍机器学习的基本概念、常用算法和实践应用，培养学生的算法实现和分析能力。
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mb-8 scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
          联系方式
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-3">办公地址</h3>
            <p className="text-sm text-gray-600">
              计算机楼 305 室<br />
              [大学名称]<br />
              北京市海淀区[街道地址]
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-3">联系方式</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <span className="inline-block w-24">邮箱:</span>
                <a href="mailto:zhangsan@university.edu" className="text-blue-600 hover:underline">
                  zhangsan@university.edu
                </a>
              </p>
              <p>
                <span className="inline-block w-24">电话:</span>
                +86-10-1234-5678
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-base font-semibold text-gray-900 mb-3">学术链接</h3>
          <div className="flex gap-4 text-sm">
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Scholar
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://orcid.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ORCID
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
