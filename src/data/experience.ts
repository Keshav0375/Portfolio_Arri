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
    role: "Developer, Workflow Intelligence & AI Automation",
    company: "Kinaxis — Internship",
    location: "Ottawa, Ontario, Canada",
    period: "Aug 2026 – Present",
    description: "Building multi-agent SDLC automation for engineering teams — turning Jira epics into research, plans, code, and tests. Focused on the unglamorous parts that decide whether agents survive production: routing, context limits, cost, and gateway guardrails.",
    achievements: [
      "Architected a multi-agent SDLC automation system turning Jira epics into research, plans, code, tracepoints, and Playwright tests via GitHub, Bitbucket, Atlassian, and Microsoft MCP integrations — adopted team-wide",
      "Designed tiered LLM routing that delegates low-reasoning subtasks to cheaper sub-agent models with self-healing orchestration loops and shared team skills, cutting token cost by 48% per ticket at equal task success",
      "Built rolling LLM conversation compaction for Microsoft Agent Framework agents in C#/.NET, replacing 100-message truncation with summarization triggered past 120K tokens — bounding context while retaining history in unbounded sessions",
      "Extended Kong AI Gateway with custom routes and Lua plugins: an isolated route exempting 100 KB+ compaction calls from a 32 KB prompt-guard limit with user-traffic guards, plus a per-user token metrics plugin"
    ],
    technologies: ["C#", ".NET 8", "Microsoft Agent Framework", "MCP", "Kong AI Gateway", "Lua", "Playwright", "Multi-Agent Systems", "LLM Routing", "Python"]
  },
  {
    id: 2,
    role: "Developer, Machine Learning",
    company: "Kinaxis — Co-op",
    location: "Ottawa, Ontario, Canada",
    period: "Jan 2026 – Aug 2026",
    description: "Platform and LLMOps work on a production agentic AI platform used by enterprise supply chain teams — debugging pipelines across CI/CD, Kubernetes, and IAM, and hardening the gateway and RAG agents that sit on top.",
    achievements: [
      "Root-caused a GCP Cloud SQL backup pipeline with zero successful exports in 21 runs across GitHub Actions CI/CD, Kubernetes, ArgoCD, and IAM — cut failure detection from 30 min to ~15s and codified the fix in Terraform",
      "Implemented zero-downtime credential rotation for a multi-tenant Kong Konnect gateway using dual-write grace periods, Event Grid, HashiCorp Vault, and OIDC authentication, keeping tenant traffic live during key rollovers",
      "Replaced a costly external MCP vendor dependency with a self-hosted MCP test server and Python/pytest harness — added 5 OAuth2 integration tests and removed 800+ lines of fixtures, cutting vendor cost and CI flakiness",
      "Decommissioned a retired content source from 3 LLM RAG agents on Azure AI Search and GCP Vertex AI, removing ETL loaders and Helm/ArgoCD templates with regression guards on remaining retrieval"
    ],
    technologies: ["Python", "pytest", "GCP", "Azure", "Kubernetes", "ArgoCD", "Terraform", "Helm", "GitHub Actions", "Kong Konnect", "HashiCorp Vault", "Azure AI Search", "Vertex AI", "RAG"]
  },
  {
    id: 3,
    role: "Software Engineer, AI Backend Technologies",
    company: "Slideoo AI",
    location: "Remote",
    period: "Jan 2024 – Dec 2024",
    description: "Owned the AI document-generation backend end to end — agent orchestration, LLM tool calling, and the multimodal pipeline behind PowerPoint generation. Production AI at real scale, with real cloud bills.",
    achievements: [
      "Owned the end-to-end architecture of Slideoo's AI document-generation backend with agent orchestration, LLM tool calling, and reasoning on Azure and AWS — scaling to 10x traffic and 2,000+ users while cutting cloud spend 35%",
      "Rebuilt the multimodal LLM pipeline for PowerPoint generation by profiling bottlenecks and re-engineering prompt orchestration — cut generation latency 77% (3+ min → 40s), directly lifting subscription growth 43%",
      "Benchmarked competing LLM candidates for production by analyzing evaluation results and datasets across generation, surfacing quality regressions early and driving data-backed prompt-tuning decisions as traffic scaled",
      "Led a team of interns and partnered with company leadership to shape the product roadmap, driving sprint planning, reviews, and technical mentorship to ship features from prototype to production"
    ],
    technologies: ["Python", "FastAPI", "LangGraph", "LangChain", "OpenAI SDK", "Anthropic SDK", "Azure", "AWS", "LLM Evaluation", "Tool Calling", "Multimodal LLMs"]
  },
  {
    id: 4,
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
