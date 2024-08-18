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
    yatra,
    python,
    c,
    cpp,
    AI,
    ML,
    firebase,
    saranam,
    spark,
    stock,
    traffic,
    java,
    headstarter,
    tracker,
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
      name: "C",
      icon: c,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Firebase",
      icon: firebase,
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
      name: "Python",
      icon: python,
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
      name: "AI",
      icon: AI,
    },
    {
      name: "ML",
      icon: ML,
    },
    {
      name: "Java",
      icon: java,
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
        "Developed a scheduling app for Swamis to manage poojas, targeting 400+ user registrations within the first month and supporting up to 1,000 users simultaneously.",
        "Created a front-end login/registration page, scheduling calendar, and appointment viewer using React Native, achieving an expected completion rate of 70% and enabling the management of over 300 appointments monthly.",
        "Engineered a calendar feature for scheduling appointments, designed to handle up to 600 appointments per month, ensuring seamless performance with a 99.9% uptime rate.",
        "Implemented a back-end using Node.js and Firebase to handle user inputs for the login/registration page, and synthesized Firestore to manage scheduling data, ensuring real-time synchronization on the calendar and improving data access speeds by 50%.",
      ],
    },
    {
      title: "AI/ML Models for Water Infrastructure Optimization Intern",
      company_name: "UIC College of Engineering",
      icon: uic,
      iconBg: "#999999",
      date: "Jun 2024 - Present",
      points: [
        "Developed and implemented advanced machine learning and Bayesian optimization models to enhance water infrastructure, boosting operational efficiency by 35% and reducing resource wastage by 15%. ",
        "Collected, cleaned, and preprocessed extensive datasets from sensor networks and public databases, ensuring data integrity and reducing data processing time by 30%.",
        "Conducted contamination detection simulations using WNTR and Bayesian optimization, improving detection speed by 40% and enhancing predictive accuracy by 25%.",
        "Preparing to publish an article detailing the implementation and impact of Bayesian surrogate models in optimizing water infrastructure systems.",
      ],
    },
    {
      title: "Software Engineer Fellowship/Internship",
      company_name: "Headstarter AI",
      icon: headstarter,
      iconBg: "#999999",
      date: "Jul 2024 - Present",
      points: [
        "Built and deployed 5+ AI applications and APIs using NextJS, OpenAI, Pinecone, and StripeAPI, achieving 98% accuracy and positively impacting over 1000 users by enhancing user experience and engagement. ",
        "Led the end-to-end development of projects, from design to deployment, by managing a team of 4+ engineering fellows, implementing MVC design patterns, and ensuring high code quality and maintainability.",
        "Received coaching and mentorship from industry experts at Amazon, Bloomberg, and Capital One, focusing on best practices in Agile methodologies, CI/CD pipelines, Git workflows, and microservice architecture, significantly improving team efficiency and project delivery timelines.",
        "Implemented robust testing and monitoring frameworks, conducting over 200 automated tests and continuous performance monitoring, which reduced post-deployment issues by 30%, ensuring a 99.9% uptime and swift issue resolution within 24 hours.",
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
      name: "Chicago Saranam Yatra Mobile App (in progress)",
      description:
        "Using React-Native, Node.js, and Firebase, I am creating a front end login/registration page, a calendar to schedule appointments, and a page to see the said appointments and used Firestore database for data fetching/retrieval. The app is still in pre-production and in progress as more logic and elements need to be implemented",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: saranam,
      source_code_link: "https://github.com/sripadsirik/saranam-app",
    },
    {
      name: "Traffic Congestion Model Predictor (in progress)",
      description:
        "The problem is optimizing traffic and navigation by predicting real-time traffic conditions to provide the best routes. Collected historical and real-time traffic data, including weather conditions, to train a machine learning model. This model predicts traffic flow based on current conditions. Still developing a backend server using Flask that processes user inputs, uses the trained model to predict traffic flow, and returns the results via an API",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "restful api",
          color: "green-text-gradient",
        },
        {
          name: "machine learning",
          color: "pink-text-gradient",
        },
        {
          name: "flask",
          color: "blue-text-gradient",
        },
      ],
      image: traffic,
      source_code_link: "https://github.com/sripadsirik/traffic-project",
    },
    {
      name: "Pantry Tracker",
      description:
        "This Pantry Tracker application leverages modern web technologies, including Next.js, Firebase, and TensorFlow.js, to help users manage their pantry inventory by allowing them to add, categorize, and track items with real-time updates. The app features an integrated image classification system that automatically categorizes pantry items based on captured images, with the ability to manually override classifications when necessary. Additionally, users can explore recipe suggestions based on their current pantry contents, making meal planning more efficient and personalized",
      tags: [
        {
          name: "react js",
          color: "blue-text-gradient",
        },
        {
          name: "machine learning",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: tracker,
      source_code_link: "https://github.com/sripadsirik/Pantry-Tracker",
    },
    {
      name: "Stock-Predictor",
      description:
        "Having a 94% accuracy rate, the project used the yfinance library to download historical stock data for NVIDIA (ticker symbol 'NVDA') from January 1, 2020, to June 16, 2024. It then splits the data into training and testing sets, uses a GridSearchCV on a GradientBoostingRegressor to find the best hyperparameters, and evaluates the model's performance using mean squared error. Lastly, it attempts to predict the stock price for a future date matplotlib with added hover functionality for detailed inspection",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "keras",
          color: "pink-text-gradient",
        },
      ],
      image: stock,
      source_code_link: "https://github.com/sripadsirik/Python-Stock-predictor1",
    },
    {
      name: "SpaceRIDE (Carpooling Web App)",
      description:
        "Led a team of 5 and created a web-app in 24 hours, used JSON to take user input and exchange between pages; utilizes a search engine to search for rides, and HTML and CSS for front-end. Later used Google Maps API, ReactJS, Firebase",
      tags: [
        {
          name: "html/css/javascript",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "green-text-gradient",
        },
        {
          name: "json",
          color: "pink-text-gradient",
        },
        {
          name: "google maps api",
          color: "blue-text-gradient",
        },
      ],
      image: spark,
      source_code_link: "https://github.com/sripadsirik/spark_commute",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };