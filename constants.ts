export const METADATA = {
  title: "Portfolio | Timbet Ekanem",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend/backend architecture.",
  // siteUrl: "https://ayushsingh.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I strategize and implement technology solutions",
  "I oversee the development of modern frontend apps",
  "I design dynamic user experiences",
  "I drive innovation in technology and development",
  "I ensure scalable and robust technology architectures",
  "I lead and manage technology teams",
];

export const EMAIL = "timbetekanem@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/timbet-ekanem",
  github: "https://github.com/teembet",
  instagram: "https://www.instagram.com/teembet/",
  facebook: "https://www.facebook.com/Timbetobong",
  twitter: "https://x.com/teem2016",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "BZ-ONE",
    image: "/projects/bzone.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description:
      "A PLATFORM PROMOTING SUPPLIER DIVERSITY AND INCLUSION IN BECHTEL'S GLOBAL SUPPLY CHAIN THROUGH BUSINESS OPPORTUNITIES AND RESOURCES.",
    gradient: ["#1F6582", "#21B073"],

    url: "https://diversebusinessbechtel.com/",
    tech: ["javascript", "react", "aws"],
    // ,Vue, Vuetify, HTML, Javascript
  },
  {
    name: "MICKMAQ",
    image: "/projects/mickmaq.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description:
      "AN E-COMMERCE PLATFORM OFFERING A WIDE RANGE OF PRODUCTS, INCLUDING ELECTRONICS, FASHION, AND HOME APPLIANCES, WITH SECURE ONLINE PAYMENT OPTIONS.",
    gradient: ["#1F6582", "#FFD700"],

    url: "https://play.google.com/store/apps/details?id=com.mickmaq&hl=en&gl=US",
    tech: ["javascript", "react", "aws"],
    // ,Vue, Vuetify, HTML, Javascript
  },
  {
    name: "PAYHIPPO",
    image: "/projects/payhippo.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description:
      "A FINTECH COMPANY PROVIDING QUICK, EASY, AND ACCESSIBLE LOANS TO SMALL BUSINESSES IN NIGERIA TO SUPPORT THEIR GROWTH AND SUCCESS.",
    gradient: ["#1F6582", "#1ABCFE"],

    url: "https://payhippo.ng/",
    tech: ["javascript", "react", "aws"],
    // ,Vue, Vuetify, HTML, Javascript
  },

  {
    name: "TRACKMONEY",
    image: "/projects/tm.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description:
      "TRACKMONEY IS USED BY SEVERAL BANKS IN NIGERIA TO ONBOARD, TRACK AND VIEW TRANSACTION RECORD OF THEIR POS MACHINES AND ALSO RECONCILE BILL WITH THE MERCHANT",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://iisysgroup.com/track-money",
    tech: ["angular", "material-design", "nodejs"],
  },
  {
    name: "ITEX",
    image: "/projects/itex.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description:
      "A FINTECH COMPANY PROVIDING COMPREHENSIVE IT SOLUTIONS AND SERVICES, INCLUDING SOFTWARE DEVELOPMENT, CLOUD COMPUTING, AND CYBERSECURITY, TO HELP BUSINESSES OPTIMIZE THEIR DIGITAL INFRASTRUCTURE AND OPERATIONS.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://iisysgroup.com/",
    tech: ["javascript", "angular", "nodejs"],
  },
  {
    name: "PAYVICE",
    image: "/projects/payvice.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description:
      "A FINTECH PLATFORM OFFERING DIGITAL PAYMENT SOLUTIONS, INCLUDING BILLS PAYMENT, MONEY TRANSFERS, AND ONLINE PURCHASES, FOR CONSUMERS AND BUSINESSES.",
    gradient: ["#245B57", "#004741"],
    url: "https://www.payvice.com/",
    tech: ["javascript", "jquery", "nodejs"],
  },
  {
    name: "AFRIMART",
    image: "/projects/afrimartsc.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description:
      "AN E-COMMERCE PLATFORM CONNECTING AFRICAN BUSINESSES WITH GLOBAL MARKETS, FACILITATING TRADE THROUGH A SECURE AND USER-FRIENDLY ONLINE MARKETPLACE FOR A WIDE RANGE OF PRODUCTS AND SERVICES.",
    gradient: ["#245B57", "#004741"],
    url: "https://afrimart.com/en",
    tech: ["javascript", "react", "nodejs"],
  },
  {
    name: "SOLUSTACK",
    image: "/projects/solustack.png",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description:
      "SOLUSTACK IS A TECHNOLOGY COMPANY SPECIALIZING IN CLOUD SOLUTIONS, SOFTWARE DEVELOPMENT, AND IT CONSULTING SERVICES TO DRIVE BUSINESS INNOVATION AND EFFICIENCY.🚀",
    gradient: ["#003052", "#0E2C8B"],
    url: "https://solustack.tech/",
    tech: ["tailwind", "next", "gsap"],
  },
  {
    name: "TEXAS BULLY REGISTRY",
    image: "/projects/tbr.png",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description:
      "TEXAS BULLY REGISTRY IS A PLATFORM DEDICATED TO REGISTERING, TRACKING, AND SHOWCASING AMERICAN BULLY DOGS IN TEXAS, PROVIDING RESOURCES AND COMMUNITY CONNECTIONS FOR BREED ENTHUSIASTS.",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://texas-bully-registry.vercel.app/",
    tech: ["typescript", "react", "nodejs"],
  },
  {
    name: "COURSESGRAM",
    image: "/projects/coursegram.png",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description:
      "COURSESGRAM IS AN ONLINE EDUCATION PLATFORM PROVIDING ACCESS TO A VARIETY OF COURSES ACROSS DIFFERENT DISCIPLINES TO ENHANCE LEARNING AND PROFESSIONAL DEVELOPMENT.",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://coursesgram.firebaseapp.com/",
    tech: ["javascript", "vue"],
  },
  {
    name: "ARISS",
    image: "/projects/deliver.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description:
      "ARIES IS A SAMPLE WEB APPLICATION DESIGNED TO FACILITATE FOOD DELIVERY SERVICES FOR SCHOOLS, OFFERING AN EFFICIENT AND USER-FRIENDLY PLATFORM FOR ORDERING AND DELIVERING MEALS TO STUDENTS.",
    gradient: ["#1F6582", "#771E1E"],
    url: "https://aries-f21cb.firebaseapp.com/",
    tech: ["javascript", "vue", "vuetify"],
    // ,Vue, Vuetify, HTML, Javascript
  },
  {
    name: "WE THE PEOPLE",
    image: "/projects/wtp.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "One-stop platform for all things Nigerian Politics",
    gradient: ["#1F6582", "#771E1E"],
    url: "https://xd.adobe.com/view/2ecaae90-ac41-4d8b-a8af-3d956c630f67-7b99/",
    tech: ["xd", "react"],
    // ,Vue, Vuetify, HTML, Javascript
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "next",
    "angular",
    "tailwind",
    "vue",
    "nuxtjs",
  ],
  userInterface: ["figma", "xd"],
  other: ["git", "aws", "nodejs"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Lead/CTO - NEBULA LOGIX",
    titleLink: "https://main.d1nf2ta7l19xon.amplifyapp.com/",
    size: ItemSize.SMALL,
    subtitle:
      "Spearheaded the development of highly responsive web interfaces for both client-facing and administrative platforms for Bechtel Company, ensuring a seamless user experience across all devices. This involved collaborating closely with cross-functional teams to gather requirements, implementing cutting-edge front-end technologies, and conducting thorough testing and optimization to meet the company's stringent performance and usability standards. The resulting interfaces not only enhanced operational efficiency but also significantly improved user engagement and satisfaction.",
    image: "/timeline/nebula.svg",
    slideImage: "/timeline/nebula.svg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Lead - MICKMAQ",
    titleLink: "https://www.mickmaq.com/",
    size: ItemSize.SMALL,
    subtitle:
      "Spearheaded the comprehensive development of highly responsive web, mobile, and administrative interfaces, ensuring seamless functionality and an intuitive user experience across all platforms. This involved conducting extensive user research to understand the needs of diverse user groups, designing adaptive layouts and interactive elements using the latest front-end technologies, and rigorously testing the interfaces for compatibility and performance on a wide range of devices and browsers. ",
    image: "/timeline/mickmaq.svg",
    slideImage: "/timeline/mickmaq.svg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "SOFTWARE ENGINEER - PAYHIPPO",
    titleLink: "https://payhippo.ng/",
    size: ItemSize.SMALL,
    subtitle:
      "Spearheaded the development of highly responsive web interfaces for both client-facing and administrative platforms, focusing on creating seamless and intuitive user experiences. This comprehensive project involved leveraging the latest front-end technologies, including HTML5, CSS3, and JavaScript frameworks such as React, to build dynamic and interactive user interfaces. I collaborated closely with UI/UX designers to translate design prototypes into functional code, ensuring that all interfaces were not only visually appealing but also highly functional and accessible.",
    image: "/timeline/payhippo.svg",
    slideImage: "/timeline/payhippo.svg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "SOFTWARE ENGINEER - SOLUSTACK",
    titleLink: "https://solustack.tech/",
    size: ItemSize.SMALL,
    subtitle:
      "Lead the development of user interfaces for a sophisticated chat and trading mobile application using the Ionic framework, ensuring a seamless and intuitive user experience across both iOS and Android platforms. This project entailed designing and implementing interactive and responsive UI components, leveraging Ionic's rich library of pre-built elements and customizing them to meet specific user needs and business requirements.",
    image: "/timeline/ionic.svg",
    slideImage: "/timeline/solustack.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "LEAD UI/UX & FRONT-END ENGINEER - ITEX INTEGRATED SERVICES",
    titleLink: "https://iisysgroup.com/",
    size: ItemSize.SMALL,
    subtitle:
      "Spearheaded the creation of responsive web applications and user interfaces for financial institutions and e-commerce platforms. I directed technical integrations, managed key projects, and coordinated team efforts to ensure the delivery of high-quality, user-centric solutions. Through close collaboration with cross-functional teams, I ensured that design and functionality met client requirements and industry standards, ultimately enhancing user satisfaction and operational efficiency",
    image: "/timeline/ITE.png",
    slideImage: "/timeline/ITE.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title:
  //     "IT SUPPORT AND SOFTWARE DEVELOPER - Lagos Reproductive Healthcare Centre",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     " Participated in the Andela Certification for Android collaborated with other teams to build scalable Apps.🎯",
  //   image: "/timeline/huminos.svg",
  //   slideImage: "/timeline/huminos-freelance.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "SOFTWARE DEVELOPER - Teledom International Limited",
    size: ItemSize.SMALL,
    titleLink: "https://teledominternational.net/",
    subtitle:
      " Developed websites using WordPress, built Android applications with Android Studio and managed desktop and laptop repairs and maintenance. Through these projects, I gained valuable experience in web development, mobile application development, and hardware troubleshooting, enhancing my technical skills and problem-solving abilities.",
    image: "/timeline/teledom.png",
    slideImage: "/timeline/teledom.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "WEB DEVELOPER - The Roothub",
    size: ItemSize.SMALL,
    titleLink: "https://theroothub.com/",
    subtitle:
      "Conducted HTML and CSS training for beginners, redesigned and maintained websites for improved performance, built web applications using Node and Express, and created graphic designs with Adobe Photoshop and Illustrator. These experiences allowed me to enhance my web development skills, optimize website functionality, and develop a strong foundation in graphic and web design.",
    image: "/timeline/roothub.png",
    slideImage: "/timeline/roothub.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
  titleLink?: string;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}
