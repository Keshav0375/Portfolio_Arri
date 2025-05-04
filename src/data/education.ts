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
    degree: "Master of Applied Computing",
    institution: "University of Windsor",
    location: "Windsor, Ontario",
    period: "2025-2026",
    description: "Specialized in Machine Learning and Artificial Intelligence. Thesis on Deep Reinforcement Learning for Autonomous Systems.",
    courses: [
      "Advanced Machine Learning",
      "Deep Neural Networks",
      "Reinforcement Learning",
      "Computer Vision",
      "Natural Language Processing"
    ],
    achievements: [
      "Published 3 papers in top-tier AI conferences (NeurIPS, ICML)",
      "Recipient of the Computing Research Association Outstanding Researcher Award",
      "Teaching Assistant for Graduate Machine Learning course"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Guru Nanak Dev Engineering College",
    location: "Punjab, India",
    period: "2020-2024",
    description: "Focused on statistical methods and machine learning algorithms for big data analysis.",
    courses: [
      "Statistical Learning",
      "Applied Machine Learning",
      "Big Data Systems",
      "Algorithms for Data Science",
      "Visualization"
    ],
    achievements: [
      "Graduated with High Distinction",
      "Research Assistant in the MIT Data Science Lab",
      "Developed a novel clustering algorithm for high-dimensional data"
    ]
  }
];