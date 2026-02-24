import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Twitter, Instagram, Youtube, Codepen, Mail, MapPin, Phone } from 'lucide-react';

const SECTIONS = [
  { id: 'experience', title: 'Experience' },
  { id: 'skills', title: 'Skills' },
  { id: 'game-design', title: 'Game Design & Tech Art' },
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('experience');
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1b1b1f] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-[#1b1b1f]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <div className="font-semibold text-lg">Bad Builders</div>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-gray-50 dark:bg-[#1b1b1f] border-r border-gray-200 dark:border-gray-800 z-40 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800 hidden lg:flex gap-2">
          <Logo className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <div className="font-semibold text-lg tracking-tight">Bad Builders</div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <div className="px-2 mb-6 text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed uppercase">
            CREATING DIGITAL PRODUCTS
          </div>
          <div className="mb-8">
            <h2 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3 px-2">
              Menu
            </h2>
            <ul className="space-y-1">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors ${
                      activeSection === section.id
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Theme Toggle in Bottom Left */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{isDarkMode ? 'Light Appearance' : 'Dark Appearance'}</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 pt-16 lg:pt-0 min-h-screen relative overflow-hidden">
        {/* Background Logo */}
        <Logo className="absolute -top-40 -right-24 w-[600px] h-[600px] text-gray-900/[0.03] dark:text-white/[0.03] pointer-events-none z-0 transform rotate-12" />
        
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20 lg:px-12 relative z-10">
          
          {/* Header Section */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-2">
              <Logo className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 dark:text-indigo-400" />
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">Bad Builders</h1>
            </div>
            <h2 className="text-xl sm:text-2xl font-mono font-medium mb-4">
              <span className="text-pink-500 dark:text-pink-400">smart</span>
              <span className="text-gray-400 dark:text-gray-500">\</span>
              <span className="text-yellow-500 dark:text-yellow-400">build</span>
              <span className="text-gray-400 dark:text-gray-500">&gt;</span>
              <span className="text-pink-500 dark:text-pink-400">engineers</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Dynamic game developers and 3D artists with extensive experience in 3D modeling and programming language skills acquired through extensive training. They are skilled at creating immersive game environments and character designs that enhance gameplay. Passionate about using innovative AI methods and technologies to bring concepts to life, aiming to drive innovation with a strong focus on driving progress in Web3, SmartDev and gaming software development.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-1.5"><MapPin size={16} /> Buenos Aires, Argentina</div>
              <div className="flex items-center gap-1.5">
                <Mail size={16} /> 
                {showEmail ? (
                  <a href="mailto:badbuildersvibecode@gmail.com" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline transition-colors">
                    badbuildersvibecode@gmail.com
                  </a>
                ) : (
                  <button onClick={() => setShowEmail(true)} className="bg-indigo-600 dark:bg-indigo-400 text-black font-bold text-xs tracking-wider px-3 py-1 rounded hover:opacity-80 transition-opacity">
                    PUSH
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <SocialLink href="https://github.com/BadBuilders" icon={<Github size={20} />} label="GitHub" />
              <SocialLink href="https://x.com/badbuildersvibe" icon={<Twitter size={20} />} label="X (Twitter)" />
              <SocialLink href="https://www.instagram.com/badbuildersvibe/" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="https://www.youtube.com/@badbuildersvibe" icon={<Youtube size={20} />} label="YouTube" />
              <SocialLink href="https://codepen.io/Bad-Builders" icon={<Codepen size={20} />} label="CodePen" />
            </div>
          </div>

          <div className="space-y-24">
            {/* Experience */}
            <section id="experience" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">Experience</h2>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-800">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white dark:ring-[#1b1b1f]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                    <h3 className="text-xl font-medium">Bad Builders, Freelance</h3>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">Buenos Aires, Argentina</div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Remote work and full-time employment on projects.</li>
                    <li>8+ years of experience as a professional in game development and web app/ Web3 3+</li>
                    <li>5+ years as a professional C++ Game Developer.</li>
                    <li>Worked 2 AAA title or 3+ AA titles.</li>
                    <li>Experience working across multiple areas of game development.</li>
                    <li>Full time development app, game, vfx, SaaS, 3d</li>
                    <li>Pro using Unreal Engine.</li>
                    <li>Ai teamlead agent, pro user.</li>
                    <li>Creative director media and engineer.</li>
                    <li>Maintain and build code using C++ for all assigned work.</li>
                    <li>Help provide architectural oversight across the application.</li>
                    <li>Collaborate to devise optimal engineering solutions.</li>
                  </ul>
                </div>
              </div>
            </section>



            {/* Skills */}
            <section id="skills" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4 text-indigo-600 dark:text-indigo-400">Languages</h3>
                  <div className="space-y-3">
                    <SkillBar name="JavaScript (ES6+)" level="Native" percentage={100} />
                    <SkillBar name="TypeScript" level="Native" percentage={100} />
                    <SkillBar name="C#" level="Fluent" percentage={90} />
                    <SkillBar name="C++" level="Fluent" percentage={90} />
                    <SkillBar name="Python" level="Intermediate" percentage={60} />
                    <SkillBar name="Swift" level="Intermediate" percentage={50} />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 text-indigo-600 dark:text-indigo-400">Core Tech</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Unreal Engine 5 (UE5)', 'Unity', 'React', 'Next.js', 'Node.js', 'Three.js', 'React Three Fiber', 'Tailwind CSS', 'Docker', 'AWS', 'Supabase', 'Kubernetes'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm border border-gray-200 dark:border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4 text-indigo-600 dark:text-indigo-400">Other Skills & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    '3D asset pipelines', 'Context API', 'Redux Toolkit', 'Zustand', 'SSR', 'SSG', 'ISR', 'React Server Components', 'Vite',
                    'Styled-Components', 'Framer Motion', 'Fastify', 'Express', 'EC2', 'ECS/Fargate', 'EKS', 'Lambda', 'RDS', 'S3', 'CloudFront',
                    'API Gateway', 'IAM', 'Secrets Manager', 'Helm', 'Terraform', 'Terragrunt', 'OpenTofu', 'ArgoCD', 'Flux', 'GitHub Actions',
                    'GitLab CI', 'Ansible', 'Packer', 'Bash / Shell scripting', 'Go', 'Prometheus', 'Grafana', 'Loki', 'CloudWatch', 'Datadog',
                    'PagerDuty / Better Uptime', 'SLO/SLI', 'Creative Direction', '3D Prototyping', 'Environment Design', 'UI/UX thinking',
                    'Visual storytelling', 'Branding', 'Moodboards', 'Design systems', 'Figma', 'Motion design', 'Micro-interactions', 'CSS',
                    'Roadmap shaping', 'Prioritization', 'Cross-functional coordination', 'Startup operations', 'MVP development', 'Cost control',
                    'Hiring input', 'Rapid prototyping', 'Cloud cost optimization', 'Spot instances', 'Savings Plans', 'Reserved Instances',
                    'Zero-downtime deployments', 'Blue-green deployments', 'Canary deployments', 'Debugging', 'Building dev-friendly platforms',
                    'Golden paths', 'Startup hustle', 'Producer mindset'
                  ].map(skill => (
                    <span key={skill} className="px-2.5 py-1 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 rounded-md text-xs border border-gray-200 dark:border-gray-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Game Design & Technical Artistry */}
            <section id="game-design" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-800">Game Design & Technical Artistry</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-indigo-600 dark:text-indigo-400">Advanced Gameplay Mechanics & Engineering</h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong className="text-gray-900 dark:text-gray-100">Complex Traversal Systems:</strong> Engineered logic for seamless, omni-directional movement across highly irregular, multi-dimensional surfaces and vertical organic geometry.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-gray-100">Scale-Specific Interactions:</strong> Designed unique physics and interaction mechanics tailored to a micro-world perspective, turning everyday natural obstacles into engaging gameplay puzzles.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 text-indigo-600 dark:text-indigo-400">Creative Problem Solving & Pipeline Innovation</h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong className="text-gray-900 dark:text-gray-100">AI-to-Engine Pipeline:</strong> Pioneered a rapid-prototyping workflow by directing and training AI models to generate raw 3D concepts, successfully bridging the gap between generative AI and production-ready game assets (optimizing topology, rigging, and integration).
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-gray-100">Spatial & Camera Logic:</strong> Solved intricate camera behavior and collision detection challenges within highly dense, enclosed, and complex non-linear environments.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-gray-100">Performance Optimization:</strong> Balanced high visual fidelity with engine performance, optimizing dense organic meshes and complex shaders for smooth gameplay.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 text-indigo-600 dark:text-indigo-400">Art Direction & Game Design Sensibilities</h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong className="text-gray-900 dark:text-gray-100">Cinematic Micro-World Aesthetics:</strong> Directed the visual style using macro-scale lighting, depth of field, and high-fidelity PBR texturing to create a highly immersive, premium atmosphere.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-gray-100">Environmental Storytelling:</strong> Crafted level designs where organic architecture (roots, tunnels, natural debris) acts as intuitive player guidance, maintaining deep immersion without relying on intrusive UI.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-gray-100">Cohesive Visual Language:</strong> Ensured strict artistic consistency across all assets, blending technical constraints with a refined, cinematic eye for detail.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        </div>
        
        {/* Bottom Background Logo */}
        <Logo className="absolute -bottom-48 -left-48 w-[800px] h-[800px] text-gray-900/[0.03] dark:text-white/[0.03] pointer-events-none z-0 transform -rotate-12" />
      </main>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 transition-colors"
      aria-label={label}
      title={label}
    >
      {icon}
    </a>
  );
}

function SkillBar({ name, level, percentage }: { name: string; level: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between items-end mb-1">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{level}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5">
        <div className="bg-indigo-600 dark:bg-indigo-400 h-1.5 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,5 90,25 50,45 10,25" />
      <path d="M 10,29 L 48,48 L 48,95 L 10,76 Z M 22,43 L 38,51 L 38,58 L 22,50 Z M 22,56 L 38,64 L 38,71 L 22,63 Z" fillRule="evenodd" />
      <path d="M 90,29 L 52,48 L 52,95 L 90,76 Z M 78,43 L 62,51 L 62,58 L 78,50 Z M 78,56 L 62,64 L 62,71 L 78,63 Z" fillRule="evenodd" />
    </svg>
  );
}
