import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Noise overlay */}
      <div className="fixed inset-0 noise"></div>

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <header className="border-b-4 border-zinc-800 p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            JOHN.DEV
          </h1>
        </header>

        {/* Main content */}
        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col items-center md:items-start md:flex-row gap-8 md:gap-12">
            {/* Profile Image - Moved to top on mobile */}
            <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] border-4 border-zinc-800 rounded-full overflow-hidden flex-shrink-0 md:order-last">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Left content */}
            <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">FULL-STACK</h2>
                <h2 className="text-3xl md:text-4xl font-bold">DEVELOPER &</h2>
                <h2 className="text-3xl md:text-4xl font-bold">DESIGNER_</h2>
              </div>

              <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                I build minimal, functional, and brutalist web experiences.
                Focused on React, TypeScript, and modern web technologies.
              </p>

              <div className="border-4 border-zinc-800 p-4 md:p-6 max-w-2xl mx-auto md:mx-0">
                <h3 className="text-lg md:text-xl font-bold mb-4">
                  SELECTED WORK
                </h3>
                <ul className="space-y-4 text-left">
                  <li>
                    <span className="font-bold">01/</span> Brutalist Blog
                    Platform
                  </li>
                  <li>
                    <span className="font-bold">02/</span> Minimal Task Manager
                  </li>
                  <li>
                    <span className="font-bold">03/</span> Typography System
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t-4 border-zinc-800 p-4 sm:p-6 mt-8 sm:mt-12">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-sm order-2 sm:order-1">© 2025 JOHN.DEV</p>
            <div className="flex gap-6 order-1 sm:order-2">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
