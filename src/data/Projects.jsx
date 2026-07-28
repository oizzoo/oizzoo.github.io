const projects = {
  "Full-Stack": [
    {
      title: "BookTracker",
      desc: "My first full-stack project — a book tracking app with a Node.js/Express + PostgreSQL backend, rebuilt with a React + Supabase frontend. Actively developed.",
      tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Supabase"],
      github: "https://github.com/oizzoo/capstone-Book-proj/tree/react-frontend",
      demo: "https://oizzoo.github.io/capstone-Book-proj/",
      video: "./videos/book-app-react.mp4",
    },
  ],

  Backend: [
    {
      title: "Blog App",
      desc: "Dynamic blog built with EJS, Express, and Node.js.",
      tech: ["EJS", "Express", "Node.js"],
      github: "https://github.com/oizzoo/EJSBlog",
      video: "./videos/BLOGAPP.mp4",
    },
    {
      title: "SuperHero API",
      desc: "A REST API app that fetches superhero data from an external API. Planned for a React rebuild.",
      tech: ["Node.js", "Express", "Axios"],
      github: "https://github.com/oizzoo/superHeroApi",
      video: "./videos/superheroapiProj.mp4",
    },
  ],

  TypeScript: [
    {
      title: "Add Goals App",
      desc: "A goal-tracking mini app — my first project written in TypeScript with React.",
      tech: ["React", "Vite", "TypeScript"],
      github: "https://github.com/oizzoo/first-TS-mini-project",
      demo: "https://oizzoo.github.io/first-TS-mini-project/",
      video: "./videos/first-typescript-app.mp4",
    },
  ],

  JavaScript: [
    {
      title: "JavaScript Games",
      desc: "A trio of vanilla JS games — Dice Game, Drum Kit and Simon — built to practice DOM manipulation, events and timing logic.",
      tech: ["HTML", "CSS", "JavaScript", "jQuery"],
      links: [
        { label: "Dice", href: "https://oizzoo.github.io/dice-game/" },
        { label: "Drum Kit", href: "https://oizzoo.github.io/drum-kit-game/" },
        { label: "Simon", href: "https://oizzoo.github.io/SimonGame/" },
      ],
      video: "./videos/simongame.mp4",
    },
  ],
};

export default projects;
