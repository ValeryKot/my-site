import home_icon from '../../images/icons/home.svg';
import about_icon from '../../images/icons/about.svg';
import resume_icon from '../../images/icons/resume.svg';
import projects_icon from '../../images/icons/projects.svg';
import contact_icon from '../../images/icons/contact.svg';
import blog_icon from '../../images/icons/blog.svg';

export const PHONE = '+375336320623';
export const E_MAIL = 'kot.valery@gmail.com';
export const ADDRESS = "Plehanova street, Minsk, \nRepublic of Belarus, 220085";
export const GITHUB = 'https://github.com/ValeryKot';

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

export const STATS_DATA = [
  {value: '999', plus: '+', title: 'MONT’S OF', subtitle: 'EXPERIENCE'},
  {value: '4', plus: '', title: 'Completed', subtitle: 'projects'},
  {value: '3', plus: '', title: 'Happy', subtitle: 'customers'},
];

export const SKILLS_DATA = [
  {value: 100, title: 'html'},
  {value: 100, title: 'javascript'},
  {value: 100, title: 'css'},
  {value: 75, title: 'react'},
  {value: 75, title: 'Responsive Web Design'},
  {value: 25, title: 'Tailwind css'},
  {value: 25, title: 'TypeScript'},
  {value: 75, title: 'Figma'},
];

export const EXPERIENCE = [
  {
    time: '08/2022 - PRESENT',
    position: 'JUNIOR FRONT-END DEVELOPER',
    company: 'MAIND DEV',
    summary:
      'Working as part of a development team on the design and implementation of software applications and sites, including current technologies and programming languages such as React, Javascript.',
    skills: [
      'Managed 4+ responsive websites from start to finish using HTML, CSS, JavaScript and React with 100% client satisfaction',
      'Fixing bugs from existing websites and implemented enhancements that improved functionality and efficienty',
      'Created Reusable React-components in different projects',
      'Created HTML email templates for mailing list',
    ],
    open: true,
  },
];
export const EDUCATION = [
  {
    time: '04/2022 - 06/2022',
    position: 'JavaScript Developer Certification',
    company: 'freeCodeCamp.org',
    summary:
      'Developer Certification, representing approximately 300 hours of coursework.',
    skills: [
      'Built the coursework projects',
      'Got all automated test suite',
    ],
  },
  {
    time: '06/2022 - 09/2022',
    position: 'Front End Developer Certification',
    company: 'freeCodeCamp.org',
    summary:
      'Developer Certification, representing approximately 300 hours of coursework.',
    skills: [
      'Built the coursework projects',
      'Got all automated test suite',
    ],
  },
];

export const PROJECTS_DATA = [
  {
    category: 'projects',
    title: 'OAZIZ',
    type: 'Web application',
    technology: ['HTML', 'CSS', 'JavaScript', 'React.JS'],
    libraries: ['Apollo Client', 'GraphQL', 'Styled Components', 'Swiper.JS'],
    client: 'OAZIZ Ecosystem',
    link: 'https://oaziz.merkeleon.com/',
    file: require('../../images/pr_1.png'),
  },
  {
    category: 'projects',
    title: 'FAIR-TAXES',
    type: 'Website',
    technology: ['HTML', 'CSS', 'JavaScript', 'React.JS'],
    libraries: ['Tailwind CSS', 'Swiper.JS'],
    client: 'FAIR TAXES',
    link: 'https://fair-taxes.ru/',
    file: require('../../images/pr_2.png'),
  },
  {
    category: 'youtube',
    title: 'Ulbi TV',
    type: 'Youtube channel',
    technology: ['JavaScript', 'React.JS', 'Front-end', 'Back-end', 'Databases'],
    libraries: [],
    client: '',
    link: 'https://www.youtube.com/@UlbiTV',
    file: require('../../images/video_1.png'),
  },
];