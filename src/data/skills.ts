export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'programming' | 'ml' | 'data' | 'database' | 'tools' | 'frameworks' | 'soft';
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 95, category: 'programming' },
  { name: 'C/C++', level: 85, category: 'programming' },
  { name: 'SQL', level: 90, category: 'programming' },
  { name: 'HTML', level: 80, category: 'programming' },
  { name: 'CSS', level: 75, category: 'programming' },
  
  // Machine Learning & AI
  { name: 'PyTorch', level: 90, category: 'ml' },
  { name: 'TensorFlow', level: 88, category: 'ml' },
  { name: 'Hugging Face', level: 92, category: 'ml' },
  { name: 'NLTK', level: 85, category: 'ml' },
  { name: 'spaCy', level: 85, category: 'ml' },
  { name: 'Scikit-learn', level: 90, category: 'ml' },
  { name: 'XGBoost', level: 85, category: 'ml' },
  { name: 'OpenCV', level: 88, category: 'ml' },
  { name: 'Detectron2', level: 80, category: 'ml' },
  { name: 'Langchain', level: 90, category: 'ml' },
  { name: 'Langraph', level: 85, category: 'ml' },
  { name: 'CrewAI', level: 82, category: 'ml' },
  { name: 'Agno', level: 80, category: 'ml' },
  { name: 'RAG Systems', level: 92, category: 'ml' },
  { name: 'Vector Search', level: 90, category: 'ml' },
  { name: 'Prompt Engineering', level: 88, category: 'ml' },
  { name: 'Fine-tuning LLMs', level: 85, category: 'ml' },
  { name: 'Multimodal AI', level: 83, category: 'ml' },
  
  // Data Science & Analysis
  { name: 'Data Structures & Algorithms', level: 88, category: 'data' },
  { name: 'A/B Testing', level: 85, category: 'data' },
  
  // Databases
  { name: 'MySQL', level: 90, category: 'database' },
  { name: 'PostgreSQL', level: 88, category: 'database' },
  { name: 'MongoDB', level: 85, category: 'database' },
  { name: 'Neo4j', level: 80, category: 'database' },
  { name: 'Pinecone', level: 85, category: 'database' },
  { name: 'Weaviate', level: 82, category: 'database' },
  { name: 'Milvus', level: 80, category: 'database' },
  { name: 'Snowflake', level: 85, category: 'database' },
  
  // Tools & Platforms
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'GitHub', level: 90, category: 'tools' },
  { name: 'AWS', level: 85, category: 'tools' },
  { name: 'Azure', level: 80, category: 'tools' },
  { name: 'GCP', level: 82, category: 'tools' },
  { name: 'CI/CD Pipelines', level: 85, category: 'tools' },
  { name: 'System Design', level: 88, category: 'tools' },
  { name: 'API Development', level: 90, category: 'tools' },
  
  // Frameworks
  { name: 'FastAPI', level: 88, category: 'frameworks' },
  { name: 'Django', level: 85, category: 'frameworks' },
  
  // Soft Skills
  { name: 'Problem Solving', level: 95, category: 'soft' },
  { name: 'Technical Leadership', level: 90, category: 'soft' },
  { name: 'Cross-functional Collaboration', level: 88, category: 'soft' },
  { name: 'Communication Skills', level: 90, category: 'soft' },
  { name: 'Project Management', level: 85, category: 'soft' },
  { name: 'Innovation Mindset', level: 90, category: 'soft' },
  { name: 'Agile Methodologies', level: 88, category: 'soft' }
];

export const skillCategories = [
  { id: 'programming', label: 'Programming Languages' },
  { id: 'ml', label: 'Machine Learning & AI' },
  { id: 'data', label: 'Data Science & Analysis' },
  { id: 'database', label: 'Databases' },
  { id: 'tools', label: 'Tools & Platforms' },
  { id: 'frameworks', label: 'Frameworks' },
  { id: 'soft', label: 'Soft Skills' }
];
