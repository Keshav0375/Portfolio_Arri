import React, { useState, useEffect, useRef } from 'react';

const skillColumns = [
  {
    title: 'Languages & Frameworks',
    accent: '#7c3aed',
    accentLight: 'rgba(124,58,237,0.08)',
    skills: ['Python', 'C++', 'Bash', 'PyTorch', 'LangChain', 'LangGraph', 'FastAPI'],
  },
  {
    title: 'AI & Backend',
    accent: '#0ea5e9',
    accentLight: 'rgba(14,165,233,0.08)',
    skills: ['RAG Systems', 'Prompt Engineering', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    accent: '#f59e0b',
    accentLight: 'rgba(245,158,11,0.08)',
    skills: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
  },
];

const allSkillsFlat = skillColumns.flatMap(col =>
  col.skills.map(skill => ({ skill, accent: col.accent, accentLight: col.accentLight }))
);

const ALL_TAB = { title: 'All Skills', accent: '#7c3aed', accentLight: 'rgba(124,58,237,0.08)' };

const SkillBrick = ({
  skill,
  accent,
  accentLight,
  index,
  visible,
}: {
  skill: string;
  accent: string;
  accentLight: string;
  index: number;
  visible: boolean;
}) => (
  <div
    className={`group px-6 py-3.5 rounded-lg border border-slate-200 dark:border-white/10
      cursor-default select-none transition-all duration-300
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
    style={{
      transitionDelay: visible ? `${Math.min(index * 35, 500)}ms` : '0ms',
      transitionProperty: 'opacity, transform, background-color, border-left-color',
      borderLeftWidth: '3px',
      borderLeftColor: `${accent}55`,
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.backgroundColor = accentLight;
      el.style.borderLeftColor = accent;
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.backgroundColor = '';
      el.style.borderLeftColor = `${accent}55`;
    }}
  >
    <span className="text-base font-medium text-slate-700 dark:text-gray-200 tracking-wide whitespace-nowrap group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
      {skill}
    </span>
  </div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState(-1); // -1 = All Skills
  const [displayedTab, setDisplayedTab] = useState(-1);
  const [itemsVisible, setItemsVisible] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          setItemsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setItemsVisible(false);
    setTimeout(() => {
      setDisplayedTab(index);
      setActiveTab(index);
      setTimeout(() => setItemsVisible(true), 40);
    }, 180);
  };

  const displayedSkills: { skill: string; accent: string; accentLight: string }[] =
    displayedTab === -1
      ? allSkillsFlat
      : skillColumns[displayedTab].skills.map(skill => ({
          skill,
          accent: skillColumns[displayedTab].accent,
          accentLight: skillColumns[displayedTab].accentLight,
        }));

  const activeAccent =
    activeTab === -1 ? ALL_TAB.accent : skillColumns[activeTab].accent;

  return (
    <section id="skills" className="py-20 relative bg-white dark:bg-[#0f0f0f]" ref={sectionRef}>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/20 filter blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-sky-400/20 filter blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className={`mb-12 transition-all duration-500 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="section-title">Core Skills</h2>
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-base">
            Technologies I work with in production
          </p>
        </div>

        {/* Tab bar */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-500 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          {/* All Skills tab */}
          <button
            onClick={() => handleTabChange(-1)}
            className="px-5 py-2.5 rounded-full font-mono text-sm font-medium transition-all duration-250 focus:outline-none"
            style={
              activeTab === -1
                ? { backgroundColor: ALL_TAB.accent, color: '#fff', boxShadow: `0 0 16px ${ALL_TAB.accent}55` }
                : { border: `1.5px solid ${ALL_TAB.accent}44`, color: '' }
            }
          >
            <span className={activeTab !== -1 ? 'text-slate-500 dark:text-gray-400' : ''}>
              All Skills
            </span>
          </button>

          {skillColumns.map((col, i) => (
            <button
              key={col.title}
              onClick={() => handleTabChange(i)}
              className="px-5 py-2.5 rounded-full font-mono text-sm font-medium transition-all duration-250 focus:outline-none"
              style={
                activeTab === i
                  ? { backgroundColor: col.accent, color: '#fff', boxShadow: `0 0 16px ${col.accent}55` }
                  : { border: `1.5px solid ${col.accent}44` }
              }
            >
              <span className={activeTab !== i ? 'text-slate-500 dark:text-gray-400' : ''}>
                {col.title}
              </span>
            </button>
          ))}
        </div>

        {/* Thin accent rule */}
        <div
          className={`h-px w-full mb-8 transition-all duration-500 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: `linear-gradient(to right, ${activeAccent}66, transparent)`, transitionDelay: '180ms' }}
        />

        {/* Skills — horizontal flex wrap */}
        <div className="flex flex-wrap gap-2.5">
          {displayedSkills.map(({ skill, accent, accentLight }, i) => (
            <SkillBrick
              key={`${displayedTab}-${skill}`}
              skill={skill}
              accent={accent}
              accentLight={accentLight}
              index={i}
              visible={itemsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
