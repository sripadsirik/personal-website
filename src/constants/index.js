import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    uic,
    stem,
    yatra
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "AI/ML Practitioner",
      icon: backend,
    },
    {
      title: "Cloud Practitioner",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Coding Instructor",
      company_name: "STEM Shala Enrichment Center",
      icon: stem,
      iconBg: "#E6DEDD",
      date: "Jun 2021 - Jul 2023",
      points: [
        "Instructed coding languages (Scratch, Java, JavaScript, Python) to 20 kids aged 8-14, accomplishing a 95% course completion rate",
        "Organized and led coding workshops and hackathons, fostering enthusiasm for technology and innovation among participants",
        "Mentored students in advanced coding concepts and problem-solving techniques, preparing them for higher-level competitions and further studies in computer science",
        "Utilized educational tools and platforms such as Code.org and Repl.it to enhance interactive learning and real-time coding practice",
        "Assessed and provided continuous feedback to 100+ students, ensuring a 90% improvement in coding proficiency by the end of the program",
      ],
    },
    {
      title: "Mobile Application Developer",
      company_name: "Chicago Saranam Yatra Organization",
      icon: yatra,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Using React-Native, Node.js, and Firebase, I am creating a front end login/registration page, a calendar to schedule appointments, and a page to see the said appointments and used Firestore database for data fetching/retrieval. The app is still in pre-production and in progress as more logic and elements need to be implemented",
        "Developing a scheduling app for Swamis to manage poojas, accommodating over 100 user registrations in the first month",
        "Created a front-end login/registration page, scheduling calendar, and appointment viewer with React-Native, with an expected completion rate of 70% and ongoing development",
        "Implemented a back-end applying Node.js and Firebase to handle user inputs for the login/registration page, and synthesized Firestore to manage scheduling data, ensuring real-time synchronization on the calendar",
      ],
    },
    {
      title: "AI/ML Models for Water Infrastructure Optimization Intern",
      company_name: "UIC College of Engineering",
      icon: uic,
      iconBg: "#999999",
      date: "Jun 2024 - Present",
      points: [
        "Collected, cleaned, and preprocessed diverse datasets from sources such as sensor networks and public databases, ensuring data integrity and preparing it for analysis, resulting in a 25% reduction in data processing time ",
        "Constructed, trained, and validated multiple machine learning models, including decision trees and neural networks, achieving an accuracy improvement of up to 15% in predictive performance compared to baseline models",
        "Applied machine learning models to optimize water infrastructure systems, effectively improving operational efficiency by 20% and reducing resource wastage by 10%",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };