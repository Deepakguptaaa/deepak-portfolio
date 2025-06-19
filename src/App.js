import React from 'react';
import './App.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Hi, I'm Deepak Gupta</h1>
        <p>Python | Django | React | Celery | Redis</p>
      </header>

      <section className="about">
        <h2>🚀 About Me</h2>
        <p>
          I'm a frontend developer dedicated to building responsive, dynamic web interfaces using modern tools and frameworks like React, HTML, and CSS.
        </p>
      </section>

      <section className="skills">
        <h2>🛠 Skills</h2>
        <ul>
          <li>Python & Django</li>
          <li>REST APIs</li>
          <li>JWT & Auth</li>
          <li>Celery + Redis</li>
          <li>React.js</li>
        </ul>
      </section>

      <section className="projects">
        <h2>📁 Projects</h2>
        <ul>
          <li>Django Auth API</li>
          <li>Telegram Bot Integration</li>
          <li>Send Email on Register (Celery)</li>
        </ul>
      </section>

      <section className="contact">
        <h2>📬 Contact</h2>
        <p><FaEnvelope /> dg3765856@gmail.com</p>
        <p>
          <FaGithub /> <a href="https://github.com/deepakguptaaa" target="_blank" rel="noreferrer">
            github.com/deepakguptaaa
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;