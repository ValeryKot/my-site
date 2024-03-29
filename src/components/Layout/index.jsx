import {motion} from "framer-motion";
import {nanoid} from 'nanoid'


function Layout({ children }) { 
const id = nanoid();

const moveToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

return (
  <motion.div
    key={id}
    initial={{opacity: 0.1}}
    animate={{opacity: 1}}
    onAnimationComplete={moveToTop}
    transition={{duration: 0.55, ease: 'easeIn'}}>
    {children}
  </motion.div>
);};
export default Layout;