"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      color: "from-blue-500 to-cyan-500"
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
      color: "from-purple-500 to-pink-500"
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
      color: "from-emerald-500 to-teal-500"
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
      color: "from-orange-500 to-red-500"
    },
  ];

  const stats = [
    { number: "99%", label: "Performance Score" },
    { number: "100%", label: "Accessibility" },
    { number: "95%", label: "Best Practices" },
    { number: "100%", label: "SEO Optimized" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="fixed w-6 h-6 bg-blue-500/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mounted ? 1 : 0})`
        }}
      ></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100, 116, 139, 0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 max-w-6xl">
        {/* Header Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 transform ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl mb-8 hover:shadow-3xl transition-all duration-500 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/icons/icon-192x192.png"
              alt="PWA App Icon"
              width={120}
              height={120}
              priority
              className="rounded-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
              PWA
            </div>
          </div>
          {/* Joodi brand subtle */}
          <div className="mb-2">
            <span className="text-sm text-blue-500 dark:text-blue-300 font-semibold tracking-widest">by Joodi</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-600 dark:from-white dark:via-blue-200 dark:to-indigo-300 bg-clip-text text-transparent mb-8 leading-tight tracking-tight">
            Progressive
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent">
              Web App
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
            Experience the future of web applications with our cutting-edge PWA built on{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Next.js 15
            </span>{" "}
            and{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              TypeScript
            </span>
            . Install it on any device and enjoy offline capabilities.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  mounted ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div
          className={`grid md:grid-cols-2 gap-8 mb-20 transition-all duration-1000 delay-300 transform ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default border border-white/20 dark:border-slate-700/20 relative overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="flex items-start space-x-6 relative z-10">
                <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${feature.color} rounded-2xl text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-500 transform ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ready to explore?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-light">
                Discover the power of modern web development and progressive web applications that deliver native-like experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://nextjs.org/docs/app/building-your-application/routing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 font-semibold text-lg hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">Explore Next.js</span>
                  <svg
                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://github.com/MiladJoodi/PWA_Starter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-10 py-4 border-2 border-slate-300 dark:border-slate-600 rounded-2xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-500 font-semibold text-lg hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
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
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/joodi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-10 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-700 dark:hover:border-blue-300 transition-all duration-500 font-semibold text-lg hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
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
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-700 transform ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>by</span>
            <a href="https://www.linkedin.com/in/joodi" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 dark:text-blue-400 hover:underline">Joodi</a>
            <span className="hidden sm:inline">| using Next.js, TypeScript, and Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
}