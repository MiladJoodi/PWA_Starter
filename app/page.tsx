"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Dark mode toggle with proper functionality and sync
function ThemeToggle({ className = "", dark, setDark }: { className?: string, dark: boolean, setDark: (d: boolean) => void }) {
  const [mounted, setMounted] = useState(false);

  // Initial theme detection
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync html class with state
  useEffect(() => {
    if (!mounted) return;
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  const toggle = () => setDark(!dark);
  if (!mounted) return null;
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={`inline-flex items-center cursor-pointer justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 ${className}`}
    >
      {dark ? (
        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      )}
    </button>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dark, setDark] = useState(false);

  // Initial theme detection
  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Sync html class with state
  useEffect(() => {
    if (!mounted) return;
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      title: "App Router Architecture",
      description: "Built with Next.js 15 App Router for optimal performance and modern development experience",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Offline Support",
      description: "Service Worker enabled for seamless offline experience and lightning-fast loading",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="7.5,4.21 12,6.81 16.5,4.21" />
          <polyline points="7.5,19.79 7.5,14.6 3,12" />
          <polyline points="21,12 16.5,14.6 16.5,19.79" />
        </svg>
      ),
      title: "Installable",
      description: "Complete manifest file with icons for device installation across all platforms",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Progressive Enhancement",
      description: "Works on any device with progressive capabilities and adaptive performance",
      color: "from-orange-400 to-orange-600"
    },
  ];

  const stats = [
    { number: "99%", label: "Performance Score" },
    { number: "100%", label: "Accessibility" },
    { number: "95%", label: "Best Practices" },
    { number: "100%", label: "SEO Optimized" }
  ];

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "PWA & Modern Web Apps",
      description: "Building installable, offline-ready, and fast web applications with modern technologies."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "Designing beautiful, user-friendly, and accessible interfaces that users love to interact with."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Consulting & Mentoring",
      description: "Helping teams and individuals grow with modern web development best practices and strategies."
    },
  ];

  const timeline = [
    {
      year: "2017",
      title: "Started Web Development",
      description: "Began learning HTML, CSS, and JavaScript fundamentals.",
      color: "bg-blue-500"
    },
    {
      year: "2020",
      title: "First PWA Project",
      description: "Built and deployed my first Progressive Web App with offline capabilities.",
      color: "bg-emerald-500"
    },
    {
      year: "2023",
      title: "Open Source & Community",
      description: "Contributed to open source projects and shared knowledge with the developer community.",
      color: "bg-purple-500"
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-500"
      style={{
        background: `radial-gradient(ellipse at 60% 0%, rgba(99,102,241,0.08) 0%, transparent 70%),
                    radial-gradient(ellipse at 20% 100%, rgba(236,72,153,0.07) 0%, transparent 70%)`,
        backgroundColor: dark ? '#0f172a' : '#f8fafc',
      }}
    >
      {/* دایره‌های پراکنده و بسیار کم‌رنگ */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#64748b" />
            </pattern>
            <pattern id="dots-dark" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#334155" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" className="dark:hidden" />
          <rect width="100%" height="100%" fill="url(#dots-dark)" className="hidden dark:block" />
        </svg>
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 dark:bg-blue-800/40 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 right-24 w-80 h-80 bg-purple-200 dark:bg-purple-800/40 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-emerald-200 dark:bg-emerald-800/40 rounded-full opacity-20 blur-3xl -translate-x-1/2"></div>
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100, 116, 139, 0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      {/* Mouse follower */}
      <div 
        className="fixed w-4 h-4 bg-blue-400/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mounted ? 1 : 0})`
        }}
      ></div>

      {/* هدر اکشن‌ها */}
      <header className="w-full flex items-center justify-between gap-2 px-4 pt-4 z-10 relative dark:bg-slate-900 dark:border-b dark:border-slate-600">
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto sm:flex-wrap">
          <a 
            href="https://www.linkedin.com/in/joodi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 h-8 sm:h-auto rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-sm hover:shadow-md text-slate-700 dark:text-slate-300 font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
            LinkedIn
          </a>
          <a 
            href="https://github.com/MiladJoodi/PWA_Starter" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 h-8 sm:h-auto rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-sm hover:shadow-md text-slate-700 dark:text-slate-300 font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
            GitHub
          </a>
          <div style={{marginLeft: "15px"}} className="flex items-center">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=MiladJoodi&repo=PWA_Starter&type=star&count=true&size=large"
              scrolling="0"
              width="120"
              height="30"
              title="GitHub"
              style={{ border: "none", background: "transparent" }}
              className="sm:w-[170px] w-[120px]"
            ></iframe>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-0">
          <ThemeToggle dark={dark} setDark={setDark} />
        </div>
      </header>

      <div className="relative container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <section
          className={`text-center mb-24 transition-all duration-1000 transform ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center justify-center p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl shadow-lg mb-8 hover:shadow-xl transition-all duration-500 relative group border border-slate-200/50 dark:border-slate-700/50">
            <Image
              src="/icons/icon-192x192.png"
              alt="PWA App Icon"
              width={120}
              height={120}
              priority
              className="rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              PWA
            </div>
          </div>

          <div className="mb-4">
            <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase">by Joodi</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-8 leading-tight">
            Progressive
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Web App
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 dark:text-slate-100 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
            Experience the future of web applications with our cutting-edge PWA built on{" "}
            <span className="font-semibold text-slate-600 dark:text-white">
              Next.js 15
            </span>{" "}
            and{" "}
            <span className="font-semibold text-slate-600 dark:text-white">
              TypeScript
            </span>
            . Install it on any device and enjoy offline capabilities.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-slate-200/50 dark:border-slate-700/50 ${
                  mounted ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section
          className={`mb-24 transition-all duration-1000 delay-300 transform ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-default border border-slate-200/50 dark:border-slate-700/50 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="flex items-start space-x-6 relative z-10">
                  <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${feature.color} rounded-2xl text-white group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-purple-600 dark:from-white dark:to-purple-300 bg-clip-text text-transparent">
            What I Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 backdrop-blur-xl rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-emerald-600 dark:from-white dark:to-emerald-300 bg-clip-text text-transparent">
            My Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
              {timeline.map((item, i) => (
                <div key={i} className="relative flex items-start mb-12 last:mb-0">
                  <div className={`flex-shrink-0 w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                    {item.year}
                  </div>
                  <div className="ml-8 bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 flex-1">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-800 to-pink-600 dark:from-white dark:to-pink-300 bg-clip-text text-transparent">
            Testimonial
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-slate-200/50 dark:border-slate-700/50 text-center">
              <svg className="w-12 h-12 mx-auto mb-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
              <blockquote className="text-xl italic text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                "Joodi is a highly skilled developer with a great eye for design and detail. Working with him was a pleasure and the results exceeded our expectations!"
              </blockquote>
              <div className="text-slate-500 dark:text-slate-400 font-medium">
                — A Satisfied Client
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className={`text-center transition-all duration-1000 delay-500 transform ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-slate-200/50 dark:border-slate-700/50 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
                Ready to explore?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                Discover the power of modern web development and progressive web applications that deliver native-like experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://nextjs.org/docs/app/building-your-application/routing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 font-semibold text-lg hover:-translate-y-1 hover:scale-105"
                >
                  <span>Explore Next.js</span>
                  <svg
                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://github.com/MiladJoodi/PWA_Starter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-10 py-4 border-2 border-slate-300 dark:border-slate-600 rounded-2xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-500 font-semibold text-lg hover:-translate-y-1 hover:scale-105"
                >
                  GitHub Project
                  <svg
                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/joodi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-10 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-600 transition-all duration-500 font-semibold text-lg hover:-translate-y-1 hover:scale-105"
                >
                  LinkedIn
                  <svg
                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`text-center mt-20 transition-all duration-1000 delay-700 transform ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg border border-slate-200/50 dark:border-slate-700/50">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>by</span>
            <a 
              href="https://www.linkedin.com/in/joodi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Joodi
            </a>
            <span className="hidden sm:inline">| using Next.js, TypeScript, and Tailwind CSS</span>
          </div>
        </footer>
      </div>
    </div>
  );
}