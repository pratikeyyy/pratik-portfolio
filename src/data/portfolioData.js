export const portfolioData = {
  hero: {
    name: "PRATIK KUMAR",
    title: "Computer Science & Artificial Intelligence",
    subtitle: "Software Development • AI/ML • Computer Vision • Full Stack",
    location: "Delhi NCR / Greater Noida, India",
    status: "STATUS: ACTIVE • MISSION READY",
    health: "100%",
    armor: "100%",
    cash: "$1,840,000",
    wantedStars: 5,
    radioStation: "RADIO LOS SANTOS // TECH WAVE FM",
    terminalIp: "192.168.4.28 // PORT 8080",
    bio: "Computer Science & Engineering (Artificial Intelligence) developer with proven engineering expertise in Deep Learning, Computer Vision pipelines, Full-Stack web architectures, and real-time distributed applications. Transforming complex computational problems into elegant digital realities."
  },

  evolutionEras: [
    {
      id: "gta1",
      title: "GTA 1",
      year: "1997",
      subtitle: "2D Top-Down Retro Grid",
      tag: "ARCADE ORIGIN",
      accent: "#22c55e",
      bgClass: "from-green-950/40 via-black to-black",
      desc: "Pixelated vector streets, top-down radar telemetry, high-score arcade scoreboards, and early computational foundations.",
      badge: "8-BIT COMPILER",
      skillsHighlight: ["C", "Logic Architecture", "Algorithms"]
    },
    {
      id: "gta2",
      title: "GTA 2",
      year: "1999",
      subtitle: "Futuristic Cyberpunk Neon",
      tag: "NEON URBAN HUD",
      accent: "#00F0FF",
      bgClass: "from-cyan-950/40 via-black to-black",
      desc: "High-contrast electroluminescent HUD, tech-faction respect meters, automated terminal outputs, and cyber-grid telemetry.",
      badge: "RESPECT SYSTEM",
      skillsHighlight: ["Data Structures", "OOP", "SDLC"]
    },
    {
      id: "gta3",
      title: "GTA III",
      year: "2001",
      subtitle: "3D Open-World Revolution",
      tag: "LIBERTY CITY 3D",
      accent: "#38bdf8",
      bgClass: "from-slate-900 via-gray-950 to-black",
      desc: "Industrial city atmosphere, early 3D radar wireframes, dynamic mission pagers, and real-time transit computing.",
      badge: "3D WORLD ENGINE",
      skillsHighlight: ["JavaScript", "HTML5/CSS3", "RESTful APIs"]
    },
    {
      id: "gtavice",
      title: "GTA Vice City",
      year: "2002",
      subtitle: "80s Neon Sunset & Synthwave",
      tag: "PALM DREAMS & SUNSET",
      accent: "#FF2A85",
      bgClass: "from-pink-950/40 via-purple-950/30 to-black",
      desc: "Hot magenta and cyan neon gradients, synthwave audio aesthetics, vibrant typography, and creative frontend expression.",
      badge: "SYNTH AUDIO LAB",
      skillsHighlight: ["Bootstrap 5", "Responsive UI", "Audio UI"]
    },
    {
      id: "gtasa",
      title: "GTA San Andreas",
      year: "2004",
      subtitle: "West Coast Turf & Character RPG",
      tag: "SAN ANDREAS RPG",
      accent: "#FF6B00",
      bgClass: "from-amber-950/40 via-orange-950/20 to-black",
      desc: "Orange haze sunset, territory progression, RPG player stat bars (Stamina, Respect, Muscle), and full-scale mission maps.",
      badge: "OPEN WORLD PROGRESSION",
      skillsHighlight: ["Python", "OpenCV", "MongoDB", "Node.js"]
    },
    {
      id: "gta4",
      title: "GTA IV",
      year: "2008",
      subtitle: "Dark Urban Realism & Precision",
      tag: "METROPOLITAN PRECISION",
      accent: "#94a3b8",
      bgClass: "from-slate-950 via-zinc-950 to-black",
      desc: "High-contrast dark slate realism, physics telemetry, analytical data logs, and enterprise-grade software workflows.",
      badge: "REALISTIC ANALYTICS",
      skillsHighlight: ["Pandas", "NumPy", "EDA", "SQL"]
    },
    {
      id: "gta5",
      title: "GTA V",
      year: "2013+",
      subtitle: "Modern Ultra HUD & AI Integration",
      tag: "LOS SANTOS 4K AI",
      accent: "#FDB813",
      bgClass: "from-amber-950/30 via-yellow-950/20 to-black",
      desc: "Next-gen glassmorphic HUD, interactive smartphone modals, character wheel abilities, and cutting-edge Gemini Vision AI.",
      badge: "AI VISION ENGINE",
      skillsHighlight: ["Google Gemini Vision AI", "YOLOv8", "Deep Learning", "GCP"]
    }
  ],

  missions: [
    {
      id: "mission-01",
      number: "MISSION 01",
      title: "MEDICINE AI ASSISTANT",
      tagline: "Multimodal Visual Healthcare Intelligence",
      era: "GTA V AI INNOVATION",
      eraBadge: "GENERATIVE AI",
      status: "MISSION COMPLETE",
      reward: "$250,000 • 5,000 RP",
      location: "Los Santos Medical / Cloud AI Hub",
      difficulty: "HARDCORE",
      brief: "Engineer a production-ready AI healthcare visual analysis system capable of parsing medical prescriptions, identifying medicine packaging, and extracting precise dosage recommendations through multimodal vision reasoning.",
      technologies: [
        "Python",
        "Gradio",
        "Google Gemini Vision AI",
        "Hugging Face Spaces"
      ],
      keyFeatures: [
        "Multimodal prescription OCR & medicine visual inspection utilizing Google Gemini Vision AI models.",
        "Zero-latency interactive web UI built with Gradio for intuitive patient interaction.",
        "Cloud deployment on Hugging Face Spaces ensuring 24/7 global accessibility and scalable inference.",
        "Automated dosage extraction, drug safety cross-checks, and formatted instruction briefs."
      ],
      github: "https://github.com",
      liveDemo: "https://huggingface.co/spaces",
      metrics: {
        accuracy: "98.4%",
        latency: "< 1.2s",
        model: "Gemini Vision AI",
        platform: "Hugging Face"
      }
    },
    {
      id: "mission-02",
      number: "MISSION 02",
      title: "REAL-TIME OBJECT DETECTOR",
      tagline: "High-Speed Neural Surveillance & Tracking",
      era: "GTA IV COMPUTER VISION",
      eraBadge: "VISION PIPELINE",
      status: "MISSION COMPLETE",
      reward: "$300,000 • 6,500 RP",
      location: "Liberty City Security Terminal",
      difficulty: "EXPERT",
      brief: "Construct an ultra-fast real-time video detection and multi-object tracking pipeline combining state-of-the-art YOLOv8 neural network inference with ByteTrack associative tracking for seamless surveillance telemetry.",
      technologies: [
        "Python",
        "YOLOv8",
        "ByteTrack",
        "OpenCV"
      ],
      keyFeatures: [
        "Real-time multi-class object detection operating at 45+ FPS with sub-millisecond tensor processing.",
        "ByteTrack algorithm integration for persistent unique ID assignment across complex occlusion paths.",
        "Custom OpenCV visualization engine with dynamic trajectory trails and bounding-box telemetry.",
        "Optimized for live camera streams, traffic monitoring, and prerecorded high-definition feeds."
      ],
      github: "https://github.com",
      liveDemo: "https://github.com",
      metrics: {
        fps: "45+ FPS",
        tracking: "ByteTrack Associative",
        detector: "YOLOv8 Deep NN",
        library: "OpenCV Core"
      }
    },
    {
      id: "mission-03",
      number: "MISSION 03",
      title: "DELHI BUS TRACKER PRO",
      tagline: "Live Transit Radar & WebSocket Fleet Sync",
      era: "GTA SAN ANDREAS RADAR",
      eraBadge: "FULL STACK TRANSIT",
      status: "MISSION COMPLETE",
      reward: "$400,000 • 8,000 RP",
      location: "National Capital Region / Delhi Transit Grid",
      difficulty: "MASTER",
      brief: "Architect a full-stack real-time public transit tracking system for the Delhi municipal bus network with live bidirectional WebSocket synchronization, geospatial telemetry, and route scheduling.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "WebSocket",
        "REST APIs"
      ],
      keyFeatures: [
        "Live GPS vehicle coordinate streaming via low-latency bidirectional WebSocket connections.",
        "Scalable Node.js & Express RESTful API backend handling concurrent fleet queries.",
        "MongoDB database schema modeling routes, bus stops, timetables, and passenger metrics.",
        "Interactive live map telemetry with dynamic arrival predictions and responsive mobile layout."
      ],
      github: "https://github.com",
      liveDemo: "https://github.com",
      metrics: {
        sync: "Live WebSocket",
        database: "MongoDB Atlas",
        backend: "Node.js Express",
        ui: "HTML5/CSS3/JS"
      }
    },
    {
      id: "mission-04",
      number: "MISSION 04",
      title: "MUSIC FACTORY",
      tagline: "80s Synthwave Audio Studio & Showcase",
      era: "GTA VICE CITY SYNTH",
      eraBadge: "FRONTEND STUDIO",
      status: "MISSION COMPLETE",
      reward: "$150,000 • 3,500 RP",
      location: "Vice Beach Soundstage / Waveform Studio",
      difficulty: "TACTICAL",
      brief: "Design and implement a stylish, responsive audio production showcase platform for music producers, beat licensors, and audio engineering portfolios with modern interactive player components.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap 5"
      ],
      keyFeatures: [
        "High-contrast dark studio aesthetics built with custom Bootstrap 5 grid systems and responsive components.",
        "Interactive audio player user interface featuring track scrubbing, volume management, and playlist queues.",
        "100% mobile-friendly responsive architecture optimized for all screen resolutions.",
        "Semantic markup structure ensuring cross-browser reliability and smooth interaction."
      ],
      github: "https://github.com",
      liveDemo: "https://github.com",
      metrics: {
        framework: "Bootstrap 5",
        responsive: "100% Mobile Ready",
        styling: "Custom CSS3",
        audioUI: "Interactive Player"
      }
    }
  ],

  playerAbilities: {
    "Programming": [
      { name: "Python", level: "Expert", desc: "AI pipelines, OpenCV, ML modeling, Backend scripts" },
      { name: "JavaScript", level: "Advanced", desc: "Async event loops, DOM, Node.js, WebSockets" },
      { name: "C", level: "Core", desc: "Low-level memory management, algorithmic efficiency" },
      { name: "HTML5", level: "Master", desc: "Semantic markup, Canvas API, Web Audio, Accessibility" },
      { name: "CSS3", level: "Master", desc: "Modern Flexbox, Grid, Animations, Tailwind architectures" }
    ],
    "Frontend": [
      { name: "Bootstrap 5", level: "Advanced", desc: "Component architecture, utilities, responsive grid" },
      { name: "Responsive Web Design", level: "Master", desc: "Mobile-first layouts, fluid typography, breakpoint systems" },
      { name: "Gradio", level: "Expert", desc: "Rapid AI web demos, interactive model inference interfaces" }
    ],
    "Backend": [
      { name: "Node.js", level: "Advanced", desc: "Event-driven runtime, microservices, stream processing" },
      { name: "Express.js", level: "Advanced", desc: "RESTful endpoints, middleware chains, authentication" }
    ],
    "AI / ML": [
      { name: "Deep Learning", level: "Advanced", desc: "Neural networks, convolutional architectures, embeddings" },
      { name: "Google Gemini Vision AI", level: "Expert", desc: "Multimodal visual reasoning, structured prompt engineering" },
      { name: "YOLOv8", level: "Expert", desc: "Real-time bounding-box detection, custom model training" },
      { name: "ByteTrack", level: "Advanced", desc: "Multi-object association, trajectory tracking" },
      { name: "Pandas", level: "Expert", desc: "Dataframe manipulation, data wrangling, aggregation" },
      { name: "NumPy", level: "Expert", desc: "Vectorized computations, multi-dimensional matrix operations" },
      { name: "Matplotlib", level: "Advanced", desc: "Statistical visualization, distribution plots" },
      { name: "Machine Learning", level: "Advanced", desc: "Supervised/unsupervised algorithms, evaluation metrics" }
    ],
    "Computer Vision": [
      { name: "OpenCV", level: "Expert", desc: "Image processing, video pipelines, matrix transformations, feature extraction" }
    ],
    "Databases": [
      { name: "MongoDB", level: "Advanced", desc: "NoSQL document stores, aggregation pipelines, schema indexing" },
      { name: "SQL", level: "Advanced", desc: "Relational queries, joins, table normalization, transactions" }
    ],
    "Developer Tools": [
      { name: "Git", level: "Advanced", desc: "Version control, branch management, merge conflict resolution" },
      { name: "GitHub", level: "Advanced", desc: "CI/CD actions, collaboration, open-source workflow" },
      { name: "Jupyter Notebook", level: "Expert", desc: "Interactive data science, rapid model experimentation" },
      { name: "Linux", level: "Advanced", desc: "Bash scripting, system administration, process management" }
    ],
    "Cloud": [
      { name: "Google Cloud Platform", level: "Intermediate", desc: "Vertex AI, Cloud Run, compute instances" },
      { name: "Hugging Face Spaces", level: "Expert", desc: "AI model deployment, Gradio hosting, Docker spaces" },
      { name: "AWS", level: "Intermediate", desc: "EC2 instances, S3 storage buckets, cloud compute" }
    ],
    "Core CS": [
      { name: "Data Structures & Algorithms", level: "Expert", desc: "Trees, graphs, dynamic programming, sorting optimization" },
      { name: "Object-Oriented Programming", level: "Master", desc: "Encapsulation, inheritance, polymorphism, design patterns" },
      { name: "Problem Solving", level: "Master", desc: "Analytical breakdown of complex engineering requirements" },
      { name: "SDLC", level: "Advanced", desc: "Agile methodologies, CI/CD deployment, code reviews" },
      { name: "RESTful APIs", level: "Master", desc: "HTTP methods, status codes, JSON payload contracts" },
      { name: "Database Management", level: "Advanced", desc: "ACID compliance, relational integrity, query optimization" }
    ]
  },

  techWantedLevel: [
    {
      stars: 1,
      name: "PROBLEM SOLVING",
      tagline: "Algorithmic Precision & Critical Logic",
      desc: "Demonstrated capacity to deconstruct high-complexity computational challenges into modular, mathematically sound solutions."
    },
    {
      stars: 2,
      name: "SOFTWARE DEVELOPMENT",
      tagline: "Production-Grade Code & System Design",
      desc: "Writing clean, maintainable, object-oriented code following industry standard SDLC best practices."
    },
    {
      stars: 3,
      name: "WEB DEVELOPMENT",
      tagline: "Full-Stack Web & Real-Time Sync",
      desc: "Engineering scalable web platforms with Node.js, Express, WebSockets, MongoDB, and modern responsive frontends."
    },
    {
      stars: 4,
      name: "COMPUTER VISION",
      tagline: "Real-Time Object Tracking & OpenCV",
      desc: "Deploying high-fps YOLOv8 and ByteTrack computer vision pipelines capable of real-time multi-object tracking."
    },
    {
      stars: 5,
      name: "AI / MACHINE LEARNING",
      tagline: "Multimodal Gemini Vision & Deep Learning",
      desc: "Mastery of cutting-edge multimodal AI models, Generative AI APIs, neural networks, and scalable data science workflows."
    }
  ],

  experience: [
    {
      id: "exp-01",
      role: "Frontend Development Intern",
      company: "Cognifyz Technologies",
      period: "Internship Term",
      type: "COMPLETED MISSION 01",
      location: "Remote / Tech HQ",
      era: "GTA IV URBAN PRECISION",
      badge: "MISSION PASSED",
      description: "Spearheaded frontend architecture enhancements and user interface engineering for core web products.",
      responsibilities: [
        "Engineered and optimized highly responsive, interactive web interfaces utilizing modern JavaScript, HTML5, and CSS3.",
        "Constructed modular, reusable UI components that enhanced development velocity and maintained cohesive design consistency.",
        "Diagnosed frontend bottlenecks, optimized rendering performance, and resolved cross-browser compatibility discrepancies.",
        "Collaborated closely with engineering leads to transform functional wireframes into accessible, high-performance web applications."
      ],
      skillsUsed: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "Component Architecture"]
    },
    {
      id: "exp-02",
      role: "Data Analytics Intern",
      company: "Bluestock",
      period: "Internship Term",
      type: "COMPLETED MISSION 02",
      location: "Remote / Analytics Ops",
      era: "GTA SAN ANDREAS DATA INTEL",
      badge: "MISSION PASSED",
      description: "Led exploratory data science initiatives and automated analytics reporting pipelines on large-scale datasets.",
      responsibilities: [
        "Conducted in-depth Exploratory Data Analysis (EDA), data wrangling, and statistical validation pipelines utilizing Python, Pandas, and NumPy.",
        "Architected visual data dashboards with Matplotlib and data aggregation tools to surface critical operational metrics.",
        "Performed data cleaning and anomaly detection on raw datasets, enhancing data pipeline reliability and consistency.",
        "Prepared analytical reports and strategic presentations communicating quantitative data patterns to engineering stakeholders."
      ],
      skillsUsed: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA", "Statistical Modeling"]
    }
  ],

  achievements: [
    {
      id: "cert-01",
      title: "Oracle Cloud Infrastructure — Generative AI Professional (2025)",
      issuer: "Oracle Cloud Infrastructure",
      year: "2025",
      badgeType: "PLATINUM TROPHY",
      icon: "Sparkles",
      color: "#FDB813",
      desc: "Advanced professional certification validating expertise in Large Language Models (LLMs), Generative AI architecture, prompt engineering, vector databases, and OCI GenAI cloud services."
    },
    {
      id: "cert-02",
      title: "Oracle Cloud Infrastructure — AI Foundations Associate (2025)",
      issuer: "Oracle Cloud Infrastructure",
      year: "2025",
      badgeType: "GOLD TROPHY",
      icon: "Brain",
      color: "#00F0FF",
      desc: "Foundational mastery of Machine Learning algorithms, Deep Learning frameworks, Computer Vision fundamentals, and cloud AI infrastructure on OCI."
    },
    {
      id: "cert-03",
      title: "IBM — Data Analysis with Python",
      issuer: "IBM",
      year: "Certified",
      badgeType: "SILVER TROPHY",
      icon: "BarChart3",
      color: "#22c55e",
      desc: "Demonstrated proficiency in statistical modeling, data wrangling, Pandas dataframes, NumPy arrays, Scikit-learn modeling, and data visualization pipelines."
    },
    {
      id: "cert-04",
      title: "CodeChef — Data Structures & Algorithms",
      issuer: "CodeChef",
      year: "Certified",
      badgeType: "MASTER TROPHY",
      icon: "Code2",
      color: "#FF2A85",
      desc: "Rigorous certification covering algorithmic problem solving, time/space complexity optimization, dynamic programming, graph theory, and core computer science fundamentals."
    }
  ],

  education: {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering (Artificial Intelligence)",
    institution: "ABES Institute of Technology (ABESIT), AKTU",
    period: "Aug 2024 – Apr 2028",
    cgpa: "7.49",
    status: "IN PROGRESS • 4-YEAR AI HONORS DEGREE",
    location: "Ghaziabad / Greater Noida, UP, India",
    milestones: [
      {
        year: "YEAR 1 (2024-2025)",
        title: "CS Foundations & AI Fundamentals",
        desc: "Core C programming, Object-Oriented Principles, discrete mathematics, Python data modeling, and early AI algorithm exploration."
      },
      {
        year: "YEAR 2 (2025-2026)",
        title: "Deep Learning & Full Stack Architecture",
        desc: "Advanced Data Structures & Algorithms, Computer Vision (YOLOv8 & OpenCV), Generative AI (Gemini Vision), WebSocket architectures, and Node.js microservices."
      },
      {
        year: "YEAR 3 (2026-2027)",
        title: "Autonomous Systems & Cloud AI",
        desc: "Distributed computing, cloud infrastructure (OCI/GCP), edge vision inference, and advanced neural architecture exploration."
      },
      {
        year: "YEAR 4 (2027-2028)",
        title: "Capstone Engineering & AI Leadership",
        desc: "Major AI engineering capstone deployment, enterprise software scaling, and graduation with B.Tech CSE (Artificial Intelligence)."
      }
    ]
  },

  safehouse: {
    title: "SAFEHOUSE // CONTACT PLAYER",
    location: "PRATIK KUMAR DIGITAL SAFEHOUSE • DELAYS: ZERO",
    tagline: "Mission Dispatch & Direct Encrypted Communication",
    email: "pratikkumar.ai.dev@gmail.com",
    emailLink: "mailto:pratikkumar.ai.dev@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    status: "ONLINE & OPEN FOR OPPORTUNITIES",
    coordinates: "28.6280° N, 77.3649° E // NCR DISTRICT",
    missionPassedMessage: "MISSION ACCOMPLISHED — PRATIK KUMAR READY FOR DEPLOYMENT"
  }
};
