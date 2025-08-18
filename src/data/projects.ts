// Premium projects data with enhanced metadata
export interface Project {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  techStack: string[];
  category: 'AI/ML' | 'Full-Stack' | 'Systems' | 'Tools';
  status: 'Live' | 'Development' | 'Completed';
  impact?: string;
  metrics?: string;
  demoLink?: string;
  codeLink?: string;
  featured?: boolean;
  gradient: string;
  accentColor: string;
  iconEmoji: string;
  complexity: 'Advanced' | 'Expert' | 'Professional';
  year: string;
}

export const projects: Project[] = [
  
  {
    id: 'data-dialect',
    name: 'Data Dialect',
    description: 'Natural Language Database Interface with Advanced NL2SQL Conversion. Implemented an advanced NL2SQL conversion system using LangChain, LangSmith, and ChromaDB.',
    shortDescription: 'Talk to any database using natural language queries',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techStack: ['Python', 'LangChain', 'LangSmith', 'ChromaDB', 'FastAPI', 'SQL', 'Few Shot Learning'],
    category: 'AI/ML',
    status: 'Completed',
    impact: '65% faster database queries',
    metrics: '92% query accuracy • Enterprise-grade security',
    codeLink: 'https://github.com/Keshav0375/data-dialect',
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    accentColor: '#3b82f6',
    iconEmoji: '🗃️',
    complexity: 'Expert',
    year: '2024'
  },
  {
    id: 'storm-api',
    name: 'Stanford STORM API Wrapper',
    description: 'FastAPI Wrapper for Stanford\'s Research-Grade Wiki Generation Pipeline. Architected a production-ready API wrapper around Stanford\'s STORM research pipeline.',
    shortDescription: 'Production-ready API for research-grade wiki article generation',
    image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techStack: ['Python', 'FastAPI', 'OpenAI', 'Docker', 'STORM', 'Streaming Response'],
    category: 'AI/ML',
    status: 'Live',
    impact: '40% faster article generation',
    metrics: '99.9% availability • Real-time streaming',
    demoLink: 'https://storm-api-demo.vercel.app',
    codeLink: 'https://github.com/Keshav0375/Stanford_Storm_FastAPI_wrapper',
    gradient: 'from-orange-600 via-red-600 to-pink-600',
    accentColor: '#f59e0b',
    iconEmoji: '📚',
    complexity: 'Professional',
    year: '2024'
  },
  {
    id: 'edumetrics',
    name: 'EduMetrics',
    description: 'Web Analytics Platform built with React.js and Spring Boot. Automates extraction of course data from multiple platforms using Java and Selenium with advanced data structures.',
    shortDescription: 'Course discovery platform with intelligent recommendations',
    image: 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techStack: ['Java', 'React.js', 'Spring Boot', 'MySQL', 'REST API', 'Data Structures & Algorithms'],
    category: 'Full-Stack',
    status: 'Completed',
    impact: 'Intelligent content aggregation',
    metrics: 'Multi-platform scraping • Advanced indexing',
    codeLink: 'https://github.com/Keshav0375/EduMetrics',
    gradient: 'from-green-600 via-emerald-600 to-teal-600',
    accentColor: '#059669',
    iconEmoji: '🎓',
    complexity: 'Advanced',
    year: '2023'
  },
  {
    id: 'distributed-file-system',
    name: 'Distributed File System',
    description: 'Advanced distributed file system implementation using socket programming in C/C++. Built with fault tolerance, replication, and efficient data distribution mechanisms.',
    shortDescription: 'High-performance distributed storage with socket programming',
    image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techStack: ['C/C++', 'Socket Programming', 'Linux', 'Distributed Systems', 'Network Programming'],
    category: 'Systems',
    status: 'Completed',
    impact: 'Fault-tolerant architecture',
    metrics: 'Multi-node replication • High availability',
    codeLink: 'https://github.com/Keshav0375/distributed-fs',
    gradient: 'from-gray-600 via-slate-600 to-zinc-600',
    accentColor: '#6b7280',
    iconEmoji: '🖥️',
    complexity: 'Expert',
    year: '2023'
  },
  {
    id: 'walmart-prediction',
    name: 'Walmart Hierarchical Prediction',
    description: 'Advanced machine learning model for hierarchical sales forecasting using deep learning techniques. Implemented multi-level prediction with ensemble methods.',
    shortDescription: 'ML-powered sales forecasting with hierarchical prediction models',
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techStack: ['Python', 'PyTorch', 'Scikit-learn', 'Pandas', 'Time Series', 'Deep Learning'],
    category: 'AI/ML',
    status: 'Completed',
    impact: 'Improved forecast accuracy',
    metrics: '15% better predictions • Multi-level hierarchy',
    codeLink: 'https://github.com/Keshav0375/walmart-forecasting',
    gradient: 'from-yellow-600 via-amber-600 to-orange-600',
    accentColor: '#f59e0b',
    iconEmoji: '📊',
    complexity: 'Advanced',
    year: '2023'
  },
  {
    id: 'agentic-iq',
    name: 'AgenticIQ: AI Brain Buddy',
    description: 'Personal AI-powered assistant that learns your patterns and preferences. Built with advanced agentic AI capabilities for personalized task management and decision support.',
    shortDescription: 'Your personal AI-powered brain buddy for enhanced productivity',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techStack: ['Python', 'LangGraph', 'Vector DB', 'OpenAI', 'FastAPI', 'React', 'Agentic AI'],
    category: 'AI/ML',
    status: 'Development',
    impact: 'Personalized AI assistance',
    metrics: 'Multi-agent workflows • Learning capabilities',
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
    accentColor: '#8b5cf6',
    iconEmoji: '🧠',
    complexity: 'Expert',
    year: '2024'
  },{
    id: 'reelify-ai',
    name: 'Reelify AI',
    description: 'AI-Powered Video Creation Engine with Multi-Modal Generation. Architected a comprehensive video generation platform leveraging DALL·E 3, Claude, and ElevenLabs APIs to automate content creation workflows.',
    shortDescription: 'AI-powered video creation that transforms text to professional videos',
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techStack: ['Python', 'DALL·E 3', 'ElevenLabs API', 'React', 'MoviePy', 'CrewAI', 'OpenAI'],
    category: 'AI/ML',
    status: 'Live',
    impact: '50% higher user retention',
    metrics: '20,000+ users • 90% time reduction',
    demoLink: 'https://reelify.ai',
    codeLink: 'https://github.com/Keshav0375/reelify-ai',
    featured: true,
    gradient: 'from-purple-600 via-pink-600 to-blue-600',
    accentColor: '#8b5cf6',
    iconEmoji: '🎬',
    complexity: 'Expert',
    year: '2024'
  },
  {
    id: 'jobfit-crafter',
    name: 'JobFIT-Crafter',
    description: 'Smart ATS Resume Optimization Platform with Interview Preparation. Developed an innovative platform that analyzes resumes against job descriptions using advanced NLP techniques.',
    shortDescription: 'AI-powered resume optimization and interview preparation platform',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techStack: ['Python', 'NLP', 'LangChain', 'React', 'OpenAI', 'Claude', 'FastAPI'],
    category: 'AI/ML',
    status: 'Live',
    impact: '40% improvement in job matching',
    metrics: '8,000+ resumes optimized • 85% ATS compatibility',
    demoLink: 'https://jobfit-crafter.vercel.app',
    codeLink: 'https://github.com/Keshav0375/jobfit-crafter',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    accentColor: '#10b981',
    iconEmoji: '📄',
    complexity: 'Advanced',
    year: '2024'
  },
];

export const projectStats = {
  totalProjects: "10+",
  liveProjects: "5+",
  categories: Array.from(new Set(projects.map(p => p.category))),
  techCount: Array.from(new Set(projects.flatMap(p => p.techStack))).length
};