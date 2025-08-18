// Updated skills data organized by tech stack layers
export interface SkillItem {
  name: string;
  icon?: string;
  proficiency: 'Expert' | 'Advanced' | 'Proficient' | 'Learning';
  description?: string;
}

export interface TechLayer {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  bgGradient: string;
  skills: SkillItem[];
  icon: string;
}

export const techStackLayers: TechLayer[] = [
  {
    id: 'applications',
    title: 'AI/ML Applications & Solutions',
    subtitle: 'What I Build',
    color: '#10b981', // emerald-500
    bgGradient: 'from-emerald-500/20 to-emerald-600/10',
    icon: '🎯',
    skills: [
      { name: 'RAG Systems', proficiency: 'Expert', description: 'Retrieval Augmented Generation' },
      { name: 'Agentic AI', proficiency: 'Expert', description: 'Multi-agent AI systems' },
      { name: 'LLM Orchestration', proficiency: 'Advanced', description: 'Multi-model workflows' },
      { name: 'Computer Vision', proficiency: 'Advanced', description: 'Object detection & segmentation' },
      { name: 'NLP Systems', proficiency: 'Expert', description: 'Text processing & analysis' },
      { name: 'Multimodal AI', proficiency: 'Advanced', description: 'Text, image, audio integration' },
      { name: 'Fine-tuning LLMs', proficiency: 'Advanced', description: 'Custom model training' },
      { name: 'Prompt Engineering', proficiency: 'Expert', description: 'Optimized AI interactions' }
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    subtitle: 'How I Build',
    color: '#3b82f6', // blue-500
    bgGradient: 'from-blue-500/20 to-blue-600/10',
    icon: '🧠',
    skills: [
      { name: 'PyTorch', proficiency: 'Expert', description: 'Deep learning framework' },
      { name: 'TensorFlow', proficiency: 'Advanced', description: 'ML platform' },
      { name: 'LangChain', proficiency: 'Expert', description: 'LLM application framework' },
      { name: 'LangGraph', proficiency: 'Advanced', description: 'Workflow orchestration' },
      { name: 'Hugging Face', proficiency: 'Expert', description: 'Pre-trained models' },
      { name: 'FastAPI', proficiency: 'Expert', description: 'Modern web framework' },
      { name: 'Django', proficiency: 'Advanced', description: 'Full-stack framework' },
      { name: 'CrewAI', proficiency: 'Advanced', description: 'Multi-agent framework' },
      { name: 'Scikit-learn', proficiency: 'Expert', description: 'Traditional ML' },
      { name: 'OpenCV', proficiency: 'Advanced', description: 'Computer vision' }
    ]
  },
  {
    id: 'languages',
    title: 'Programming Languages & Core',
    subtitle: 'Foundation Skills',
    color: '#8b5cf6', // violet-500
    bgGradient: 'from-violet-500/20 to-violet-600/10',
    icon: '💻',
    skills: [
      { name: 'Python', proficiency: 'Expert', description: 'Primary development language' },
      { name: 'SQL', proficiency: 'Expert', description: 'Database queries & optimization' },
      { name: 'C/C++', proficiency: 'Advanced', description: 'System programming' },
      { name: 'JavaScript', proficiency: 'Proficient', description: 'Web development' },
      { name: 'Bash/Shell', proficiency: 'Advanced', description: 'System automation' },
      { name: 'Data Structures & Algorithms', proficiency: 'Expert', description: 'Problem solving foundation' },
      { name: 'System Design', proficiency: 'Advanced', description: 'Scalable architecture' },
      { name: 'API Development', proficiency: 'Expert', description: 'RESTful services' }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Deployment',
    subtitle: 'Where I Deploy',
    color: '#f59e0b', // amber-500
    bgGradient: 'from-amber-500/20 to-amber-600/10',
    icon: '☁️',
    skills: [
      { name: 'AWS', proficiency: 'Advanced', description: 'EC2, Lambda, S3, Bedrock' },
      { name: 'Azure', proficiency: 'Advanced', description: 'Web Apps, Functions, OpenAI' },
      { name: 'GCP', proficiency: 'Proficient', description: 'Compute Engine, Cloud AI' },
      { name: 'Docker', proficiency: 'Advanced', description: 'Containerization' },
      { name: 'Git/GitHub', proficiency: 'Expert', description: 'Version control' },
      { name: 'CI/CD Pipelines', proficiency: 'Advanced', description: 'Automated deployment' },
      { name: 'Vector Databases', proficiency: 'Expert', description: 'Pinecone, Weaviate, Milvus' },
      { name: 'MongoDB', proficiency: 'Advanced', description: 'NoSQL database' },
      { name: 'PostgreSQL', proficiency: 'Advanced', description: 'Relational database' }
    ]
  }
];

export const skillStats = {
  totalSkills: techStackLayers.reduce((total, layer) => total + layer.skills.length, 0),
  expertSkills: techStackLayers.reduce((total, layer) => 
    total + layer.skills.filter(skill => skill.proficiency === 'Expert').length, 0),
  layersCount: techStackLayers.length,
  yearsExperience: '2+'
};