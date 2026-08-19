'use client';

import React, { useState } from 'react';
import {
  LinkedinLogo,
  ArrowRight,
  MapPin,
  CalendarBlank,
  CheckCircle,
  PaperPlaneTilt,
  List,
  X,
  MagnifyingGlass,
  ArrowUpRight,
  Code,
  Users,
  TestTube,
  GitBranch,
  Cpu,
  GraduationCap,
} from '@phosphor-icons/react';

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const linkedInUrl = 'https://ca.linkedin.com/in/shahista-inamdar-67606276';

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
    <div className="min-h-screen bg-[#141414] text-white relative selection:bg-[#FF6B50] selection:text-white pb-16">
      {/* Ambient background glow layers */}
      <div className="bg-ambient-layer" />

      {/* =========================================================================
          Top Client / Enterprise Trust Bar (Reference Inspired)
          ========================================================================= */}
      <div className="w-full bg-[#111111] border-b border-white/5 py-2.5 text-xs text-[#7A7A7A] relative z-20">
        <div className="max-w-[1340px] mx-auto px-6 flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-6 font-mono uppercase tracking-widest text-[10.5px]">
            <span className="hover:text-[#B8B8B8] transition-colors">JP Morgan Chase & Co.</span>
            <span className="text-[#333333]">•</span>
            <span className="hover:text-[#B8B8B8] transition-colors">Ellie Mae / ICE</span>
            <span className="text-[#333333]">•</span>
            <span className="hover:text-[#B8B8B8] transition-colors">cxLoyalty</span>
            <span className="text-[#333333]">•</span>
            <span className="hover:text-[#B8B8B8] transition-colors">Airline Technology</span>
          </div>
          <div className="flex items-center gap-2 ml-auto text-[11px] font-medium text-[#B8B8B8]">
            <span className="w-2 h-2 rounded-full bg-[#1DE9B6] animate-ping" />
            <span>Toronto, Canada • Available for Opportunities</span>
          </div>
        </div>
      </div>

      {/* Main Elevated Canvas Container (Editorial Frame) */}
      <div className="max-w-[1340px] mx-auto px-3 sm:px-6 relative z-10 pt-4">
        <div className="bg-[#1C1C1C] rounded-lg border border-white/5 shadow-2xl overflow-hidden">
          
          {/* =====================================================================
              Editorial Navigation Bar (Matching Reference)
              ===================================================================== */}
          <header className="px-6 md:px-10 py-6 flex items-center justify-between border-b border-white/5">
            {/* Coral Square Monogram Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#FF6B50] rounded-md flex items-center justify-center font-display font-extrabold text-white text-xl shadow-coral-glow group-hover:scale-105 transition-transform">
                S.
              </div>
              <span className="font-bold tracking-tight text-white hidden sm:inline-block text-base">
                Shahista Inamdar
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#B8B8B8]">
              <a
                href="#hero"
                onClick={() => setActiveSection('home')}
                className={`transition-colors hover:text-white ${activeSection === 'home' ? 'text-[#FF6B50] font-semibold' : ''}`}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setActiveSection('about')}
                className={`transition-colors hover:text-white ${activeSection === 'about' ? 'text-[#FF6B50] font-semibold' : ''}`}
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setActiveSection('skills')}
                className={`transition-colors hover:text-white ${activeSection === 'skills' ? 'text-[#FF6B50] font-semibold' : ''}`}
              >
                Expertise
              </a>
              <a
                href="#work"
                onClick={() => setActiveSection('work')}
                className={`transition-colors hover:text-white ${activeSection === 'work' ? 'text-[#FF6B50] font-semibold' : ''}`}
              >
                Works
              </a>
              <a
                href="#experience"
                onClick={() => setActiveSection('experience')}
                className={`transition-colors hover:text-white ${activeSection === 'experience' ? 'text-[#FF6B50] font-semibold' : ''}`}
              >
                Journey
              </a>
              <a
                href="#education"
                onClick={() => setActiveSection('education')}
                className={`transition-colors hover:text-white ${activeSection === 'education' ? 'text-[#FF6B50] font-semibold' : ''}`}
              >
                Education
              </a>
              <a
                href="#contact"
                onClick={() => setActiveSection('contact')}
                className={`transition-colors hover:text-white ${activeSection === 'contact' ? 'text-[#FF6B50] font-semibold' : ''}`}
              >
                Contact
              </a>
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-[#252525] border border-white/10 flex items-center justify-center text-[#B8B8B8] hover:text-[#FF6B50] hover:border-[#FF6B50]/40 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinLogo size={20} weight="fill" />
              </a>

              <a
                href="#contact"
                className="w-10 h-10 bg-[#FF6B50] rounded-md flex items-center justify-center text-white hover:bg-[#FF856E] transition-all shadow-coral-glow"
                title="Get in touch"
              >
                <PaperPlaneTilt size={18} weight="bold" />
              </a>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-md bg-[#252525] flex items-center justify-center text-white ml-1"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <List size={22} />}
              </button>
            </div>
          </header>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#181818] border-b border-white/10 px-8 py-6 flex flex-col gap-4 text-[#B8B8B8]">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#FF6B50]">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#FF6B50]">About</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#FF6B50]">Expertise</a>
              <a href="#work" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#FF6B50]">Works</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#FF6B50]">Journey</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#FF6B50]">Education</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 text-[#FF6B50] font-semibold">Contact</a>
            </div>
          )}

          {/* =====================================================================
              Hero Section (Asymmetrical 3-Part Composition Matching Reference)
              ===================================================================== */}
          <section id="hero" className="relative px-6 md:px-12 pt-12 pb-16 md:py-20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
              
              {/* LEFT: Oversized Bold Name Typography */}
              <div className="lg:col-span-4 flex flex-col justify-center z-10">
                <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-[0.9] text-white uppercase font-display select-none">
                  Shahista<br />
                  <span className="text-white">Inamdar</span>
                </h1>

                {/* Bottom Left Minimal Social Tags */}
                <div className="mt-8 flex items-center gap-4 text-xs font-mono text-[#7A7A7A] uppercase tracking-widest">
                  <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B50] transition-colors">
                    LI
                  </a>
                  <span>/</span>
                  <span className="text-[#B8B8B8]">TORONTO</span>
                  <span>/</span>
                  <span className="text-[#FF6B50]">CANADA</span>
                </div>
              </div>

              {/* CENTER: Large Professional Portrait */}
              <div className="lg:col-span-4 flex justify-center items-center relative z-20 my-6 lg:my-0">
                <div className="relative w-[280px] sm:w-[320px] md:w-[360px] max-w-full">
                  {/* Subtle Geometric Framing */}
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-b from-[#FF6B50]/20 to-transparent blur-lg opacity-40" />
                  
                  <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-[#252525]">
                    <img
                      src="/profile.jpg"
                      alt="Shahista Inamdar - Senior Developer"
                      className="w-full h-auto object-cover object-top filter brightness-[1.02] contrast-[1.05]"
                      style={{ maxHeight: '460px' }}
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: Positioning Block & Geometric Shapes */}
              <div className="lg:col-span-4 flex flex-col items-start z-10 pl-0 lg:pl-4">
                {/* Floating Geometric Elements (Dark Polygon + Aqua Circle from Reference) */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Rotated Dark Geometric Polygon */}
                  <div className="w-10 h-10 bg-[#262626] border border-white/10 transform rotate-45 rounded-sm animate-floating shadow-md" />
                  
                  {/* Vibrant Aqua Sphere from Reference */}
                  <div className="w-6 h-6 rounded-full bg-[#1DE9B6] animate-aqua-sphere shadow-aqua-glow" />
                </div>

                {/* Coral Accent Label */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B50]">
                    Senior Developer
                  </span>
                  <span className="w-8 h-[2px] bg-[#FF6B50]" />
                </div>

                {/* Main Pitch Headline */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug tracking-tight mb-4">
                  Based in Toronto, I'm developer and software engineer.
                </h2>

                {/* Concise Paragraph */}
                <p className="text-sm text-[#B8B8B8] leading-relaxed mb-6">
                  "Building dependable software, solving practical problems, and sharing the journey through technology and content."
                </p>

                {/* Contact Quick Info */}
                <div className="space-y-1.5 text-xs text-[#7A7A7A] mb-8 font-mono">
                  <div>
                    <span className="text-[#B8B8B8]">L :</span> Toronto, Ontario, Canada
                  </div>
                  <div>
                    <span className="text-[#B8B8B8]">E :</span> Available via LinkedIn / Contact Form
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#work"
                    className="px-6 py-3 rounded-md bg-[#FF6B50] hover:bg-[#FF856E] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-coral-glow flex items-center gap-2"
                  >
                    <span>View My Work</span>
                    <ArrowRight size={14} weight="bold" />
                  </a>

                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-md bg-[#252525] hover:bg-[#2F2F2F] text-[#B8B8B8] hover:text-white text-xs font-bold uppercase tracking-wider border border-white/10 transition-all flex items-center gap-2"
                  >
                    <LinkedinLogo size={15} weight="fill" className="text-[#FF6B50]" />
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================================
              About Section (2-Column Editorial Composition from Reference)
              ===================================================================== */}
          <section id="about" className="px-6 md:px-12 py-20 border-t border-white/5 bg-[#181818]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Coral Label + Statement + Big 10+ Number */}
              <div className="lg:col-span-6 pr-0 lg:pr-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B50]">
                    About Me
                  </span>
                  <span className="w-10 h-[2px] bg-[#FF6B50]" />
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-6">
                  Good engineering begins with understanding why a requirement exists.
                </h3>

                <p className="text-sm sm:text-base text-[#B8B8B8] leading-relaxed mb-6">
                  I am a Toronto-based Senior Developer with more than a decade of software development experience across India and Canada. My career has progressed from hands-on .NET development into senior software engineering positions.
                </p>

                <p className="text-sm sm:text-base text-[#B8B8B8] leading-relaxed mb-10">
                  My background spans requirements understanding, cross-functional Agile collaboration, developer-side testing, and smooth deployment to test environments.
                </p>

                {/* Big Experience Statistic in Coral (Matching Reference 30 Years) */}
                <div className="flex items-baseline gap-4 pt-6 border-t border-white/10">
                  <span className="text-6xl sm:text-7xl font-extrabold font-display text-[#FF6B50] leading-none">
                    10+
                  </span>
                  <div className="text-sm sm:text-base font-bold text-white uppercase tracking-wider leading-tight">
                    Years Of<br />
                    <span className="text-[#B8B8B8] font-normal">Software Engineering Experience</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Query & Discussion Statement + Direct Link with Arrow */}
              <div className="lg:col-span-6 bg-[#202020] p-8 sm:p-12 rounded-lg border border-white/5">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-3">
                  Any Type Of Opportunity<br />
                  & Discussion.
                </h3>

                <p className="text-sm font-medium text-[#FF6B50] mb-8">
                  Let's connect with me
                </p>

                <p className="text-sm text-[#B8B8B8] leading-relaxed mb-10">
                  Alongside building dependable enterprise applications, I create and share career content around software engineering and navigating the Canadian tech industry.
                </p>

                {/* Big Underlined Link with Coral Arrow */}
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 text-lg sm:text-xl md:text-2xl font-bold text-[#FF6B50] hover:text-[#FF856E] border-b-2 border-[#FF6B50] pb-1 transition-all"
                >
                  <span>shahista-inamdar-67606276</span>
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform text-[#FF6B50]" />
                </a>
              </div>
            </div>
          </section>

          {/* =====================================================================
              Selected Works / Projects Section (#work)
              ===================================================================== */}
          <section id="work" className="px-6 md:px-12 py-20 border-t border-white/5 bg-[#1C1C1C]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B50]">
                    Featured Work
                  </span>
                  <span className="w-8 h-[2px] bg-[#FF6B50]" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Selected Engineering Case Studies
                </h2>
              </div>
              <p className="text-xs font-mono text-[#7A7A7A] mt-2 md:mt-0 uppercase">
                Verified Career Delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Project Card 01 */}
              <div className="editorial-card p-8 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-display font-extrabold text-[#FF6B50] mb-4">
                    01
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1DE9B6] mb-1">
                    Aviation & Travel
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Airline Technology Platform
                  </h3>
                  <p className="text-sm text-[#B8B8B8] leading-relaxed mb-6">
                    Delivering core development initiatives in Canada, engineering scalable software components, and driving collaborative Agile sprints with cross-functional product teams.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#7A7A7A]">
                  <span>Senior Developer</span>
                  <span className="text-[#FF6B50] font-semibold">Air Tek Inc</span>
                </div>
              </div>

              {/* Project Card 02 */}
              <div className="editorial-card p-8 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-display font-extrabold text-[#FF6B50] mb-4">
                    02
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1DE9B6] mb-1">
                    Financial Technology
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Digital Mortgage Technology Platform
                  </h3>
                  <p className="text-sm text-[#B8B8B8] leading-relaxed mb-6">
                    Engineered enterprise mortgage application solutions in a high-scale environment, driving senior-level code delivery, team collaboration, and reliable execution.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#7A7A7A]">
                  <span>Senior Software Dev</span>
                  <span className="text-[#FF6B50] font-semibold">Ellie Mae / ICE</span>
                </div>
              </div>

              {/* Project Card 03 */}
              <div className="editorial-card p-8 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-display font-extrabold text-[#FF6B50] mb-4">
                    03
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1DE9B6] mb-1">
                    Global Loyalty Systems
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Travel & Loyalty Technology Platform
                  </h3>
                  <p className="text-sm text-[#B8B8B8] leading-relaxed mb-6">
                    Developed core platform features within global travel and customer loyalty systems under JP Morgan Chase division governance, ensuring service reliability and compliance.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#7A7A7A]">
                  <span>Software Developer</span>
                  <span className="text-[#FF6B50] font-semibold">Tavisca / cxLoyalty</span>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================================
              Career Journey (Timeline Section)
              ===================================================================== */}
          <section id="experience" className="px-6 md:px-12 py-20 border-t border-white/5 bg-[#181818]">
            <div className="max-w-3xl mb-14">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B50]">
                  Career Journey
                </span>
                <span className="w-8 h-[2px] bg-[#FF6B50]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Documented Employment History
              </h2>
            </div>

            <div className="space-y-6">
              {/* Job 1 */}
              <div className="editorial-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold font-mono text-[#FF6B50]">2022 — PRESENT</span>
                  <h3 className="text-xl font-bold text-white">Senior Developer</h3>
                  <h4 className="text-sm text-[#B8B8B8]">Air Tek Inc / Airline Startup • <span className="text-[#7A7A7A]">Toronto, Canada</span></h4>
                </div>
                <div className="text-xs text-[#1DE9B6] font-semibold px-3 py-1 bg-[#1DE9B6]/10 rounded border border-[#1DE9B6]/20 self-start md:self-auto">
                  Current Senior Role
                </div>
              </div>

              {/* Job 2 */}
              <div className="editorial-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold font-mono text-[#FF6B50]">2021 — 2022</span>
                  <h3 className="text-xl font-bold text-white">Senior Software Developer</h3>
                  <h4 className="text-sm text-[#B8B8B8]">Ellie Mae (ICE Mortgage Technology) • <span className="text-[#7A7A7A]">Pune, India</span></h4>
                </div>
                <div className="text-xs text-[#B8B8B8] font-mono">
                  Enterprise Systems
                </div>
              </div>

              {/* Job 3 */}
              <div className="editorial-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold font-mono text-[#FF6B50]">2019 — 2021</span>
                  <h3 className="text-xl font-bold text-white">Software Developer</h3>
                  <h4 className="text-sm text-[#B8B8B8]">Tavisca, a cxLoyalty Technology Platform (Division of JP Morgan Chase & Co.) • <span className="text-[#7A7A7A]">Pune, India</span></h4>
                </div>
                <div className="text-xs text-[#B8B8B8] font-mono">
                  Loyalty Platform
                </div>
              </div>

              {/* Job 4 */}
              <div className="editorial-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold font-mono text-[#FF6B50]">2015 — 2019</span>
                  <h3 className="text-xl font-bold text-white">Software Developer</h3>
                  <h4 className="text-sm text-[#B8B8B8]">Talent Anywhere • <span className="text-[#7A7A7A]">Pune, India</span></h4>
                </div>
                <div className="text-xs text-[#B8B8B8] font-mono">
                  Agile Delivery & QA
                </div>
              </div>

              {/* Job 5 */}
              <div className="editorial-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold font-mono text-[#FF6B50]">2014 — 2015</span>
                  <h3 className="text-xl font-bold text-white">Dot Net Developer</h3>
                  <h4 className="text-sm text-[#B8B8B8]">Sahir Projects • <span className="text-[#7A7A7A]">Pune, India</span></h4>
                </div>
                <div className="text-xs text-[#B8B8B8] font-mono">
                  .NET Engineering
                </div>
              </div>

              {/* Job 6 */}
              <div className="editorial-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold font-mono text-[#FF6B50]">2013</span>
                  <h3 className="text-xl font-bold text-white">Dotnet Developer</h3>
                  <h4 className="text-sm text-[#B8B8B8]">Systerix • <span className="text-[#7A7A7A]">Pune, India</span></h4>
                </div>
                <div className="text-xs text-[#B8B8B8] font-mono">
                  Foundational Role
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================================
              Tech Stack & Grouped Expertise Section
              ===================================================================== */}
          <section id="skills" className="px-6 md:px-12 py-20 border-t border-white/5 bg-[#1C1C1C]">
            <div className="max-w-3xl mb-14">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B50]">
                  Core Capabilities
                </span>
                <span className="w-8 h-[2px] bg-[#FF6B50]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Structured Technical Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="bg-[#222222] p-8 rounded-lg border border-white/5">
                <div className="text-xs font-bold font-mono text-[#FF6B50] mb-2">01 / ENGINEERING</div>
                <h3 className="text-xl font-bold text-white mb-4">Software & .NET</h3>
                <ul className="space-y-3 text-sm text-[#B8B8B8]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B50]" />
                    .NET Application Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B50]" />
                    Backend System Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B50]" />
                    Enterprise Platform Delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B50]" />
                    Database Integrations
                  </li>
                </ul>
              </div>

              {/* Category 2 */}
              <div className="bg-[#222222] p-8 rounded-lg border border-white/5">
                <div className="text-xs font-bold font-mono text-[#FF6B50] mb-2">02 / DELIVERY</div>
                <h3 className="text-xl font-bold text-white mb-4">Agile & Testing</h3>
                <ul className="space-y-3 text-sm text-[#B8B8B8]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DE9B6]" />
                    Agile Sprint Participation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DE9B6]" />
                    Requirement 'Why' Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DE9B6]" />
                    Developer-side Unit & Integration Testing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1DE9B6]" />
                    Test Environment Deployment
                  </li>
                </ul>
              </div>

              {/* Category 3 */}
              <div className="bg-[#222222] p-8 rounded-lg border border-white/5">
                <div className="text-xs font-bold font-mono text-[#FF6B50] mb-2">03 / COMMUNITY</div>
                <h3 className="text-xl font-bold text-white mb-4">Mentorship & Insights</h3>
                <ul className="space-y-3 text-sm text-[#B8B8B8]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B50]" />
                    Canadian Tech Interview Insights
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B50]" />
                    Developer Career Content Creation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B50]" />
                    Referral Guidance & Networking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B50]" />
                    1,000+ LinkedIn Developer Community
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* =====================================================================
              Education Section
              ===================================================================== */}
          <section id="education" className="px-6 md:px-12 py-20 border-t border-white/5 bg-[#181818]">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B50]">
                  Academic Background
                </span>
                <span className="w-8 h-[2px] bg-[#FF6B50]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Education & Credentials
              </h2>
            </div>

            <div className="editorial-card p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-[#1DE9B6]/15 text-[#1DE9B6] border border-[#1DE9B6]/30">
                  First Class Honors
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Bachelor of Engineering (BE) in Computer Science
                </h3>
                <h4 className="text-base text-[#B8B8B8]">
                  Shri Chankya Education Society’s Indira College of Engineering & Technology
                </h4>
                <div className="flex items-center gap-4 text-xs text-[#7A7A7A] font-mono pt-1">
                  <span>Pune, Maharashtra, India</span>
                  <span>•</span>
                  <span>2009 — 2013</span>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================================
              Contact Section (Editorial Call To Action)
              ===================================================================== */}
          <section id="contact" className="px-6 md:px-12 py-20 border-t border-white/5 bg-[#1C1C1C]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left CTA block */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B50]">
                      Get in Touch
                    </span>
                    <span className="w-8 h-[2px] bg-[#FF6B50]" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                    Have a project, opportunity or idea?<br />
                    <span className="text-[#FF6B50]">Let's talk.</span>
                  </h2>
                  <p className="text-sm text-[#B8B8B8] leading-relaxed mb-8">
                    Feel free to reach out directly via LinkedIn or send a message using the form.
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-[#FF6B50]" />
                      <span className="text-[#B8B8B8]">Toronto, Ontario, Canada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <LinkedinLogo size={18} className="text-[#FF6B50]" />
                      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF6B50] underline">
                        shahista-inamdar-67606276
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 text-xs text-[#7A7A7A] font-mono">
                  "DM For Referral In Canada"
                </div>
              </div>

              {/* Right Form */}
              <div className="lg:col-span-7 bg-[#222222] p-8 rounded-lg border border-white/5">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-[#B8B8B8] mb-1">
                      Your Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded bg-[#181818] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF6B50] focus:ring-1 focus:ring-[#FF6B50] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-[#B8B8B8] mb-1">
                      Your Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded bg-[#181818] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF6B50] focus:ring-1 focus:ring-[#FF6B50] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-subject" className="block text-xs font-bold uppercase tracking-wider text-[#B8B8B8] mb-1">
                      Subject
                    </label>
                    <input
                      id="form-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Engineering Opportunity / Referral"
                      className="w-full px-4 py-3 rounded bg-[#181818] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF6B50] focus:ring-1 focus:ring-[#FF6B50] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-[#B8B8B8] mb-1">
                      Message
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded bg-[#181818] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF6B50] focus:ring-1 focus:ring-[#FF6B50] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded bg-[#FF6B50] hover:bg-[#FF856E] text-white font-bold text-xs uppercase tracking-wider shadow-coral-glow transition-all flex items-center justify-center gap-2 disabled:opacity-50"
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
                  <div className="mt-4 p-3.5 rounded bg-[#1DE9B6]/10 border border-[#1DE9B6]/30 text-[#1DE9B6] text-xs flex items-center gap-2">
                    <CheckCircle size={18} weight="fill" />
                    <span>Message received! Shahista can also be reached on LinkedIn.</span>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* =====================================================================
              Footer Bar
              ===================================================================== */}
          <footer className="px-6 md:px-10 py-8 bg-[#141414] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7A7A]">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#FF6B50] rounded flex items-center justify-center font-display font-bold text-white text-xs">
                S.
              </div>
              <span className="text-[#B8B8B8] font-bold">Shahista Inamdar</span>
              <span>• Senior Developer • Toronto, Canada</span>
            </div>

            <div className="flex items-center gap-6">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B50] transition-colors">
                LinkedIn
              </a>
              <a href="#hero" className="hover:text-white transition-colors">
                Back to Top ↑
              </a>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
