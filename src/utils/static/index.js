import home_icon from '../../images/icons/home.svg';
import about_icon from '../../images/icons/about.svg';
import resume_icon from '../../images/icons/resume.svg';
import projects_icon from '../../images/icons/projects.svg';
import contact_icon from '../../images/icons/contact.svg';
import blog_icon from '../../images/icons/blog.svg';
import fb_icon from '../../images/icons/facebook.svg';
import tw_icon from '../../images/icons/twitter.svg';
import li_icon from '../../images/icons/linkid.svg';
import tg_icon from '../../images/icons/telegram.svg';

export const PHONE = '+375336320623';
export const E_MAIL = 'kot.valery@gmail.com';
export const ADDRESS = 'Plehanova street, Minsk, Republic of Belarus, 220085';
export const GITHUB = 'https://github.com/ValeryKot';
export const FACEBOOK = 'https://www.facebook.com/kot.valery';
export const TWITTER = 'https://twitter.com/Cyborcatt';
export const LINKEDIN = 'https://www.linkedin.com/in/valerykot/';
export const TELEGRAM = 'https://t.me/Valery_iKot';

export const WP_API =
  'https://public-api.wordpress.com/rest/v1.1/sites/213749495/posts/';

export const FEEDBACK =
  'https://script.google.com/macros/s/AKfycbwPAPHFUW4zhLM03GAGO3SlL8pLqefysdSOZIXO8VqJNgEDTC-LL2Qk_H0b9xErfcY/exec';

export const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const CATEGORIES = [
  {title: 'Home', icon: home_icon, value: 'HOME'},
  {title: 'About', icon: about_icon, value: 'ABOUT'},
  {title: 'Resume', icon: resume_icon, value: 'RESUME'},
  {title: 'Projects', icon: projects_icon, value: 'PROJECTS'},
  {title: 'Contact', icon: contact_icon, value: 'CONTACT'},
  {title: 'My Blog', icon: blog_icon, value: 'BLOG'},
];

export const PERSONAL_INFO = [
  {title: 'First Name:', value: 'Valery'},
  {title: 'Last Name:', value: 'Kot'},
  {title: 'Age:', value: '45 Years'},
  {title: 'Nationality:', value: 'Belarusian'},
  {title: 'Freelance:', value: 'Available', label: true},
  {title: 'Address:', value: 'Belarus'},
  {title: 'Phone:', value: PHONE, link: `tel:${PHONE}`},
  {title: 'Email:', value: E_MAIL, link: `mailto:${E_MAIL}`},
  {title: 'GitHub:', value: 'ValeryKot', link: GITHUB},
  {title: 'Languages:', value: 'Russian, English(A1)'},
];

export const SOCIAL_LINKS = [
  {icon: fb_icon, link: FACEBOOK},
  {icon: tw_icon, link: TWITTER},
  {icon: li_icon, link: LINKEDIN},
  {icon: tg_icon, link: TELEGRAM},
];

export const STATS_DATA = [
  {value: '999', plus: '+', title: 'MONT’S OF', subtitle: 'EXPERIENCE'},
  {value: '4', plus: '', title: 'Completed', subtitle: 'projects'},
  {value: '3', plus: '', title: 'Happy', subtitle: 'customers'},
];

// export const SKILLS_DATA = [
//   {value: 100, title: 'html'},
//   {value: 100, title: 'javascript'},
//   {value: 100, title: 'css'},
//   {value: 75, title: 'react'},
//   {value: 75, title: 'Responsive Web Design'},
//   {value: 25, title: 'Tailwind css'},
//   {value: 25, title: 'TypeScript'},
//   {value: 75, title: 'Figma'},
// ];
export const SUMMARY = [
  'I am a front-end developer focused on creating SPA using React (JS or TS).',
  "I'm looking for a full time remote job, also willing to consider relocation.",
  'Thanks to technical education and extensive work experience, I have analytical skills thinking and management.',
];

