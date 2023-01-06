import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {megaTx, black} from '../components/design/Fonts';

const Title = styled.div`
  font-family: 'OpenSans';
  /* font-family: 'Poppins'; */
  ${megaTx}
  ${black};
  color: red;
`;

function TopTitle() {
  return <Title as={motion.div} initial={{y: -2000}} animate={{y: 100,
    backgroundColor: "#b5b5b5",
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
    position: "fixed",
    transitionEnd: {
      display: "none",
    },}} transition={{duration: 2}}>TopTitle</Title>;
}

export default TopTitle;
