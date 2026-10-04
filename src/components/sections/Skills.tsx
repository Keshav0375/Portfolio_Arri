import { useState, useEffect, useRef } from 'react';
import { Bot, BrainCircuit, Gauge, Cloud, Code2, Layers, Database, LucideIcon } from 'lucide-react';

interface SkillGroup {
  title: string;
  tagline: string;
  icon: LucideIcon;
  accent: string;
  span?: string;
  skills: string[];
}

// Ordered for the lg 3-column bento: [2,1] [1,2] [1,1,1]
const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Agents',
    tagline: 'Multi-agent orchestration & tool use',
    icon: Bot,
    accent: '#7c3aed',
    span: 'lg:col-span-2',
    skills: ['Microsoft Agent Framework', 'OpenAI Agents SDK', 'Anthropic SDK', 'LangGraph', 'LangChain', 'MCP', 'Multi-Agent Systems', 'Tool Calling'],
  },
  {
    title: 'LLM & RAG',
    tagline: 'Retrieval, reasoning & evaluation',
    icon: BrainCircuit,
    accent: '#0ea5e9',
    skills: ['Azure OpenAI', 'Vertex AI', 'Azure AI Search', 'pgvector', 'RAG', 'ReAct', 'LLM Evaluation'],
  },
  {
    title: 'LLMOps',
    tagline: 'Gateways, routing & observability',
    icon: Gauge,
    accent: '#ec4899',
    skills: ['Kong AI Gateway', 'LiteLLM', 'LangFuse', 'OpenTelemetry', 'Datadog', 'Prompt Versioning', 'CI/CD Eval Gates'],
  },
  {
    title: 'Cloud & DevOps',
    tagline: 'Where it ships and how',
    icon: Cloud,
    accent: '#f59e0b',
    span: 'lg:col-span-2',
    skills: ['Azure', 'GCP', 'AWS', 'Kubernetes', 'Docker', 'Terraform', 'Helm', 'ArgoCD', 'GitHub Actions', 'HashiCorp Vault', 'Linux'],
  },
  {
    title: 'Languages',
    tagline: 'Daily drivers first',
    icon: Code2,
    accent: '#10b981',
    skills: ['Python', 'C#', 'TypeScript', 'SQL', 'Lua', 'JavaScript', 'Java', 'Bash'],
  },
  {
    title: 'Frameworks',
    tagline: 'APIs & services',
    icon: Layers,
    accent: '#6366f1',
    skills: ['FastAPI', 'ASP.NET Core', '.NET 8', 'Pydantic', 'React', 'Node.js', 'Django'],
  },
  {
    title: 'Databases',
    tagline: 'Relational, vector & cache',
    icon: Database,
    accent: '#14b8a6',
    span: 'md:col-span-2 lg:col-span-1',
    skills: ['PostgreSQL', 'Redis', 'SQLite', 'Cosmos DB', 'MongoDB', 'Snowflake'],
  },
];

const SkillCard = ({ group, index, visible }: { group: SkillGroup; index: number; visible: boolean }) => {
  const Icon = group.icon;
  const { accent } = group;

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6
        bg-white border-slate-200 shadow-sm
        dark:bg-[#161616] dark:border-white/10
        transition-all duration-500 ease-out hover:-translate-y-1
        ${group.span ?? ''}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{
        transitionDelay: visible ? `${index * 70}ms` : '0ms',
        ['--accent' as string]: accent,
      }}
    >
      {/* Accent glow + top rule, intensify on hover */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundColor: accent }}
      />
      <div
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-[0.25] transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: `linear-gradient(to right, ${accent}, ${accent}00)` }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl border opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ borderColor: `${accent}66`, boxShadow: `0 8px 32px -12px ${accent}55` }}
      />

      {/* Header */}
      <div className="relative flex items-start justify-between mb-5">
        <div className="flex items-center gap-3.5">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
            style={{ backgroundColor: `${accent}1a`, color: accent }}
          >
            <Icon size={22} strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">{group.title}</h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">{group.tagline}</p>
          </div>
        </div>
        <span className="font-mono text-xs text-slate-300 dark:text-white/20 select-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Skills */}
      <div className="relative flex flex-wrap gap-2">
        {group.skills.map(skill => (
          <span
            key={skill}
            className="skill-chip inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium cursor-default select-none
              border-slate-200 bg-slate-50 text-slate-700
              dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-200
              transition-colors duration-200"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
            {skill}
          </span>
        ))}
      </div>

      <div className="relative mt-auto pt-5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-gray-500">
          {group.skills.length} tools
        </span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const totalSkills = skillGroups.reduce((n, g) => n + g.skills.length, 0);

  return (
    <section id="skills" className="py-20 relative bg-white dark:bg-[#0f0f0f]" ref={sectionRef}>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/20 filter blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-sky-400/20 filter blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <div className={`mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div>
            <h2 className="section-title">Core Skills</h2>
            <p className="text-slate-500 dark:text-gray-400 mt-6 text-base">
              Technologies I work with in production
            </p>
          </div>
          <div className="flex gap-6 font-mono text-sm">
            <div>
              <div className="text-2xl font-bold text-primary">{totalSkills}</div>
              <div className="text-xs text-slate-400 dark:text-gray-500">technologies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{skillGroups.length}</div>
              <div className="text-xs text-slate-400 dark:text-gray-500">domains</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