export const EXPERIENCE = [
  {
    time: '08/2022 - PRESENT',
    position: 'FRONT-END DEVELOPER',
    company: 'MAIND DEV',
    summary:
      'Working as part of a development team on the design and implementation of software applications and sites, including current technologies and programming languages such as React, Javascript.',
    skills: [
      'Interacted with the team.',
      'Managed several responsive websites from start to finish using HTML, CSS, JavaScript and React with 100% client satisfaction',
      'Fixing bugs from existing websites and implemented enhancements that improved functionality and efficienty',
      'Implementing of reused UI components in different projects',
      'Refactoring existing components',
      'Created HTML email templates for mailing list',
    ],
    open: true,
  },
  {
    time: '07/1999 - 07/2022',
    position: 'Head of various departments',
    company: 'Various manufacturing companies',
    summary: 'Worked as a head in various manufacturing companies',
    skills: [
      'Control production',
      'Organizational skills',
      'Work With suppliers',
      'Control projects',
      'Production planning',
      'Holding presentations',
      'Control staff',
      'Analytical thinking',
      'Strategic thinking',
      'Doing negotiations',
      'Financial planning',
      'Time managment',
    ],
    open: false,
  },
];
export const EDUCATION = [
  {
    time: '06/2022 - 09/2022',
    position: 'Front End Developer Certification',
    company: 'freeCodeCamp.org',
    summary:
      'Developer Certification, representing approximately 300 hours of coursework.',
    skills: [
      'Analytical approach',
      'Web development basics',
      'Basic algorithms',
    ],
  },
  {
    time: '04/2022 - 06/2022',
    position: 'JavaScript Developer Certification',
    company: 'freeCodeCamp.org',
    summary:
      'Developer Certification, representing approximately 300 hours of coursework.',
    skills: [
      "Ability to read other people's code",
      'Ability to write simple working code',
    ],
  },
  {
    time: '09/1994 - 06/1999',
    position: 'Technological Engineer of Printing Production',
    company: 'Belarusian State Technological University',
    summary: 'I graduated with skills that I used and improved further.',
    // skills: ['Built the coursework projects', 'Got all automated test suite'],
  },
];

export const PROJECTS_DATA = [
  {
    category: 'projects',
    title: 'OAZIZ',
    type: 'Web application',
    technology: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.JS',
      'Responsive Web Design',
    ],
    libraries: ['Apollo Client', 'GraphQL', 'Styled Components', 'Swiper.JS'],
    client: 'OAZIZ Ecosystem',
    link: 'https://oaziz.merkeleon.com/',
    file: require('../../images/pr_1.png'),
  },
  {
    category: 'projects',
    title: 'FAIR-TAXES',
    type: 'Website',
    technology: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design'],
    libraries: ['Tailwind CSS', 'Swiper.JS'],
    client: 'FAIR TAXES',
    link: 'https://fair-taxes.ru/',
    file: require('../../images/pr_2.png'),
  },
  {
    category: 'projects',
    title: 'SanR Explorer',
    type: 'Website',
    technology: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.JS',
      'TypeScript',
      'Responsive Web Design',
    ],
    libraries: ['Apollo Client', 'GraphQL', 'Material UI'],
    client: 'SanR',
    link: 'https://sanrchain-explorer.santiment.net/',
    file: require('../../images/pr_3.png'),
  },
  {
    category: 'projects',
    title: 'SanR Staking landing',
    type: 'Website',
    technology: ['HTML', 'CSS', 'JavaScript', 'React.JS'],
    libraries: ['Styled Components', 'Airbnb-prop-types'],
    client: 'SanR',
    link: 'https://sanr.app/?utm_medium=emai&utm_campaign=staking',
    file: require('../../images/pr_4.png'),
  },
  {
    category: 'projects',
    title: 'SanR.App',
    type: 'Website',
    technology: ['HTML', 'CSS', 'JavaScript', 'React.JS', 'TypeScript'],
    libraries: ['Styled Components', 'Airbnb-prop-types'],
    client: 'SanR',
    link: 'https://sanr.app/?utm_medium=emai&utm_campaign=staking',
    file: require('../../images/pr_5.png'),
  },
  {
    category: 'projects',
    title: 'Valery Kot CV app',
    type: 'Website',
    technology: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.JS',
      'Responsive Web Design',
    ],
    libraries: ['Styled Components', 'Framer motion', 'React Collapse'],
    client: 'Valery Kot',
    link: 'https://my-site-valerykot.vercel.app/',
    file: require('../../images/pr_6.png'),
  },
  {
    category: 'projects',
    title: 'Russian highways (in progress)',
    type: 'Website',
    technology: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.JS',
      'Responsive Web Design',
    ],
    libraries: ['Styled Components', 'Strapi JS'],
    client: 'Russian highways',
    link: 'https://test.rador.org/',
    file: require('../../images/pr_7.png'),
  },
  {
    category: 'youtube',
    title: 'Ulbi TV',
    type: 'Youtube channel',
    technology: [
      'JavaScript',
      'React.JS',
      'Front-end',
      'Back-end',
      'Databases',
    ],
    libraries: [],
    client: '',
    link: 'https://www.youtube.com/@UlbiTV',
    file: require('../../images/video_1.png'),
  },
];