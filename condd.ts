export const METADATA = {
  title: "Portfolio | Timbet Ekanem",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://ayushsingh.net/",
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
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
];

export const EMAIL = "timbetekanem@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/alphaayush/",
  github: "https://github.com/ayush013",
  medium: "https://alphaayush.medium.com/",
  instagram: "https://www.instagram.com/alphaayush/",
  facebook: "https://www.facebook.com/ayush013",
  dribbble: "https://dribbble.com/alphaayush",
  behance: "https://www.behance.net/alphaayush/",
  twitter: "https://twitter.com/ayush013",
  topmate: "https://www.topmate.io/alphaayush/",
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
    name: "Ariss WEB App",
    image: "/projects/deliver.jpg",
    blurImage: "/projects/deliver.jpg",
    description:
      "A FINTECH APPLICATION USED FOR BILLS PAYMENT, AIRTIME RECHARGE, TRANSFER TO BANKS, FUND WALLET FROM BANK, SEND MONEY THROUGH WALLET TO WALLET ETC",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://aries-f21cb.firebaseapp.com/",
    tech: ["javascript", "vue", "html", "vue", "vuetify", "git", "css"],
    // ,Vue, Vuetify, HTML, Javascript
  },
  {
    name: "Track Money For Firstbank",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description:
      "RACKMONEY IS USED BY FIRSTBANK OF NIGERIA TO ONBOARD, TRACK AND VIEW TRANSACTION RECORD OF THEIR POS MACHINES AND ALSO RECONCILE BILL WITH THE MERCHANT",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://www.huminos.com/",
    tech: ["angular", "material-design", "git"],
  },
  {
    name: "Payvice",
    image: "/projects/payvice.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description:
      "A FINTECH APPLICATION FOR VALUE ADDED SERVICES AND BILL PAYMENT",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dltlabs.com/",
    tech: ["javascript", "scss", "jquery", "html", "git"],
  },
  {
    name: "Paysure Web Application ",
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Built the application from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://paysure.netlify.app/",
    tech: ["tailwind", "angular", "gsap", "figma"],
  },
  {
    name: "EduTech",
    image: "/projects/ngx-quill-upload.jpg",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "A WEBSITE FOR GARDEN VENTURES OF NIGERIA",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://edu-tech.netlify.app/",
    tech: ["npm", "angular", "typescript"],
  },
  {
    name: "Coursegram",
    image: "/projects/huminos.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description:
      "A WEB APPLICATION FOR SAVING PROJECTS AND CROSS REFERENCING PAST PROJECTS",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://coursesgram.firebaseapp.com/",
    tech: ["javascript", "vue", "git"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
    "vue",
    "vuetify",
    "nuxtjs",
    "material-ui",
    "scss",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: [
    "git",
    "webpack",
    "gulp",
    "lightroom",
    "aftereffects",
    "wordpress",
    "nodejs",
  ],
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
    title: "FRONTEND ENGINEER - PAYHIPPO",
    size: ItemSize.SMALL,
    subtitle:
      "Spearheaded the development of responsive web interfaces for both client and admin platforms",
    image: "/timeline/reactindia.svg",
    slideImage: "/timeline/reactindia.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software developer(contract)- Solustack",
    size: ItemSize.SMALL,
    subtitle:
      "Lead the development of user interfaces for a chat and trading mobile app using Ionic.",
    image: "/timeline/hotstar.svg",
    slideImage: "/timeline/hotstar.jpeg",
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
    title: "UI/UX & FRONT-END DEVELOPER -ITEX Integrated Services",
    size: ItemSize.SMALL,
    subtitle: "Developed and led the creation of responsive",
    // web applications and user interfaces for financial institutions and e-commerce, spearheaded technical integrations, and managed key projects and team efforts.",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/flipkart.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title:
      "IT SUPPORT AND SOFTWARE DEVELOPER - Lagos Reproductive Healthcare Centre",
    size: ItemSize.SMALL,
    subtitle: " Participated in the Andela Certification for Android",
    //  collaborated with other teams to build scalable Apps.🎯",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-freelance.jpg",
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Motion Graphics (freelance)",
  //   size: ItemSize.SMALL,
  //   subtitle: "Motion Graphics content for Product Launch 🚀",
  //   image: "/timeline/octanner.svg",
  //   slideImage: "/timeline/aftereffects.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CONVERGE,
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
    title: "UI/UX AND SOFTWARE DEVELOPER - Teledom International Limited",
    size: ItemSize.SMALL,
    subtitle:
      "Developed four websites using WordPress, built Android applications with Android Studio and Java, and managed desktop and laptop repairs and maintenance.",
    image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Graduated from College 🎓",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
  //   image: "/timeline/akgec.svg",
  //   slideImage: "/timeline/farewell.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "WEB DEVELOPER - The Roothub",
    size: ItemSize.LARGE,
    subtitle:
      "Conducted HTML and CSS training for beginners, redesigned and maintained websites for improved performance, built web apps with Node and Express, and created graphic designs using Adobe Photoshop and Illustrator.",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-head.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on SVG animations",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

    slideImage: "/timeline/svg-lecture.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
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
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
