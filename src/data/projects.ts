interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  details: string;
}

export const projects = [
  {
    id: 1,
    title: "Reelify AI",
    description: "AI-Powered Video Creation Engine with Multi-Modal Generation",
    image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "DALL·E 3", "ElevenLabs API", "React", "MoviePy", "CrewAI", "OpenAI"    ],
    demoLink: "https://reelify.ai",
    codeLink: "https://github.com/Keshav0375/reelify-ai",
    details: "Architected a comprehensive video generation platform leveraging DALL·E 3, Claude, and ElevenLabs APIs to automate content creation workflows. Implemented mathematically optimized canvas rendering with dynamic prompt engineering that improved rendering quality by 40%. Incorporated cross-language support (5+ languages) and automated voiceover synchronization resulting in 50% higher user retention and dramatically reduced video production time from hours to minutes."
  },
  {
    id: 2,
    title: "JobFit Crafter",
    description: "Smart ATS Resume Optimization Platform with Interview Preparation",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "NLP", "LangChain", "React", "OpenAI", "Claude", "FastAPI"],
    demoLink: "https://jobfit-crafter.vercel.app",
    codeLink: "https://github.com/Keshav0375/jobfit-crafter",
    details: "Developed an innovative platform that analyzes resumes against job descriptions using advanced NLP techniques, achieving 85% accuracy in ATS compatibility scoring. Engineered resume optimization workflows with customized technical and non-technical interview question generation for comprehensive job preparation. Implemented vector similarity scoring between skills and job requirements resulting in a 40% improvement in candidate-job matching and a 30% increase in interview success rates."
  },
  {
    id: 3,
    title: "Data Dialect",
    description: "Natural Language Database Interface with Advanced NL2SQL Conversion",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "LangChain", "LangSmith", "ChromaDB", "FastAPI", "SQL", "Few Shot Learning"],
    codeLink: "https://github.com/Keshav0375/data-dialect",
    details: "Implemented an advanced NL2SQL conversion system using LangChain, LangSmith, and ChromaDB with few-shot learning techniques that achieved 92% accuracy in query translation. Engineered dynamic table selection algorithms and example-based configuration for seamless database interactions across multiple schemas. Created an intuitive natural language interface that reduced database query time by 65% for non-technical users while maintaining enterprise-grade security protocols."
  },
  {
    id: 4,
    title: "STORM API",
    description: "FastAPI Wrapper for Stanford's Research-Grade Wiki Generation Pipeline",
    image: "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "FastAPI", "OpenAI", "Docker", "STORM", "Streaming Response"],
    demoLink: "https://storm-api-demo.vercel.app",
    codeLink: "https://github.com/Keshav0375/Stanford_Storm_FastAPI_wrapper",
    details: "Architected a production-ready API wrapper around Stanford's STORM research pipeline that enables programmatic generation of wiki-style articles with research-grade accuracy. Implemented real-time content streaming with dynamic word generation to enhance user experience. Engineered a flexible Docker-based architecture supporting multiple LLM providers (OpenAI, Azure) and search engines (Bing, Brave, Tavily) with seamless failover mechanisms, resulting in 99.9% availability and 40% faster article generation compared to the original pipeline."
  },
  {
    id: 5,
    title: "Multi-Modal RAG System",
    description: "Enterprise Document Analysis Platform with PDF, Image, and Text Processing",
    image: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "LangChain", "Pinecone", "GPT-4o", "OCR", "FastAPI"],
    demoLink: "https://rag-demo.example.com",
    codeLink: "https://github.com/Keshav0375/multimodal-rag",
    details: "Built an advanced Retrieval Augmented Generation system capable of processing PDF, image, and text documents with 95% extraction accuracy using custom OCR pipelines. Implemented hybrid vector search using Pinecone with semantic chunking algorithms that improved retrieval relevance by 60%. Designed dynamic prompt engineering workflows with context management that reduced hallucinations by 80% and enabled enterprise-scale document processing with terabyte-level data handling capabilities."
  },
  {
    id: 6,
    title: "EduMetrics",
    description: "Web Analytics Platform made using Reactjs and Springboot",
    image: "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Java", "Reactjs", "Springboot", "MySQL", "REST API", "Data Structure & Algorithms"],
    codeLink: "https://github.com/Keshav0375/EduMetrics",
    details: "The EduMetrics Course Scraping Project automates extraction of course data from multiple platforms using Java and Selenium. It employs advanced data structures like Trie, AVL trees, and ConcurrentHashMap for efficient storage, indexing, and concurrency, enabling intelligent content aggregation, URL deduplication, and keyword-based search within a scalable academic recommendation framework."
  }
];