interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  courses?: string[];
  achievements?: string[];
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Master of Applied Computing (Specialization: Artificial Intelligence)",
    institution: "University of Windsor",
    location: "Windsor, Ontario",
    period: "January 2025 - Present",
    description: "Pursuing advanced studies in Artificial Intelligence with focus on cutting-edge ML technologies, autonomous systems, and practical AI applications in industry settings.",
    courses: [
      "Advanced Machine Learning",
      "Deep Neural and Neural Networks", 
      "Advanced Software Engineering",
      "Advanced Computing Concepts",
      "Advanced System Programming",
      "Advanced Database Concepts",
      "Internet Applications & Distributed Concepts",
      "Networking and Data Security"
    ],
    achievements: [
      "CS Demo Day Participant at University of Windsor (April 2025)",
      "Developed multiple full-stack projects including EduMetrics",
      "Active participant in coding competitions and hackathons"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Guru Nanak Dev Engineering College",
    location: "Punjab, India", 
    period: "September 2020 - September 2024",
    description: "Comprehensive foundation in computer science and engineering with strong focus on programming, algorithms, and software development. Achieved SGPA of 8.13/10.",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems", 
      "Software Engineering",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning Fundamentals",
      "Web Technologies",
      "Object-Oriented Programming"
    ],
    achievements: [
      "SGPA: 8.13/10 - Strong academic performance",   
      "Actively engaged in AI research projects and industry collaboration",
      "Building advanced AI systems and contributing to open-source projects"   
      
    ]
  }
];