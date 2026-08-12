export type Project = {
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  visual: "automl" | "bim" | "cv";
  visuals?: ("automl" | "bim" | "cv")[];
  images?: string[];
};

export const portfolio = {
  name: "Quang Nguyen",
  role: "Full-Stack Developer",
  heroTitle: "I build full-stack products where software engineering meets AI.",
  heroText:
    "React and TypeScript on the frontend. Python and FastAPI on the backend. I focus on reliable, maintainable products that solve real problems.",
  location: "Clausthal-Zellerfeld, Germany",
  availability: "Open to Full-Stack internships and junior roles",
  email: "nhu.minh.quang.nguyen@gmail.com",
  github: "https://github.com/uangn",
  linkedin: "https://www.linkedin.com/in/quang-nguyen-17573b249/",
  about:
    "Computer Science student focused on full-stack engineering, AI-enabled applications, and clean software architecture. I enjoy turning complex workflows into practical products with strong UX, typed interfaces, and dependable APIs.",
  principles: [
    "Readable, maintainable code",
    "Clear frontend-backend communication",
    "Clean architecture and design patterns",
    "Self-documenting code and interfaces",
    "Test-driven development",
    "Scalable and modular systems",
    "Agile development and iterative improvement",
    "Pragmatic AI integration",
    "Production-minded engineering",
  ],
  projects: [
    {
      title: "No-Code ML Models Generator",
      subtitle: "Natural-language AutoML workflow",
      description:
        "A full-stack application where users upload a CSV, describe the prediction goal in natural language, and generate a trained machine-learning model.",
      impact:
        "Automates feature/target selection, preprocessing, model training, prediction and model export through a simple product interface.",
      tech: ["React", "TypeScript", "FastAPI", "Python", "scikit-learn"],
      featured: true,
      visual: "automl",
      visuals: ["automl"],
      images: ["/pimages/automl/1.png", "/pimages/automl/2.png"],
      github: "https://github.com/uangn/No-Code-ML-Models-generator",
    },
    {
      title: "AI-Powered BIM Assistant",
      subtitle: "LLM + IFC building model intelligence",
      description:
        "A natural-language assistant for querying IFC building models inside a Blender/Bonsai BIM workflow.",
      impact:
        "Combines LLM function calling, retrieval tools and IfcOpenShell to extract structured building information from complex BIM data.",
      tech: ["Python", "LLMs", "RAG", "IfcOpenShell", "Blender"],
      featured: true,
      visual: "bim",
      visuals: ["bim"],
      github: "#",
    },
    {
      title: "CV & Cover Letter Generator",
      subtitle: "Chrome extension for job applications",
      description:
        "A browser extension that reads job advertisements and generates tailored CV and cover-letter content from reusable profile data.",
      impact:
        "Connects React/TypeScript, a FastAPI backend, job-ad scraping and structured LLM output into one application workflow.",
      tech: [
        "React",
        "TypeScript",
        "FastAPI",
        "OpenAI API",
        "Chrome Extension",
      ],
      visual: "cv",
      visuals: ["cv", "automl"],
      github: "#",
    },
  ] as Project[],
  skills: {
    Frontend: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    Backend: ["Python", "FastAPI", "Node.js", "REST APIs", "SQL"],
    "AI / ML": ["LLMs", "RAG", "OpenAI API", "scikit-learn", "TensorFlow"],
    "Data / DevOps": ["MongoDB", "MySQL", "Docker", "Git"],
  },
  education: {
    degree: "B.Sc. Computer Science",
    university: "Technische Universität Clausthal",
    location: "Clausthal-Zellerfeld, Germany",
    progress: "174 / 180 ECTS completed",
    graduation: "Expected graduation: March 2027",
  },
};
