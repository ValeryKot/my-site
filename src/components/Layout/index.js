import { motion } from "framer-motion";

const Layout = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 100,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;