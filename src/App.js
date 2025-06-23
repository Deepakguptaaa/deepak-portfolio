import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-white text-gray-800 px-6 py-10 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <span className="text-blue-600">Deepak 👋</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            I'm a passionate <strong>Frontend Developer</strong> who enjoys turning ideas into beautiful, functional user interfaces using React, Tailwind CSS, and modern web tech.
          </p>
        </header>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🚀 Projects</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-500">Django Assignment</h3>
            <p className="text-gray-600 mb-2">
              A full-featured Django app with user auth, Celery tasks, Telegram bot, and Redis integration.
            </p>
            <a href="https://github.com/deepakguptaaa" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on GitHub</a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-500">Portfolio Website</h3>
            <p className="text-gray-600 mb-2">
              My personal portfolio built with React and Tailwind CSS, showcasing projects and skills.
            </p>
            <a href="https://deepak-portfolio-lac.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Live Demo</a>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">🛠️ Skills</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-gray-200 px-3 py-1 rounded-full">HTML</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">CSS</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">JavaScript</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">React</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Tailwind CSS</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">Git</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">GitHub</span>
          </div>
        </section>

        {/* Connect */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">📬 Connect with Me</h2>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="https://github.com/deepakgupta" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/deepak-gupta-123456789" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
              <FaLinkedin />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-sm text-gray-500">
          © 2025 Deepak Gupta. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
