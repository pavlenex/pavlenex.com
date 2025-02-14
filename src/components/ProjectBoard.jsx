import React, { useState, useMemo, useEffect } from 'react';
import { ExternalLink, Github, Twitter, Mail, Sun, Moon } from 'lucide-react';

const ProjectBoard = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Theme management effects
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Tag colors with improved accessibility
  const tagColors = {
    Grantee: { 
      light: 'bg-blue-50 text-blue-800', 
      dark: 'bg-blue-400/20 text-blue-200' 
    },
    Bitcoin: { 
      light: 'bg-orange-50 text-orange-800', 
      dark: 'bg-orange-400/20 text-orange-200' 
    },
    'Product Strategy': { 
      light: 'bg-purple-50 text-purple-800', 
      dark: 'bg-purple-400/20 text-purple-200' 
    },
    Payments: { 
      light: 'bg-green-50 text-green-800', 
      dark: 'bg-green-400/20 text-green-200' 
    },
    Mining: { 
      light: 'bg-red-50 text-red-800', 
      dark: 'bg-red-400/20 text-red-200' 
    },
    Protocol: { 
      light: 'bg-indigo-50 text-indigo-800', 
      dark: 'bg-indigo-400/20 text-indigo-200' 
    },
    Design: { 
      light: 'bg-pink-50 text-pink-800', 
      dark: 'bg-pink-400/20 text-pink-200' 
    },
    'Open Source': { 
      light: 'bg-teal-50 text-teal-800', 
      dark: 'bg-teal-400/20 text-teal-200' 
    },
    'Non-profit': { 
      light: 'bg-emerald-50 text-emerald-800', 
      dark: 'bg-emerald-400/20 text-emerald-200' 
    },
    'E-commerce': { 
      light: 'bg-cyan-50 text-cyan-800', 
      dark: 'bg-cyan-400/20 text-cyan-200' 
    },
    Research: { 
      light: 'bg-violet-50 text-violet-800', 
      dark: 'bg-violet-400/20 text-violet-200' 
    },
    Community: { 
      light: 'bg-amber-50 text-amber-800', 
      dark: 'bg-amber-400/20 text-amber-200' 
    },
    'El Salvador': { 
      light: 'bg-sky-50 text-sky-800', 
      dark: 'bg-sky-400/20 text-sky-200' 
    }
  };

  const projects = useMemo(() => ({
    current: [
      {
        title: "Spiral",
        tags: ["Grantee", "Bitcoin"],
        link: "https://spiral.xyz"
      }
    ],
    inProgress: [
      {
        title: "BTCPay Server",
        tags: ["Product Strategy", "Bitcoin", "Payments"],
        link: "https://btcpayserver.org"
      },
      {
        title: "Stratum V2",
        tags: ["Bitcoin", "Mining", "Protocol"],
        link: "https://stratumprotocol.org"
      }
    ],
    completed: [
      {
        title: "Bitcoin Design",
        tags: ["Design", "Open Source"],
        link: "https://bitcoin.design"
      },
      {
        title: "Bitcoin Smiles",
        tags: ["Non-profit", "El Salvador"],
        link: "https://bitcoinsmiles.org"
      },
      {
        title: "BitcoinShirt.co",
        tags: ["E-commerce", "Bitcoin"],
        link: "https://bitcoinshirt.co"
      },
      {
        title: "Hub21",
        tags: ["Research", "Community"],
        link: "https://hub21.rs"
      }
    ]
  }), []);

  const Tag = ({ tag }) => (
    <span 
      className={`px-2 py-0.5 rounded text-xs font-medium tracking-wide transition-colors duration-200
                ${tagColors[tag]?.[darkMode ? 'dark' : 'light']}`}
    >
      {tag}
    </span>
  );

  const socialLinks = useMemo(() => [
    { href: "https://github.com/pavlenex", icon: Github, label: "GitHub Profile" },
    { href: "https://twitter.com/pavlenex", icon: Twitter, label: "Twitter Profile" },
    { href: "mailto:pavlenex@icloud.com", icon: Mail, label: "Email Contact" }
  ], []);

  const SocialLink = ({ href, icon: Icon, label }) => (
    <a 
      href={href}
      className={`p-4 rounded-full shadow-md group relative
                transition-all duration-300 ease-out hover:-translate-y-1
                ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
      aria-label={label}
      rel="noopener noreferrer"
      {...(href.startsWith('http') ? { target: "_blank" } : {})}
    >
      <div className="absolute inset-0 rounded-full bg-purple-500/10 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300" 
           aria-hidden="true" />
      <Icon className={`w-6 h-6 relative z-10
                     ${darkMode ? 'text-gray-400 group-hover:text-purple-300' : 
                              'text-gray-600 group-hover:text-purple-600'}
                     transition-all duration-300 ease-out group-hover:scale-110`} />
    </a>
  );

  const ProjectCard = ({ project }) => (
    <div className={`group border-l-4 border-l-transparent hover:border-l-purple-500 
                   hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-lg
                   ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className={darkMode ? 'text-gray-100' : 'text-gray-900'}>
            {project.title}
          </h3>
          {project.link && (
            <a 
              href={project.link}
              className="ml-2 text-gray-400 hover:text-purple-500 transform hover:scale-110
                       transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
            >
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );

  const KanbanColumn = ({ title, projects, color }) => (
    <div 
      className={`h-full rounded-lg p-4 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50/80'}`}
      role="region"
      aria-label={`${title} projects`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${color}`} aria-hidden="true" />
          <h2 className={`text-sm font-semibold tracking-wide
                       ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            {title}
          </h2>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium
                       ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-white/80 text-gray-600'}`}
                aria-label={`${projects.length} projects`}>
          {projects.length}
        </span>
      </div>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );

  const columns = useMemo(() => [
    { title: "Current", projects: projects.current, color: "bg-blue-400" },
    { title: "In Progress", projects: projects.inProgress, color: "bg-purple-400" },
    { title: "Completed", projects: projects.completed, color: "bg-green-400" }
  ], [projects]);

  return (
    <div className={darkMode ? 'bg-gray-900' : 'bg-gray-50'}>
      <main className="min-h-screen transition-colors duration-500" role="main">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                   bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50"
        >
          Skip to main content
        </a>

        <div className="sticky top-0 z-50 w-full bg-transparent pb-4 pt-6 px-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`float-right p-3 rounded-full shadow-lg
                     transition-all duration-300 ease-out hover:-translate-y-1
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
                     ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? 
              <Sun className="w-5 h-5 text-yellow-500" aria-hidden="true" /> : 
              <Moon className="w-5 h-5 text-purple-500" aria-hidden="true" />
            }
          </button>
        </div>

        <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 mb-24">
            <div className="flex-1 w-full lg:pr-8">
              <h1 className={`text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r 
                           ${darkMode ? 'from-purple-400 to-purple-200' : 'from-purple-600 to-purple-400'}
                           bg-clip-text text-transparent tracking-tight leading-tight`}>
                Bitcoin Product Manager
              </h1>
              <p className={`text-lg lg:text-xl mb-10 leading-relaxed max-w-2xl tracking-normal
                          ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Focused on accelerating Bitcoin adoption through open-source payment solutions 
                and mining infrastructure. Currently leading product strategy at BTCPay Server 
                and contributing to Stratum V2.
              </p>
              <nav className="flex gap-6" aria-label="Social links">
                {socialLinks.map((link, index) => (
                  <SocialLink 
                    key={index}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                  />
                ))}
              </nav>
            </div>
            <div className="lg:flex-shrink-0 w-full lg:w-auto max-w-sm lg:max-w-none">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 
                             rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"
                     aria-hidden="true"></div>
                <img 
                  src="/pavlenex.jpg"
                  alt="Pavlenex - Bitcoin Product Manager"
                  className="relative w-full lg:w-80 h-80 rounded-2xl shadow-2xl object-cover
                           transform group-hover:scale-[1.02] transition-transform duration-300"
                  width={320}
                  height={320}
                />
              </div>
            </div>
          </section>

          <section aria-labelledby="projects-heading" className="rounded-xl p-6">
            <h2 
              id="projects-heading"
              className={`text-2xl lg:text-3xl font-semibold mb-10 tracking-tight
                       ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
            >
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {columns.map((column, index) => (
                <KanbanColumn 
                  key={index}
                  title={column.title}
                  projects={column.projects}
                  color={column.color}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProjectBoard;