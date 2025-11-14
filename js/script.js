//This file contains the data of courses offered in the Computer Science department.
//But this is sample data.
//I did not use this data in the final project.
const currentCourses = [
  {
    code: "CS 5101",
    name: "Design & Analysis of Algorithms",
    semester: "Fall 2024",
    credits: 2,
    description:
      "Study of algorithmic techniques including divide-and-conquer, greedy methods, dynamic programming, and computational complexity.",
    objectives: [
      "Understand asymptotic notations and time complexity",
      "Analyze and compare different algorithmic approaches",
      "Design optimized algorithms for real-world problems",
      "Apply greedy, DP, and graph techniques",
    ],
    assignments: [
      { name: "Assignment 1: Complexity Analysis", due: "Sep 20, 2024" },
      { name: "Assignment 2: Divide & Conquer Problems", due: "Oct 10, 2024" },
      { name: "Assignment 3: Dynamic Programming", due: "Nov 15, 2024" },
    ],
    resources: [
      {
        name: "Lecture Notes (PDF)",
        link: "assectpdfs\notesDesigna_Analysis_of_Algorithm.pdf",
      },
      {
        name: "Algorithm Visualizer",
        link: "https://algorithm-visualizer.org/",
      },
      {
        name: "MIT OCW – Algorithms",
        link: "https://ocw.mit.edu/courses/6-046",
      },
    ],
  },

  {
    code: "CS 5201",
    name: "Data Communication & Networking",
    semester: "Fall 2024",
    credits: 4,
    description:
      "Covers networking fundamentals, OSI model, TCP/IP protocols, routing, switching, and data transmission techniques.",
    objectives: [
      "Understand how data travels across networks",
      "Explain OSI and TCP/IP models",
      "Analyze switching, routing, and IP addressing",
      "Explore modern network security concepts",
    ],
    assignments: [
      { name: "Assignment 1: Network Layers", due: "Sep 18, 2024" },
      { name: "Assignment 2: Subnetting Lab", due: "Oct 05, 2024" },
    ],
    resources: [
      {
        name: "Course Notes (PDF)",
        link: "assectpdfs\notesComputer_Networks.pdf",
      },
      {
        name: "Cisco Packet Tracer",
        link: "https://www.netacad.com/courses/packet-tracer",
      },
      { name: "Networking Basics Video", link: "https://youtu.be/qiQR5rTSshw" },
    ],
  },

  {
    code: "CS 5301",
    name: "Software Project Management",
    semester: "Fall 2024",
    credits: 4,
    description:
      "Principles of planning, scheduling, budgeting, risk management, and quality control in software project development.",
    objectives: [
      "Understand project life cycle phases",
      "Manage timelines, budgets, and risks",
      "Apply Agile & Scrum techniques",
      "Use project estimation & tracking tools",
    ],
    assignments: [
      { name: "Assignment 1: Project Planning Template", due: "Sep 25, 2024" },
      { name: "Assignment 2: Risk Assessment Report", due: "Oct 30, 2024" },
    ],
    resources: [
      {
        name: "Notes (PDF)",
        link: "assectpdfs\notesSoftware_Project_Management.pdf",
      },
      { name: "Scrum Guide", link: "https://scrumguides.org" },
      { name: "PMBOK Basics", link: "https://www.pmi.org" },
    ],
  },

  {
    code: "CS 5402",
    name: "Software Testing & Quality Assurance",
    semester: "Fall 2024",
    credits: 4,
    description:
      "Explores manual and automated testing, test case development, debugging, QA frameworks, and industry best practices.",
    objectives: [
      "Learn testing methodologies and strategies",
      "Create effective test plans & test cases",
      "Use automation tools for testing",
      "Measure and maintain software quality",
    ],
    assignments: [
      { name: "Assignment 1: Test Case Writing", due: "Sep 22, 2024" },
      { name: "Assignment 2: Selenium Automation", due: "Oct 28, 2024" },
    ],
    resources: [
      { name: "Testing Notes (PDF)", link: "#" },
      { name: "Selenium Tutorial", link: "https://youtu.be/FRn5J30l_1w" },
      { name: "ISTQB Foundation Guide", link: "https://www.istqb.org" },
    ],
  },

  {
    code: "CS 5403",
    name: "Software Engineering & Project Management",
    semester: "Fall 2024",
    credits: 4,
    description:
      "Combination of SDLC, requirements engineering, system design, and project management concepts.",
    objectives: [
      "Understand SDLC models & methodologies",
      "Perform requirement gathering & analysis",
      "Design and document software systems",
      "Apply Agile project management practices",
    ],
    assignments: [
      { name: "Assignment 1: SRS Document", due: "Sep 29, 2024" },
      { name: "Assignment 2: UML Diagrams", due: "Oct 20, 2024" },
    ],
    resources: [
      { name: "Notes (PDF)", link: "#" },
      { name: "SDLC Basics Video", link: "https://youtu.be/xtPYgkB5pYg" },
    ],
  },

  {
    code: "CS 5501",
    name: "Business Intelligence using Tableau",
    semester: "Fall 2024",
    credits: 3,
    description:
      "Learn visualization, dashboards, storytelling with data, and business analytics using Tableau.",
    objectives: [
      "Understand BI fundamentals",
      "Build dashboards in Tableau",
      "Analyze datasets using interactive charts",
      "Apply real-world decision-making techniques",
    ],
    assignments: [
      { name: "Assignment 1: Dashboard Design", due: "Oct 01, 2024" },
      { name: "Assignment 2: Business Case Report", due: "Nov 10, 2024" },
    ],
    resources: [
      { name: "Tableau Public", link: "https://public.tableau.com" },
      { name: "Sample Dashboards", link: "https://public.tableau.com/gallery" },
    ],
  },

  {
    code: "CS 5601",
    name: "Operating System Concepts",
    semester: "Fall 2024",
    credits: 4,
    description:
      "Learn OS fundamentals including processes, threads, memory management, file systems, and CPU scheduling.",
    objectives: [
      "Understand OS architecture and functions",
      "Analyze process management & scheduling",
      "Work with memory and storage systems",
      "Learn OS security and protection models",
    ],
    assignments: [
      { name: "Assignment 1: Process Scheduling", due: "Sep 24, 2024" },
      { name: "Assignment 2: Deadlocks Case Study", due: "Oct 22, 2024" },
    ],
    resources: [
      { name: "OS Notes (PDF)", link: "#" },
      { name: "Linux Internals Video", link: "https://youtu.be/26QPDBe-NB8" },
    ],
  },

  {
    code: "CS 5701",
    name: "Cyber Security",
    semester: "Fall 2024",
    credits: 4,
    description:
      "Foundations of cybersecurity including threats, vulnerabilities, cryptography, network protection, and incident response.",
    objectives: [
      "Understand cyber attacks & defense strategies",
      "Learn cryptographic techniques",
      "Perform vulnerability assessment",
      "Analyze real-world security incidents",
    ],
    assignments: [
      { name: "Assignment 1: VA/PT Lab", due: "Sep 27, 2024" },
      { name: "Assignment 2: Cryptography Project", due: "Oct 29, 2024" },
    ],
    resources: [
      {
        name: "Cyber Security Notes (PDF)",
        link: "/pdfs/Introduction_to_Cyber Security.pdf",
      },
      { name: "OWASP Top 10", link: "https://owasp.org/www-project-top-ten" },
    ],
  },

  {
    code: "CS 5801",
    name: "Blockchain Technology",
    semester: "Fall 2024",
    credits: 3,
    description:
      "Introduction to blockchain concepts including distributed ledgers, consensus mechanisms, smart contracts, and applications.",
    objectives: [
      "Understand blockchain fundamentals",
      "Learn hashing, blocks & decentralized systems",
      "Explore Ethereum & smart contracts",
      "Analyze real-world blockchain use cases",
    ],
    assignments: [
      { name: "Assignment 1: Blockchain Basics", due: "Oct 03, 2024" },
      { name: "Assignment 2: Smart Contract Development", due: "Nov 12, 2024" },
    ],
    resources: [
      { name: "Blockchain Basics Video", link: "https://youtu.be/SSo_EIwHSd4" },
      { name: "Solidity Docs", link: "https://docs.soliditylang.org" },
    ],
  },
];
