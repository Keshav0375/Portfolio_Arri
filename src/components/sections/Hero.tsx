import React, { useEffect, useRef, useCallback } from 'react';
import { ArrowDown, Terminal, FileText } from 'lucide-react';
import { RESUME_VIEW_URL } from '../../data/links';

const phrases = [
  'AI Software Engineer',
  'Agentic Systems Builder',
  'LLMOps Engineer'
];

const Hero = React.memo(() => {
  const typedTextRef = useRef<HTMLSpanElement>(null);

  const initTypeWriter = useCallback(() => {
    if (!typedTextRef.current) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 120;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        if (typedTextRef.current) {
          typedTextRef.current.textContent = currentPhrase.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 60;
      } else {
        if (typedTextRef.current) {
          typedTextRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 120;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  useEffect(() => {
    const timer = setTimeout(initTypeWriter, 500);
    return () => clearTimeout(timer);
  }, [initTypeWriter]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 bg-white dark:bg-[#0f0f0f]">
      <div className="absolute inset-0 z-[-1] opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary/20 filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-dark-400/70 rounded-full px-4 py-2 backdrop-blur-sm text-sm">
              <Terminal size={16} className="text-primary" />
              <span className="text-slate-600 dark:text-gray-300">Open to full-time opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Hi, I'm <span className="neon-text">Keshav Arri</span>
            </h1>

            <div className="text-xl sm:text-2xl font-mono text-slate-600 dark:text-gray-300 h-8">
              <span>I'm a </span>
              <span ref={typedTextRef} className="neon-text"></span>
              <span className="animate-blink">|</span>
            </div>

            <p className="text-slate-500 dark:text-gray-400 text-lg max-w-lg">
              AI Software Engineer with 2 years building production agentic AI systems, multi-agent orchestration, RAG pipelines, and LLM gateway infrastructure in Python and C#/.NET across Azure, GCP, and AWS — cut LLM latency 77% and token cost 48%.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="neon-button">
                View My Work
              </a>
              <a href="#contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded transition-all duration-300">
                Contact Me
              </a>
              <a href={RESUME_VIEW_URL} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-6 py-2 rounded border border-slate-300 text-slate-700 hover:border-primary hover:text-primary dark:border-white/20 dark:text-gray-200 dark:hover:border-primary dark:hover:text-primary transition-all duration-300">
                <FileText size={18} />
                Resume
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-dark-400 dark:to-dark-300 rounded-lg overflow-hidden neon-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="code-window w-full p-6 font-mono text-sm text-slate-700 dark:text-gray-300">
                  <pre className="whitespace-pre">
                    <code>
                      <span className="text-accent">class</span> <span className="text-primary">KeshavArri</span>:<br/>
                      &nbsp;&nbsp;&nbsp;<span className="text-accent">def</span> <span className="text-cyan-500 dark:text-secondary">__init__</span>(self):<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="text-cyan-500 dark:text-secondary">role</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="text-green-600 dark:text-green-400">"AI Software Engineer"</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="text-cyan-500 dark:text-secondary">education</span>&nbsp;&nbsp;= <span className="text-green-600 dark:text-green-400">"M.A.C. AI @ UWindsor"</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="text-cyan-500 dark:text-secondary">current</span>&nbsp;&nbsp;&nbsp;&nbsp;= <span className="text-green-600 dark:text-green-400">"Developer @ Kinaxis"</span><br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.<span className="text-cyan-500 dark:text-secondary">skills</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= [<span className="text-green-600 dark:text-green-400">"Agents"</span>, <span className="text-green-600 dark:text-green-400">"RAG"</span>, <span className="text-green-600 dark:text-green-400">"LLMOps"</span>]<br/>
                      <br/>
                      &nbsp;&nbsp;&nbsp;<span className="text-accent">def</span> <span className="text-cyan-500 dark:text-secondary">build</span>(self):<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent">return</span> <span className="text-green-600 dark:text-green-400">"production AI systems"</span><br/>
                      <br/>
                      &nbsp;&nbsp;&nbsp;<span className="text-accent">def</span> <span className="text-cyan-500 dark:text-secondary">contact</span>(self):<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent">return</span> <span className="text-green-600 dark:text-green-400">"keshavk5655@gmail.com"</span><br/>
                    </code>
                  </pre>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-8 bg-slate-200 dark:bg-dark-400 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-slate-500 dark:text-gray-400">keshav_profile.py</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#education" className="text-slate-400 dark:text-gray-400 hover:text-primary transition-colors duration-300">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
