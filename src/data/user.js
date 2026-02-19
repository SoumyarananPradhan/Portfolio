// src/data/user.js

export const userData = {
  // 1. Personal Details
  name: "Soumyaranjan Pradhan",
  role: "Python Full Stack Developer | AI & ML Enthusiast",
  heroTagline: "Crafting seamless digital experiences from backend logic to frontend magic.",
  summary: "I'm an MCA graduate from KIIT University and a passionate Python Full Stack Developer who enjoys building scalable web applications and AI-powered solutions. I focus on turning ideas into user-friendly and efficient digital products using technologies like Django, React, Redux, and REST APIs.",
  resumeUrl: "/Soumyaranjan_Pradhan_FullStack_Resume.pdf", 
  
  // 2. Social Links
  socials: {
    linkedin: "https://www.linkedin.com/in/soumyaranjan-pradhan-/", 
    github: "https://github.com/SoumyarananPradhan",
    email: "mailto:soumyaranjanaman54@gmail.com",
    instagram: "https://www.instagram.com/_im._.aman_/?hl=en"
  },

  // 3. Skills List (Updated from Resume)
  skills: [
    "Python", "Django", "RESTAPI", "React.js", "Redux Toolkit", "JavaScript (ES6+)", 
    "PostgreSQL", "MySQL", "MongoDB", "AWS (S3, EC2)", "Docker", "Git/GitHub", "Tailwind CSS"
  ],

  // Certifications
  certifications: [
    {
      title: "Python Complete Course and Flask Framework",
      issuer: "Udemy",
      year: "2024" 
    },
    {
      title: "Brain Computer Interface with Deep Learning",
      issuer: "Udemy",
      year: "2024"
    },
    {
      title: "HTML Essentials",
      issuer: "Udemy",
      year: "2023"
    }
  ],

  // 4. Projects
  projects: [
    {
      title: "GenZWay",
      description: "A production-ready e-commerce platform featuring secure JWT authentication, a persistent Redux shopping cart, and a decoupled architecture with Cloudinary image optimization.",
      techStack: ["Django REST Framework", "React.js", "Redux Toolkit", "PostgreSQL", "Cloudinary", "Render", "Netlify"],
      github: "https://github.com/SoumyarananPradhan/genzway-ecommerce",
      demo: "https://genzway-ecommerce.vercel.app", 
    },
    {
      title: "VellaVision",
      description: "A Full Stack AI-powered video sharing platform. Features secure video uploads, channel management, and auto-generated thumbnails using Cloudinary and Docker.",
      techStack: ["Django 6.0+", "PostgreSQL", "Cloudinary", "Docker", "Railway", "HTML5/CSS3"],
      github: "https://github.com/SoumyarananPradhan/VellaVision",
      demo: "https://vellavision-production-b04d.up.railway.app/", 
    },
    {
      title: "Face Recognition System",
      description: "A biometric security system capable of detecting and recognizing faces in real-time with 95%+ accuracy using OpenCV and Deep Learning models.",
      techStack: ["Python", "OpenCV", "TensorFlow/Keras", "Tkinter", "Haar Cascades", "NumPy", "Pandas"],
      github: "https://github.com/SoumyarananPradhan/FaceRecognitionSystem",
      demo: "#",
    },
    {
      title: "Anime Search DB",
      description: "An interactive React application that fetches real-time anime data (Jikan API). Features dynamic search, filtering, and detailed info cards.",
      techStack: ["React.js", "REST API", "Tailwind CSS", "Netlify"],
      github: "https://github.com/SoumyarananPradhan/anime-search-app",
      demo: "https://searchanim.netlify.app/",
    },
    {
      title: "Book Review System",
      description: "A community-driven review platform where users can rate, review, and discuss books. Features CRUD operations and user profile management.",
      techStack: ["Django", "Bootstrap", "SQLite", "JavaScript"],
      github: "https://github.com/SoumyarananPradhan/Book-Review-System",
      demo: "#",
    },
    {
      title: "QR Code Generator",
      description: "A server-side utility tool to generate and scan QR codes instantly. Useful for inventory management or digital ticketing systems.",
      techStack: ["Python", "Django", "Pillow", "HTML/CSS"],
      github: "https://github.com/SoumyarananPradhan/QR-Code-Generator-and-Reader",
      demo: "#",
    },
  ]
};