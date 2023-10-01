import emoji from "react-easy-emoji";

const greeting = {
  username: "Sarvesh Samant",
  title: "Hi all, I'm Sarvesh",
  subTitle: emoji("Fullstack Developer"),
  resumeLink:
    "https://drive.google.com/file/d/1bC7Lr2IQYXLtqFkx0xS8Ia2YVRm9X2A4/view?usp=sharing",
};

const socialMediaLinks = {
  github: "https://github.com/sarvesh-s8",
  linkedin: "https://www.linkedin.com/in/sarvesh-s-5a8bb0214/",
  gmail: "ss14452@nyu.edu",
};

const skillsSection = {
  title: "What I do",
  subTitle: "Develop fullstack web apps !!",
  skills: [
    emoji(
      "Designing and developing Fullstack applications using Python and Javascript"
    ),
    emoji("End-to-end automation executions for Fullstack applications"),
    emoji(
      "Creating custom Tableau dashboards for effective data visualization and analysis, to deliver insights."
    ),
    emoji(
      "Developing and integrating Frontend and Backend systems to build robust and scalable web applications."
    ),
  ],

  softwareSkills: [
    {
      skillName: "python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "reactJS",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "postgres",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "mongodb",
      classname: "logos:mongodb",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "tensorflow",
      classname: "logos-tensorflow",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "flask",
      classname: "simple-icons:flask",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "fast-api",
      classname: "simple-icons:fastapi",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Nextjs",
      classname: "simple-icons:nextdotjs",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Cypress",
      classname: "simple-icons:cypress",
      style: {
        backgroundColor: "transparent",
      },
    },

    {
      skillName: "Redis",
      classname: "simple-icons:redis",
      style: {
        backgroundColor: "transparent",
      },
    },

    {
      skillName: "C #",
      classname: "simple-icons:csharp",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Tableau",
      classname: "simple-icons:tableau",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Associate Developer",
      company: "Cheers Interactive",
      companylogo: require("./assets/images/cheers.png"),
      date: "September 2021 – July 2022",
      desc: "Revamped UI using Redux, built Redis caching, implemented Content Builder with role-based access. Created notification engine API, improving team productivity",
      descBullets: [
        "Customizable Content Builder with role-based access, reduced report time.",
        "Notification engine API development, increased marketing productivity 5%.",
      ],
    },
    {
      role: "Fullstack Developer",
      company: "Firenix",
      companylogo: require("./assets/images/firenix.jpeg"),
      date: "January 2020 – July 2021",
      desc: "Developed internal invoice app, implemented e-invoicing to streamline invoicing. Integrated employee management app, increased productivity by 10%. Skilled in debugging and troubleshooting.",
      descBullets: [
        "Debugging and minimizing downtime for end-users",
        "Employee management integration increased productivity by 10%.",
      ],
    },
  ],
};

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "Numpy and Pandas ('Currently Learning')",
      subtitle: "- Jose Portilla",
      logo_path: "pierian-data-logo.png",
      certificate_link: "#",
      alt_name: "Pierian-Data",
      color_code: "#FEF6E6",
    },
    {
      title: "Data Science ('Currently Learning')",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link: "#",
      alt_name: "IBM",
      color_code: "#E3F1FA",
    },
  ],
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "#",
      title: "Coming Soon !!!",
      description:
        "Creating a portfolio website to exhibit my work and share my insights. Blog section coming soon!",
    },
  ],
};

const projectSection = {
  title: "Projects",
  subtitle:
    "Passionate about developing creative projects, from concept to completion",

  proejcts: [
    {
      url: "https://github.com/sarvesh-s8/instant_nyc",
      title: "Social media like but for travellers ",
      description:
        "Developing a social platform like Withlocals, Airbnb, and Instagram, to connect travelers and locals for authentic experiences.",
    },
    {
      url: "https://github.com/sarvesh-s8/fake-Ecommerce",
      title: "Fake Ecommerce Api for Developers ",
      description:
        "A prototype/fake yet powerful e-commerce API that enables developers to easily build and integrate shopping functionality into their web or mobile applications.",
    },
    {
      url: "https://github.com/sarvesh-s8",
      title: "Donate stuff",
      description:
        " Users can create profiles, list items they want to donate, and search for items they need. The app also connects with local charities to accept donations and distribute them to those in need",
    },
    {
      url: "https://github.com/sarvesh-s8/Reddit",
      title: "NYU-it, A reddit-like clone ",
      description:
        "Social news aggregation and discussion website, serving as a clone of Reddit. Users can submit content in the form of posts, vote on submissions, and participate in discussions through comments. You can create subreddits on any topic, customize your user profile, and build a community around your interests.",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 3477340074",
  email_address: "ss14452@nyu.edu",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
  projectSection,
};
