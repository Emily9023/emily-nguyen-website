import stampedImage from '../../assets/Experience/bluesky.jpg';
import westEndImage from '../../assets/Experience/westendymcapool.jpg';

import blueskyPicture from '../../assets/Experience/bluesky.jpg';
import concreteTobogganImage from '../../assets/Experience/concretetbog.jpg';
import froshTechTeamImage from '../../assets/Experience/westendymcapool.jpg';
import brewofTImage from '../../assets/Experience/brewoft.png';
import EAAImage from '../../assets/Experience/EAA.png';
import BNGImage from '../../assets/Experience/bngcommittee.png';

import calloftheBogImage from '../../assets/Experience/CalloftheBog.png';
import gomokuImage from '../../assets/Experience/gomoku.png';
import seamCarvingImage from '../../assets/Experience/seamcarving-newnew.png';


export const experienceContent = {
  professional: [
    {
      img: stampedImage,
      title: "Stamped Incorporation",
      location: "Quebec City, QC",
      altImage: "Stamped Incorporation",
      tools: "Ruby, Rails, PostgreSQL, RSpec, Google Analytics",
      description: 
        <p>
        As a former Junior Software Developer, I gained valuable experience in software development and data analytics. 
        During my internship, I specialized in designing and developing Ruby on Rails dashboards to process database 
        information for clients. In my previous role, I initiated the implementation of a Google Analytics-based analytics 
        system, which provided valuable insights into user behavior and app functionality. Additionally, I successfully 
        integrated an AI model to automate account mapping, significantly reducing manual labor with high confidence 
        levels. I was committed to delivering efficient solutions and making significant contributions to projects with 
        my passion for software development and data-driven solutions.</p>,
      positions: [
        { title: "Junior Software Developer",
          startDate: "Aug. 2022",
          endDate: "Present",
          description: [
            "Initiated the implementation of an analytics system using Google Analytics to acquire user data for insights about the app's functionality",
            "Integrated an AI model to automate account mapping and decrease manual labor with an average confidence level of 85+%",
          ],
        },
        { title: "Software Development Intern",
          startDate: "May 2022",
          endDate: "Aug. 2022",
          description: [
            "Designed and developed 3 dashboards to process database information stored in PostgreSQL for clients using Ruby on Rails",
            "Learned financial basics to design for information optimization and enhance user experience by selecting and arranging information systematically for accountant stakeholders",
            "Implemented a system to analyze the financial activity of over 100 engagements to determine the priority of work",
            "Developed unit tests to ensure complete code coverage using RSpec",
          ],
        },
      ],
      path: "/",
    },
    {
      img: westEndImage,
      title: "West End YMCA",
      location: "Toronto, ON",
      startDate: "temp",
      endDate: "temp",
      altImage: "Lifeguard and Swimming Instructor",
      description: 
        <p>As a lifeguard/swimming instructor, I am responsible for maintaining safety in the 
          facility and for providing high-quality in-water swim lessons for all ages, including 
          students with special needs. I keep clients safe, I am required to maintain my training 
          to handle emergency situations.
          I have learned to identify and resolve problems efficiently and communicate effectively 
          to build strong interpersonal relationships. Due to the demands of my job, I provided 
          quality customer service by always positively interacting with my clients to build 
          relationships and trust. My exposure to a variety of different ages has allowed me to 
          gain experience effectively communicating to accommodate a variety of different people. 
          In addition, I gained experience working with a team to identify and minimize hazards 
          within the environment through creative problem solving and critical thinking.</p>,
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
          startDate: "temp",
          endDate: "temp",
          description: [

          ],
        },
        { title: "Lifeguard and Swimming Instructor",
          startDate: "temp",
          endDate: "temp1",
          description: [],
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
        <p> The Blue Sky Solar Racing team is a student-led design team that constructs 
          and designs solar-powered vehicles. The team encompasses a variety of diverse 
          talented students comprising of 7 subteams, I am a member of the mechanical 
          subteam. The team provides attention to design sustainable vehicles and 
          delivers valuable technical training that bridges theoretical knowledge from 
          schooling to practical hands-on experience. 

          As a member, I help in designing parts for the car as well as running 
          simulations to ensure that the parts are safe. As a team member, I am 
          required to use CATIA, a CAD software, to provide a 3D modeling prototype 
          of the part. Using ANSYS, I run simulations on the part to check if the part 
          is able to withstand the force load with acceptable safety. In my role, I have 
          designed the braking system aswell as clevises.
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
        <p> The Concrete Toboggan is a student-led design team that designs and builds a 
          concrete toboggan. The toboggan is raced against toboggans all over Canada, 
          testing for speed, steering and braking as well are spirit-sided components 
          such as theme design. 

          As a costumes lead, I am required to design, order, and manufacture 30 
          costumes that represent the theme of the concrete toboggan. This role is 
          important to create a sense of spirit and cohesion within the team. Aside 
          from my delegations as a spirit lead, I am fully immersed in the work of the 
          design side; I partake in design lead meetings, providing input and help 
          design and brainstorm for the concrete toboggan.
        </p>,
      positions: [
        { 
          position: "Braking Lead",
          startDate: "temp",
          endDate: "Current",
          description: [""],
        },
        {
          position: "Costumes Lead",
          startDate: "temp",
          endDate: "temp",
          description: [""],
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
        <p></p>,
      positions: [
        { title: "Full Stack Developer",
          startDate: "Apr. 2022",
          endDate: "Aug. 2022",
          description: [
            "Assisted in developing a website for 1000+ incoming students using Express.js and React , primarily focusing on CRUD operations for the backend",
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
        <p></p>,
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
        { title: "Logistics",
          startDate: "",
          endDate: "",
          description: [],
        },
      ],
      path: "/",
    },
    {
      img: EAAImage,
      title: "Engineering Athletic Association (EAA)",
      location: "",
      startDate: "",
      endDate: "",
      altImage: "",
      description: 
        <p></p>,
      positions: [
        { title: "President",
          startDate: "Jun. 2021",
          endDate: "Present",
          description: [
          ],
        },
        { title: "Logistics",
          startDate: "",
          endDate: "",
          description: [],
        },
      ],
      path: "/",
    },
    {
      img: BNGImage,
      title: "Blue and Gold Committee",
      location: "",
      altImage: "",
      description: 
        <p>Blue and Gold Committee is the spirit committee of the Engineering Community 
        at the University of Toronto. It provides ample spirit within the community 
        by planning important events including Godiva week which is a week where 
        engineering students are able to do fun activities and have a blast. BnG is 
        a fundamental core in the Engineering Community. </p>,
      positions: [
        { title: "President",
          startDate: "Sep. 2021",
          endDate: "Jun. 2021",
          description: [
          ],
        },
      ],
      path: "/",
    },
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
