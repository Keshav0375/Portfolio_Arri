interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Intern Developer, Machine Learning",
    company: "Kinaxis",
    location: "Ottawa, Ontario, Canada",
    period: "2025 - Present",
    description: "Building ML-powered solutions within Kinaxis's supply chain intelligence platform, contributing to model development and production deployment pipelines.",
    achievements: [
      "Add your key achievement here — e.g. built X that improved Y by Z%",
      "Add your second key achievement here"
    ],
    technologies: ["Python", "Machine Learning", "Supply Chain AI", "ML Pipelines"]
  },
  {
    id: 2,
    role: "AI Software Engineer",
    company: "Slideoo AI",
    location: "Bengaluru, India",
    period: "January 2024 - December 2024",
    description: "Engineered enterprise-grade LLM infrastructure and RAG systems that transformed presentation creation workflows through multi-modal AI orchestration.",
    achievements: [
      "Architected multi-LLM pipeline (Claude, GPT) with FastAPI reducing PPT creation time by 90% — from 3 min to 30 sec — for 5,000+ users, maintaining 99.9% uptime",
      "Deployed RAG-powered chatbot across Azure/AWS infrastructure with A/B testing that improved user engagement by 40% and cut latency by 25%"
    ],
    technologies: ["LangChain", "LangGraph", "FastAPI", "PyTorch", "AWS Lambda", "Azure", "Vector Databases", "RAG", "Prompt Engineering"]
  },
  {
    id: 3,
    role: "Data Scientist & NLP Research Intern",
    company: "Sabudh Foundation",
    location: "Mohali, India",
    period: "July 2023 - December 2023",
    description: "Pioneered computer vision and NLP solutions for intelligent document processing, turning unstructured data into actionable business intelligence.",
    achievements: [
      "Led IDP project integrating OCR, NLP, and Detectron2 that automated document workflows, reducing manual data entry by 60% and improving processing speed by 50%",
      "Fine-tuned SOTA models for NER (+15% F1 score) and summarization using transfer learning, boosting accuracy and reducing inference time by 30%"
    ],
    technologies: ["Detectron2", "PyTorch", "spaCy", "NLTK", "Transfer Learning", "OCR", "NER", "Data Augmentation", "Python"]
  }
];
