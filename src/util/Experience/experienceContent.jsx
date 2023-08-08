import intelImage from '../../assets/Experience/intel_logo.png';
import stampedImage from '../../assets/Experience/stamped_logo.jpg';
import westEndImage from '../../assets/Experience/westendymcapool.jpg';

import blueskyPicture from '../../assets/Experience/bluesky.jpg';
import concreteTobogganImage from '../../assets/Experience/concretetbog.jpg';
import froshTechTeamImage from '../../assets/Experience/westendymcapool.jpg';
import brewofTImage from '../../assets/Experience/brewoft.png';
// import EAAImage from '../../assets/Experience/EAA.png';
// import BNGImage from '../../assets/Experience/bngcommittee.png';

import calloftheBogImage from '../../assets/Experience/CalloftheBog.png';
import gomokuImage from '../../assets/Experience/gomoku.png';
import seamCarvingImage from '../../assets/Experience/seamcarving-newnew.png';


export const experienceContent = {
  professional: [
    {
      img: intelImage,
      title: "Intel Corporation",
      location: "San Jose, CA, United States",
      altImage: "Intel Corporation logo",
      tools: "Python",
      description: 
        <p>
          DevOps developer with expertise in orchestrating seamless software delivery pipelines. Proficient in automating 
          build, deployment, and infrastructure processes. Skilled in containerization and cloud technologies to optimize 
          scalability and reliability. Collaborates across teams to enhance development efficiency and streamline operations.
        </p>,
      positions: [
        { title: "Software Engineer Intern",
          startDate: "May. 2023",
          endDate: "Present",
          description: [
            "Implemented monitoring and alerting solutions to proactively identify and resolve performance issues",
            "Collaborated with development teams to optimize software build and release processes, improving code quality and ensuring successful deployments",
            "Provided technical support and troubleshooting for production systems, investigating and resolving issues to minimize downtime and ensure high availability",
            "Developed and implemented CI/CD pipelines resulting in improved software release cycles and reduced deployment time",
            "Spearheaded the integration of AI technologies into DevOps practices, streamlining processes and optimizing efficiency",
          ],
        },
      ],
      path: "/",
    },
    {
      img: stampedImage,
      title: "Stamped Incorporation",
      location: "Quebec City, QC",
      altImage: "Stamped Incorporation",
      tools: "Ruby, Rails, PostgreSQL, RSpec, Google Analytics",
      description: 
        <p>
          Former Junior Software Developer experienced in software development and data analytics. Specialized 
          in Ruby on Rails dashboard design for database processing. Implemented Google Analytics-based system 
          for user insights. Automated account mapping using AI, reducing manual work. Passionate about efficient 
          solutions and data-driven contributions.
        </p>,
      positions: [
        { title: "Junior Software Developer",
          startDate: "Aug. 2022",
          endDate: "Apr. 2023",
          description: [
            "Led the initiative to implement an advanced analytics system utilizing Google Analytics, enabling the acquisition of valuable user data for in-depth insights into app functionality",
            "Successfully integrated an AI model into the system, automating the process of account mapping and significantly reducing manual labor with an impressive average confidence level of 85%+",
          ],
        },
        { title: "Software Development Intern",
          startDate: "May 2022",
          endDate: "Aug. 2022",
          description: [
            "Designed and developed three interactive dashboards using Ruby on Rails and PostgreSQL, delivering valuable insights to clients.",
            "Optimized information design and user experience by strategically arranging data for accountant stakeholders.",
            "Implemented a robust system to analyze financial activity, improving work prioritization and overall efficiency.",
            "Developed comprehensive unit tests using RSpec to ensure reliable functionality and complete code coverage.",
          ],
        },
      ],
      path: "/",
    },
    {
      img: westEndImage,
      title: "West End YMCA",
      location: "Toronto, ON",
      startDate: "Nov. 2018",
      endDate: "May 2022",
      altImage: "Lifeguard and Swimming Instructor",
      description: 
        <p>
          At the YMCA, I engaged in a fulfilling role promoting wellness and inclusivity. Collaborating 
          with a dedicated team, I facilitated fitness programs and empowered individuals to lead healthier 
          lives within a values-driven community.
        </p>,
      positions: [
        { title: "Sales Representative",
          startDate: "Sep. 2021",
          endDate: "May 2022",
          description: [
            "Improved customer relations by understanding their requirements, making recommendations, and providing solutions to problems to 150+ clients per day; acquired over 15 membership sales per week",
            "Efficiently managed information using the Client Relationship Management system, Active Net, for sign-ins, client records, and billing with 100% accuracy"
          ],
        },
        { title: "Sports and Recreation Supervisor",
          startDate: "Sep. 2019",
          endDate: "Sep. 2021",
          description: [
            "Oversaw and managed various sports and recreational activities, prioritizing patron safety and well-being.",
            "Implemented and enforced safety protocols and guidelines, maintaining a secure environment for all participants.",
            "Coordinated and led a team of staff members, providing clear instructions and fostering a positive atmosphere for patrons.",
            "Actively engaged with patrons, addressing concerns and providing assistance to enhance their overall sports and recreation experience.",
          ],
        },
        { title: "Lifeguard and Swimming Instructor",
          startDate: "Nov. 2018",
          endDate: "Sep. 2021",
          description: [
            "Experienced lifeguard with a focus on emergency response and pool area safety",
            "Conducted inclusive in-water swim lessons for diverse age groups, including special needs students",
            "Customized lesson plans through research for effective skill improvement",
            "Provided training to new Lifeguard and Swim Instructor staff, ensuring high standards of safety and instruction",
          ],
        },
      ],
      path: "/",
    },
  ],
  
  extracurriculars: [
    {
      img: blueskyPicture,
      title: "Blue Sky Solar Racing (BSSR)",
      location: "University of Toronto, Toronto, ON",
      startDate: "Mar. 2021",
      endDate: "Current",
      altImage: "Blue Sky Solar Racing Viridian Solar Car",
      description: 
        <p> 
          As a member of the Blue Sky Solar Racing team's mechanical subteam, I specialize in designing 
          vehicle components. I guarantee safety through simulations using CATIA and ANSYS, and I've played 
          a key role in crafting the braking system and clevises. This initiative, led by students, 
          cultivates practical skills and connects theoretical learning to real-world involvement in advancing 
          solar-powered vehicle technology.
        </p>,
      positions: [
        { title: "Mechanical Lead",
          startDate: "Jul. 2021",
          endDate: "Current",
          description: [
            "Oversee the implementation of all mechanical subsystems including braking, suspension, steering, latching and wheels",
            "Demonstrated experience performing engineering calculations and design reviews",
            "Design, validate & release mechanical portions of new product designs",
            "Coordinate and communicate with other disciplines to ensure project success. Other disciplines include Electrical, Electromechanical, Array, Aerobody, Structural, Fabrication and Advancement",
          ],
        },
        { title: "Braking Lead",
          startDate: "Mar. 2021",
          endDate: "Jul. 2021",
          description: [
            "Designed over 10 mechanical parts using CATIA for the solar racing car including clevises and brake connections",
            "Performed finite element analysis on 5+ clevises via Ansys and completed 10+ brake system designs using CATIA to meet World Solar Challenge safety regulations",
            "Documented over 5 Ansys simulation reports detailing stress analysis and safety factor to confirm safety to 30+ team members",
          ],
        },
      ],
      path: "/",
    },
    {
      img: concreteTobogganImage,
      title: "Concrete Toboggan",
      location: "University of Toronto, Toronto, ON",
      startDate: "May 2021",
      endDate: "Current",
      altImage: "UofT Concrete Toboggan 2020",
      description: 
        <p> 
          Our Concrete Toboggan Team is a dynamic group of students passionately engaged in designing, 
          building, and racing concrete toboggans.  Our diverse collaboration optimizes speed, steering, 
          and braking performance. Through unique themes and costumes, we foster team spirit and innovation, 
          constantly pushing the boundaries of toboggan engineering.
        </p>,
      positions: [
        { 
          position: "Braking Lead",
          startDate: "Jul. 2022",
          endDate: "Jul. 2023",
          description: [
            "Designed and optimized braking systems for concrete toboggan, enhancing performance and safety.",
            "Conducted comprehensive simulations to validate braking system efficiency and effectiveness.",
            "Ensured adherence to safety standards by implementing rigorous testing protocols and design enhancements.",
            "Collaborated within a multidisciplinary team to integrate brakes seamlessly into the overall toboggan design.",
            "Contributed to successful competition outcomes through innovative braking solutions and meticulous attention to detail.",
          ],
        },
        { 
          position: "Call of the Bog Game Project Lead",
          startDate: "May 2021",
          endDate: "Feb. 2022",
          description: [
            "Developed engaging game interactivity for a runner action video game, utilizing the LibGDX framework and Java",
            "Implemented a 2D physics engine, leveraging forces and spherical collision detection to ensure realistic gameplay mechanics.",
            "Collaborated with a team of five members to integrate visually appealing 2D graphical objects, including sprites and tile sets, using tools such as Krita, Tiled, and LibGDX.",
            "Conducted rigorous testing, iterating through over 50 versions to optimize the user experience, interface, and overall game performance.",
          ],
        },
        {
          position: "Costumes Lead",
          startDate: "Jul. 2021",
          endDate: "Jul. 2022",
          description: [
            "Spearheaded costume design to foster team unity, elevating team spirit and identity.",
            "Created unique hats, resulting in a 100% profit margin after selling the entire stock of 200 units.",
            "Collaborated closely with team members to align costume designs with overall theme and branding.",
            "Translated creative concepts into tangible costume pieces, showcasing strong attention to detail.",
            "Enhanced team camaraderie through innovative costume ideas, contributing to a memorable team experience.",
          ],
        },
      ],
      path: "/",
    },
    {
      img: froshTechTeamImage,
      title: "UofT Frosh Tech Team",
      location: "Toronto, Ontario",
      startDate: "Apr. 2022",
      endDate: "Aug. 2022",
      altImage: "Frosh Tech Team",
      description: 
        <p>
          The frosh tech team developed a user-friendly website, facilitating seamless registration for 
          over 1000 incoming students. Leveraging their technical expertise, they designed an intuitive 
          interface, integrated data processing, and ensured a smooth user experience. Their work streamlined 
          the enrollment process, enhancing efficiency and accessibility for both students and administrators.
        </p>,
      positions: [
        { title: "Full Stack Developer",
          startDate: "Apr. 2022",
          endDate: "Aug. 2022",
          description: [
            "Assisted in developing a website for 1000+ incoming students using Express.js and React, primarily focusing on CRUD operations for the backend.",
            "Designed payment backend to handle over 2000 payments ranging from $40-$100 using the Stripe API",
            "Consumed REST APIs using Axios to connect the frontend to the backend",
          ],
        },
      ],
      path: "/",
    },
    {
      img: brewofTImage,
      title: "Brew of T ",
      location: "",
      startDate: "",
      endDate: "",
      altImage: "",
      description: 
        <p>
          President of the University of Toronto brewing club, fostering a vibrant community of beer enthusiasts. 
          Organized events, workshops, and tastings, enhancing members' brewing skills and appreciation. Strengthened 
          club's presence through effective communication and strategic partnerships.
        </p>,
      positions: [
        { title: "President",
          startDate: "Apr. 2022",
          endDate: "Present",
          description: [
            "Facilitated a safe environment by partaking in active research of safety protocols to create standard operating procedures for brewing events",
            "Coordinated internal resources and third parties/vendors for the flawless execution of over 5 events",
            "Assisted in the definition of project scope and objectives, involving all relevant internal stakeholders and ensuring technical feasibility",
            "Coached team members by communicating job expectations, planning, monitoring, and appraising job results",
          ],
        },
        // { title: "Logistics",
        //   startDate: "",
        //   endDate: "",
        //   description: [],
        // },
      ],
      path: "/",
    },
    // {
    //   img: EAAImage,
    //   title: "Engineering Athletic Association (EAA)",
    //   location: "",
    //   startDate: "",
    //   endDate: "",
    //   altImage: "",
    //   description: 
    //     <p></p>,
    //   positions: [
    //     { title: "President",
    //       startDate: "Jun. 2021",
    //       endDate: "Present",
    //       description: [
    //       ],
    //     },
    //     { title: "Logistics",
    //       startDate: "",
    //       endDate: "",
    //       description: [],
    //     },
    //   ],
    //   path: "/",
    // },
    // {
    //   img: BNGImage,
    //   title: "Blue and Gold Committee",
    //   location: "",
    //   altImage: "",
    //   description: 
    //     <p>Blue and Gold Committee is the spirit committee of the Engineering Community 
    //     at the University of Toronto. It provides ample spirit within the community 
    //     by planning important events including Godiva week which is a week where 
    //     engineering students are able to do fun activities and have a blast. BnG is 
    //     a fundamental core in the Engineering Community. </p>,
    //   positions: [
    //     { title: "President",
    //       startDate: "Sep. 2021",
    //       endDate: "Jun. 2021",
    //       description: [
    //       ],
    //     },
    //   ],
    //   path: "/",
    // },
  ],

  projects: [
    {
      img: calloftheBogImage,
      title: "Call of the Bog - Runner Action Game",
      location: "",
      startDate: "",
      endDate: "",
      altImage: "",
      description: 
        <p>I took the initiative to become project lead and designed and coded game interactivity for 
        a runner action video game using the game engine, LibGDX. The team was made up of 3 and 
        required coordination to optimize work efficiency and project development and as project 
        lead, I assigned tasks and duties and delegated coding. The game required 2D physics engine 
        utilizing forces and spherical collision detection and response and integrated graphical 
        objects with the physics system utilizing sprites and tilesets to build 2D graphics. </p>,
      positions: [
        { title: "",
          startDate: "",
          endDate: "",
          description: [],
        },
        { title: "",
          startDate: "",
          endDate: "",
          description: [],
        },
      ],
      path: "/",
    },
    {
      img: gomokuImage,
      title: "Gomoku",
      location: "",
      startDate: "",
      endDate: "",
      altImage: "",
      description: 
        <p>Gomoku is a strategy board game where the winner is the player who first achieves an 
        unbroken sequence of five of his pieces in a row, a column, or a diagonal. Using Python, 
        I designed and implemented a Gomoku game and an autonomous player with a minimax 
        decision-making algorithm</p>,
      positions: [
        { title: "",
          startDate: "",
          endDate: "",
          description: [],
        },
        { title: "",
          startDate: "",
          endDate: "",
          description: [],
        },
      ],
      path: "/",
    },
    {
      img: seamCarvingImage,
      title: "Seam Carving",
      location: "",
      startDate: "",
      endDate: "",
      altImage: "",
      description: 
        <p>Seam-carving is an image resizing technique in which the image is reduced by 1 pixel 
        of width or height at a time. The great part of seam-carving is that it takes into 
        account of the most interesting features of an image (objects, subjects, aspect 
        ratio, etc.). I wrote seam-carving code using C. Seam-carving is now fundamental in 
        photoshop and other computer graphics applications.</p>,
      positions: [
        { title: "",
          startDate: "",
          endDate: "",
          description: [],
        },
        { title: "",
          startDate: "",
          endDate: "",
          description: [],
        },
      ],
      path: "/",
    },
  ],
};

// {
//   img: "",
//   title: "",
//   location: "",
//   startDate: "",
//   endDate: "",
//   altImage: "",
//   description: 
//     <p></p>,
//   positions: [
//     { title: "",
//       startDate: "",
//       endDate: "",
//       description: [],
//     },
//     { title: "",
//       startDate: "",
//       endDate: "",
//       description: [],
//     },
//   ],
//   path: "/",
// },
