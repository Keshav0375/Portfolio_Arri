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
    period: "Jan 2026 – Present",
    description: "Contributing to a production agentic AI platform used by enterprise supply chain teams — where 'moving fast' means the right tradeoffs, not shortcuts. Shipped infrastructure that unlocked deployment strategies the platform never had before.",
    achievements: [
      "Led cross-repo infrastructure refactor across 4 repos — replaced a single-environment deploy model with a multi-target architecture (Terraform, Helm, Jinja2), unlocking canary and blue-green deployments on GCP (GKE) and Azure (AKS), validated end-to-end through CI",
      "Built GitHub Actions CI/CD workflows with composite actions, cross-repo branch resolution, and Helm/Terraform deployment gates — integrating nightly integration tests for a live LLM platform",
      "Collaborating across Platform, LLMOps, and GenAI teams in Agile sprints on an enterprise RAG chatbot and natural-language worksheet query agent for supply chain decision-making"
    ],
    technologies: ["Python", "FastAPI", "Azure", "AWS", "GCP", "Terraform", "Helm", "Kubernetes", "GitHub Actions", "CI/CD", "LLMOps", "RAG"]
  },
  {
    id: 2,
    role: "AI Software Engineer",
    company: "Slideoo AI",
    location: "Bangalore, India",
    period: "Jan 2024 – Dec 2024",
    description: "Full ownership of the multimodal LLM pipeline powering an AI document creation engine. Cut latency by 77% and operational costs by 40% while scaling to 10x traffic — production AI at real scale.",
    achievements: [
      "Engineered production multimodal LLM pipeline using LangGraph, LangChain, OpenAI, and Anthropic across Azure and AWS — reduced response latency 77% (3+ min → 40s) and cut operational costs by 40%",
      "Built AI agent with tool calling and step-by-step reasoning for automated document creation, scaled to handle 10x traffic surge via microservices architecture while maintaining 99.5% uptime"
    ],
    technologies: ["LangChain", "LangGraph", "OpenAI SDK", "Anthropic SDK", "FastAPI", "Azure", "AWS", "Microservices", "RAG", "Prompt Engineering", "Python"]
  },
  {
    id: 3,
    role: "Data Scientist & NLP Research Intern",
    company: "Sabudh Foundation",
    location: "Mohali, India",
    period: "Jul 2023 – Dec 2023",
    description: "Early career deep-dive into applied ML — building real computer vision and NLP pipelines on messy, real-world data. Where I learned that production models are nothing like tutorial notebooks.",
    achievements: [
      "Led IDP project integrating OCR, NLP, and Detectron2 that automated document workflows — reduced manual data entry by 60% and improved processing speed by 50%",
      "Fine-tuned SOTA models for NER (+15% F1 score) and summarization using transfer learning, boosting accuracy and reducing inference time by 30%"
    ],
    technologies: ["Detectron2", "PyTorch", "spaCy", "NLTK", "Transfer Learning", "OCR", "NER", "Data Augmentation", "Python"]
  }
];
