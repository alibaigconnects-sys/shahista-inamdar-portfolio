'use client';

import React, { useState } from 'react';
import {
  Code,
  Users,
  CheckCircle,
  Briefcase,
  Buildings,
  GraduationCap,
  Sparkle,
  PaperPlaneTilt,
  LinkedinLogo,
  GithubLogo,
  MapPin,
  CalendarBlank,
  ArrowUpRight,
  CaretDown,
  List,
  X,
  ShieldCheck,
  Cpu,
  TestTube,
  GitBranch,
} from '@phosphor-icons/react';

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const linkedInUrl = 'https://ca.linkedin.com/in/shahista-inamdar-67606276';
  const githubUrl = 'https://github.com/alibaigconnects-sys/shahista-inamdar-portfolio';

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 6000);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* =========================================================================
          Navbar
          ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#090D16]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-display font-bold text-white shadow-glow group-hover:scale-105 transition-transform">
              SI
            </div>
            <span className="font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              Shahista Inamdar
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#work" className="hover:text-white transition-colors">Featured Work</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="px-4 py-2 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition-all">
              Contact
            </a>
          </nav>

          {/* Social Icons & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinLogo size={20} weight="fill" />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center text-slate-200 hover:bg-white hover:text-slate-900 transition-all"
              title="GitHub Repository"
            >
              <GithubLogo size={20} weight="fill" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#090D16]/95 border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-slate-200">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-indigo-400">About</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-indigo-400">Experience</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-indigo-400">Skills</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-indigo-400">Featured Work</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-indigo-400">Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 text-indigo-300 font-semibold">Contact</a>
          </div>
        )}
      </header>

      <main className="flex-grow pt-24">
        {/* =========================================================================
            Hero Section
            ========================================================================= */}
        <section id="hero" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" />
                Senior Developer • Toronto, Canada
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-4 font-display">
                Shahista <span className="gradient-text">Inamdar</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl">
                Senior Software Developer with 10+ years of proven delivery across enterprise applications, Agile collaboration, and developer mentorship.
              </p>

              <div className="border-l-2 border-indigo-500 pl-4 py-1.5 mb-8 bg-indigo-500/5 rounded-r-lg max-w-xl text-slate-300 italic text-sm md:text-base">
                "Building dependable software, solving practical problems, and sharing the journey through technology and content."
              </div>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="#experience"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm shadow-glow hover:opacity-95 transition-opacity flex items-center gap-2"
                >
                  <span>Explore Career History</span>
                  <CaretDown size={16} weight="bold" />
                </a>

                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-sm border border-white/10 transition-all flex items-center gap-2"
                >
                  <LinkedinLogo size={18} weight="fill" className="text-[#0A66C2]" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

              {/* Verified Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
                <div>
                  <div className="text-2xl md:text-3xl font-bold font-display gradient-accent">10+</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">Years Experience</div>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <div className="text-2xl md:text-3xl font-bold font-display gradient-accent">6</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">Progressive Roles</div>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <div className="text-2xl md:text-3xl font-bold font-display gradient-accent">2</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">India & Canada</div>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md glass-panel p-8 rounded-3xl border border-indigo-500/20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 mx-auto mb-5 flex items-center justify-center text-3xl font-display font-extrabold text-white shadow-glow border-2 border-white/20">
                  SI
                </div>

                <h3 className="text-xl font-bold text-white mb-1">Shahista Inamdar</h3>
                <p className="text-indigo-400 font-semibold text-sm mb-3">Senior Developer</p>

                <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 mb-6">
                  <MapPin size={15} className="text-indigo-400" />
                  <span>Toronto, Ontario, Canada</span>
                </div>

                <div className="flex flex-col gap-2.5 mb-6 text-left">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                    <Code size={18} className="text-indigo-400" />
                    <span>Enterprise Software Delivery</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                    <Users size={18} className="text-cyan-400" />
                    <span>Agile Team Collaboration</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                    <Sparkle size={18} className="text-pink-400" />
                    <span>Tech Content Creator</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle size={14} weight="fill" /> Verified Profile
                  </span>
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-300 hover:text-white font-medium flex items-center gap-1"
                  >
                    LinkedIn <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            About Section
            ========================================================================= */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-4">
              Engineering Background & Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
                <Cpu size={26} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Professional Trajectory</h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-4">
                I am a Toronto-based Senior Developer with more than a decade of hands-on software development experience across India and Canada. My career has progressed from foundational .NET development roles into senior software engineering positions.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Throughout my journey, I have specialized in turning product requirements into reliable software, working inside cross-functional Agile teams, performing developer testing, and ensuring smooth test deployments.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-indigo-500/30">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <ShieldCheck size={26} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Core Engineering Principles</h3>
              <ul className="space-y-4 text-sm md:text-base text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" weight="fill" />
                  <div>
                    <strong className="text-white">Understand the 'Why':</strong> Good engineering starts with knowing why a feature is needed before writing a single line of code.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" weight="fill" />
                  <div>
                    <strong className="text-white">Constructive Dialogue:</strong> Offering alternative developer perspectives when supported by practical technical logic.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" weight="fill" />
                  <div>
                    <strong className="text-white">Quality-First Delivery:</strong> Comprehensive developer-side testing and verified deployment to test environments.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================================
            Experience Timeline
            ========================================================================= */}
        <section id="experience" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full">
              Career Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-4">
              Verified Work Experience
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2">
              A decade of documented software engineering delivery across India and Canada.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l border-indigo-500/30 space-y-10">
            {/* Role 1 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-emerald-500/20 shadow-glow" />
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border-emerald-500/30">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Current Position
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CalendarBlank size={14} /> Jun 2022 – Present
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Senior Developer</h3>
                <h4 className="text-indigo-400 font-semibold text-sm mb-2">
                  Air Tek Inc / Airline Startup
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                  <MapPin size={14} /> Toronto, Ontario, Canada
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Leading software development in Canada, building resilient applications, and driving collaborative Agile engineering.
                </p>
              </div>
            </div>

            {/* Role 2 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
              <div className="glass-panel p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-medium text-slate-400">Enterprise Technology</span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CalendarBlank size={14} /> Jun 2021 – May 2022
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Senior Software Developer</h3>
                <h4 className="text-indigo-400 font-semibold text-sm mb-2">
                  Ellie Mae <span className="text-slate-400 font-normal text-xs">(ICE Mortgage Technology)</span>
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                  <MapPin size={14} /> Pune District, Maharashtra, India
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Delivered senior-level engineering in large-scale mortgage and financial technology systems with high reliability standards.
                </p>
              </div>
            </div>

            {/* Role 3 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
              <div className="glass-panel p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-medium text-slate-400">Global Financial / Loyalty Systems</span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CalendarBlank size={14} /> Jun 2019 – Mar 2021
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Software Developer</h3>
                <h4 className="text-indigo-400 font-semibold text-sm mb-2">
                  Tavisca, a cxLoyalty Technology Platform <span className="text-slate-400 font-normal text-xs">(Division of JP Morgan Chase & Co.)</span>
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                  <MapPin size={14} /> Pune, Maharashtra, India
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Engineered core platform services for global travel and customer loyalty solutions under enterprise governance.
                </p>
              </div>
            </div>

            {/* Role 4 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
              <div className="glass-panel p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-medium text-slate-400">Agile Engineering</span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CalendarBlank size={14} /> Oct 2015 – Mar 2019
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Software Developer</h3>
                <h4 className="text-indigo-400 font-semibold text-sm mb-2">
                  Talent Anywhere
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                  <MapPin size={14} /> Pune, India
                </div>
                <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                  <li>Active member of an Agile software development team.</li>
                  <li>Understood requirements and why they were required for business impact.</li>
                  <li>Offered alternative developer perspectives to the Project Manager supported by valid points.</li>
                  <li>Performed development and developer-end testing, and deployed projects to test environments.</li>
                </ul>
              </div>
            </div>

            {/* Role 5 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
              <div className="glass-panel p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-medium text-slate-400">.NET Application Delivery</span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CalendarBlank size={14} /> Feb 2014 – Oct 2015
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Dot Net Developer</h3>
                <h4 className="text-indigo-400 font-semibold text-sm mb-2">
                  Sahir Projects
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                  <MapPin size={14} /> Pune / Pimpri-Chinchwad Area, India
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Implemented application modules, backend functionality, and database integrations using the .NET framework.
                </p>
              </div>
            </div>

            {/* Role 6 */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
              <div className="glass-panel p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-medium text-slate-400">Foundational Role</span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CalendarBlank size={14} /> Aug 2013 – Dec 2013
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Dotnet Developer</h3>
                <h4 className="text-indigo-400 font-semibold text-sm mb-2">
                  Systerix
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                  <MapPin size={14} /> Pune / Pimpri-Chinchwad Area, India
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Earliest professional role post-graduation, executing code structure, bug debugging, and component testing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            Skills & Core Capabilities
            ========================================================================= */}
        <section id="skills" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-4">
              Core Skills & Pillars
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2">
              Demonstrated engineering skills across enterprise platforms and product delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-4">
                <Code size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Software Development</h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Full lifecycle application development across enterprise systems, backend logic, and user-facing features.
              </p>
              <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                Enterprise Engineering
              </span>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-4">
                <Users size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Agile Collaboration</h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Active sprint participation, requirements clarification, and seamless coordination with project managers.
              </p>
              <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                Scrum & Cross-Functional
              </span>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-purple-500/15 text-purple-400 flex items-center justify-center mb-4">
                <Cpu size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">.NET Ecosystem</h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Multi-year foundation in .NET development, structured component design, and database-backed services.
              </p>
              <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
                Backend Services
              </span>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-pink-500/15 text-pink-400 flex items-center justify-center mb-4">
                <TestTube size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Testing & Quality</h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Disciplined developer-side testing, defect isolation, and pre-release verification before deployment.
              </p>
              <span className="text-xs font-semibold text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-md border border-pink-500/20">
                Developer Testing
              </span>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4">
                <GitBranch size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Test Deployments</h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Hands-on deployment of software builds and releases into test environments to support continuous QA.
              </p>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                Environment Releases
              </span>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-4">
                <Sparkle size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Content & Mentorship</h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Public content creation, software developer career insights, and guidance for developers navigating Canada.
              </p>
              <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                Community Guidance
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            Featured Work / Initiatives
            ========================================================================= */}
        <section id="work" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full">
              Work Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-4">
              Featured Initiatives
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2">
              Key domains and impact areas delivered throughout my software engineering career.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                  Enterprise Domain
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Financial & Loyalty Platform Engineering
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Engineered large-scale software solutions for global mortgage technology (Ellie Mae) and travel rewards platforms (Tavisca / JP Morgan Chase), adhering to high security and enterprise standards.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Enterprise Grade</span>
                <span className="text-indigo-400 font-semibold">Tavisca & Ellie Mae</span>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  Delivery Engineering
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Agile Requirement Analysis & Testing Cycle
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Spearheaded proactive collaboration with Project Managers at Talent Anywhere, analyzing requirement rationale, delivering developer-tested builds, and managing test environment rollouts.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Agile Processes</span>
                <span className="text-cyan-400 font-semibold">Talent Anywhere</span>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between border-indigo-500/30">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-pink-400 mb-2">
                  Community Impact
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Canadian Tech Career & Mentorship Platform
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Actively creating content and sharing real-world insights for software engineers in Canada, reaching 1,000+ followers with actionable guidance on Canadian interview processes and referrals.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>1,000+ Followers</span>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white font-semibold flex items-center gap-1">
                  View Content <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            Education Section
            ========================================================================= */}
        <section id="education" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full">
              Education
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-4">
              Academic Background
            </h2>
          </div>

          <div className="max-w-3xl mx-auto glass-panel p-8 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-glow">
              <GraduationCap size={32} weight="fill" />
            </div>

            <div className="flex-grow">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-2">
                First Class Honors
              </span>
              <h3 className="text-xl font-bold text-white">
                Bachelor of Engineering (BE) in Computer Science
              </h3>
              <h4 className="text-indigo-300 text-sm font-medium mt-1">
                Indira College of Engineering & Technology (Shri Chankya Education Society)
              </h4>
              <div className="flex flex-wrap gap-4 text-xs text-slate-400 mt-2">
                <span className="flex items-center gap-1"><MapPin size={13} /> Pune, India</span>
                <span className="flex items-center gap-1"><CalendarBlank size={13} /> 2009 – 2013</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            Contact Section
            ========================================================================= */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-4">
              Let's Connect & Collaborate
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2">
              Reach out for software engineering opportunities, referral inquiries in Canada, or tech conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
            {/* Left Info */}
            <div className="lg:col-span-5 glass-panel p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Direct Channels</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  I am active on LinkedIn and welcome connection requests and messages from colleagues, recruiters, and developers.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-indigo-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">Location</div>
                      <div className="text-sm font-medium text-white">Toronto, Ontario, Canada</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#0A66C2]">
                      <LinkedinLogo size={20} weight="fill" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">LinkedIn</div>
                      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-300 hover:text-white underline">
                        shahista-inamdar-67606276
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-200">
                      <GithubLogo size={20} weight="fill" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">GitHub Repository</div>
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-300 hover:text-white underline">
                        shahista-inamdar-portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="p-4 rounded-xl bg-indigo-500/10 border border-dashed border-indigo-500/30 text-xs text-indigo-300 font-semibold text-center">
                  "DM For Referral In Canada"
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="form-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="form-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Collaboration / Engineering Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm shadow-glow hover:opacity-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <PaperPlaneTilt size={16} weight="bold" />
                    </>
                  )}
                </button>
              </form>

              {formSubmitted && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle size={18} weight="fill" />
                  <span>Message sent successfully! Shahista can also be reached on LinkedIn.</span>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          Footer
          ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#060910] py-10 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center font-display font-bold text-white text-[10px]">
              SI
            </span>
            <span className="font-semibold text-slate-200">Shahista Inamdar</span>
            <span>• Senior Developer</span>
          </div>

          <div>
            Built with Next.js & Tailwind CSS • Verified Professional Profile
          </div>

          <div className="flex items-center gap-4">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#hero" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
