// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-presentation-at-the-6th-international-conference-of-the-american-pragmatics-association-ampra-in-florida-titled-the-forgotten-pragmatic-aspect-of-conceptual-engineering",
          title: 'Presentation at the 6th International Conference of the American Pragmatics Association (AMPRA) in...',
          description: "",
          section: "News",},{id: "news-collaborative-conceptual-engineering-linguistics-and-philosophy-published-as-a-chapter-in-conceptual-engineering-methodological-and-metaphilosophical-issues-edited-by-piotr-stalmaszczyk",
          title: '“Collaborative Conceptual Engineering: Linguistics and Philosophy” published as a chapter in “Conceptual Engineering...',
          description: "",
          section: "News",},{id: "news-my-paper-meta-pragmatics-in-conceptual-engineering-towards-a-pragmatic-lexical-taxonomy-was-accepted-for-presentation-as-part-of-the-panel-choosing-the-best-words-organized-by-cliff-goddard-helen-bromhead-during-the-19th-international-pragmatics-conference-to-be-held-in-brisbane-australia-from-22-to-27-june-2025",
          title: 'My paper “(Meta)pragmatics in Conceptual Engineering: Towards a pragmatic lexical taxonomy” was accepted...',
          description: "",
          section: "News",},{id: "news-joined-the-organising-committee-for-the-11th-biennial-experimental-pragmatics-conference-xprag-2025",
          title: 'Joined the organising committee for the 11th Biennial Experimental Pragmatics Conference (XPRAG 2025)...',
          description: "",
          section: "News",},{id: "projects-navigating-meaning-spaces-a-contextualist-approach-to-conceptual-engineering",
          title: 'Navigating Meaning Spaces; A Contextualist Approach to Conceptual Engineering',
          description: "PhD Research Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nina-haket-a3878b15b", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9553-507X", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=9CA6SFUAAAAJ&hl", "_blank");
        },
      },];
