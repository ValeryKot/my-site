import home_icon from '../../images/icons/home.svg';
import about_icon from '../../images/icons/about.svg';
import resume_icon from '../../images/icons/resume.svg';
import projects_icon from '../../images/icons/projects.svg';
import contact_icon from '../../images/icons/contact.svg';
import blog_icon from '../../images/icons/blog.svg';

export const PHONE = '+375336320623';
export const E_MAIL = 'kot.valery@gmail.com';
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