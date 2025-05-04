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
    role: "AI ML Engineer",
    company: "Slideoo AI",
    location: "Bengaluru, India",
    period: "February 2024 - February 2025",
    description: "Engineered enterprise-grade LLM infrastructure and RAG systems that transformed presentation creation workflows through multi-modal AI orchestration.",
    achievements: [
       "Architected multi-LLM pipeline (Claude, GPT) with FastAPI reducing PPT creation time by 90% (3min→30sec) for 20,000+ users while maintaining 99.9% uptime and decreasing latency by 25%",
       "Deployed RAG-powered document creation system and chatbot across Azure/AWS infrastructure (EC2, Lambda, CloudWatch), implementing A/B testing that improved user engagement by 40%",
       "Optimized vector search algorithms and prompt engineering techniques to enhance content generation quality, resulting in 35% higher user satisfaction scores"
    ],
    technologies: ["LangChain", "LangGraph", "FastAPI", "PyTorch", "AWS Lambda", "Azure", "Vector Databases", "RAG Systems", "Prompt Engineering", "CI/CD", "A/B Testing"]
  },
  {
    id: 2,
    role: "Data Scientist & NLP Researcher",
    company: "Sabudh Foundation",
    location: "Mohali, India",
    period: "July 2023 - January 2024",
    description: "Pioneered computer vision and NLP solutions for intelligent document processing, transforming unstructured data into actionable business intelligence.",
    achievements: [
      "Led IDP project integrating OCR, NLP and Detectron2 that automated document workflows, reducing manual data entry by 60% while improving processing speed by 50%",
      "Fine-tuned SOTA models for NER (+15% F1 score), summarization, and line segmentation using transfer learning and data augmentation, boosting overall accuracy and energy efficiency by 40%",
      "Implemented custom data preprocessing pipelines and model optimization techniques that reduced inference time by 30% while maintaining accuracy benchmarks"
    ],
    technologies: ["Detectron2", "PyTorch", "spaCy", "NLTK", "Transfer Learning", "OCR", "NER", "Data Augmentation", "Model Optimization", "Python", "Deep Learning"]
  }
];