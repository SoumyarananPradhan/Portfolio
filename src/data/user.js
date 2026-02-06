// src/data/user.js

export const userData = {
  // 1. Personal Details
  name: "Soumyaranjan Pradhan",
  role: "Python Full Stack Developer | AI & ML Enthusiast",
  heroTagline: "Crafting seamless digital experiences from backend logic to frontend magic.",
  summary: "I'm an MCA graduate from KIIT University and a passionate Python Full Stack Developer who enjoys building scalable web applications and AI-powered solutions. I focus on turning ideas into user-friendly and efficient digital products using technologies like Django, React, and REST APIs.",
  resumeUrl: "/Soumyaranjan_Pradhan_FullStack_Resume.pdf", // Ensure this file is in your 'public' folder
  
  // 2. Social Links
  socials: {
    linkedin: "https://www.linkedin.com/in/soumyaranjan-pradhan-/", // Update if needed
    github: "https://github.com/SoumyarananPradhan",
    email: "mailto:soumyaranjanaman54@gmail.com",
    instagram: "https://www.instagram.com/_im._.aman_/?hl=en"
  },

  // 3. Skills List
  skills: [
    "Python", "Django", "React.js", "JavaScript", 
    "REST APIs", "MySQL", "MongoDB", "HTML5/CSS3", "Tailwind CSS", "Git", "GitHub"
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
      title: "VellaVision",
      description: "A Full Stack AI-powered application designed for advanced visual analysis. Features a modern Django 6.0+ backend with Cloudinary storage and Dockerized deployment on Railway.",
      // ✅ UPDATED TECH STACK
      techStack: ["Django 6.0+", "JavaScript", "HTML5/CSS3", "PostgreSQL", "Cloudinary", "Docker", "Railway"],
      github: "https://github.com/SoumyarananPradhan/VellaVision",
      demo: "https://vellavision-production-b04d.up.railway.app/", 
    },
    {
      title: "Anime Search DB",
      description: "An interactive React application that fetches real-time anime data (Jikan API). Features dynamic search, filtering, and detailed info cards.",
      techStack: ["React", "REST API", "Tailwind CSS", "Netlify"],
      github: "https://github.com/SoumyarananPradhan/anime-search-app",
      demo: "https://searchanim.netlify.app/",
    },
    {
      title: "Face Recognition System",
      description: "A biometric security system capable of detecting and recognizing faces in real-time. Implements Haar Cascades or Deep Learning models for high accuracy.",
      techStack: ["Python", "OpenCV", "Tkinter", "Haar Cascades", "Deep Learning", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Face_Recognition"],
      github: "https://github.com/SoumyarananPradhan/Face-Recognition-System",
      demo: "#",
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
    // {
    //   title: "Personal Portfolio",
    //   description: "The modern, responsive portfolio website you are viewing right now. Built to showcase projects with a clean UI and smooth animations.",
    //   techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    //   github: "https://github.com/SoumyarananPradhan/My_Portfolio_Website",
    //   demo: "https://soumya2025.pythonanywhere.com/",
    // },
    {
      title: "Live Weather App",
      description: "A dashboard providing real-time weather updates using the OpenWeatherMap API. Features location-based search and 5-day forecasting.",
      techStack: ["React", "OpenWeather API", "CSS Modules"],
      github: "https://github.com/SoumyarananPradhan/Weather-App",
      demo: "#",
    }
  ]
};