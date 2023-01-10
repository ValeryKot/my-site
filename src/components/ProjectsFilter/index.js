import React, {useState} from 'react';
import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import {PROJECTS_DATA as data} from '../../utils/static';
import {bodyMd, bold, h2s, primaryHover, semibold} from '../design';
import {FilterButton} from './FilterButton';

const Wr = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  gap: 15px;
`;

const CardWr = styled(motion.div)`
  position: relative;
  cursor: pointer;
`;
const Cards = styled.div`
  float: left;
  /* background-color: none; */
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 105%;
  width: 30%;
  margin: 15px;
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;
const InsideText = styled.p`
  color: ${(props) => props.theme.title};
  ${h2s};
  ${bold};
`;

const textMotion = {
  rest: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.15,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};
console.log(data[0]);

export default function ProjectsFilter({data}) {
  const [cards, setCards] = useState(data);
  const [selected, setSelected] = useState(0);

  const buttons = data.reduce(
    (acc, element) => {
      if (acc.includes(element.category)) return acc;

      return [...acc, element.category];
    },
    ['all']
  );

  const handleFilter = (selector) => {
    if (selector === 'all') return setCards(data);

    setCards(data.filter((el) => el.category === selector));
  };
  return (
    <Wr>
      <ButtonBox>
        {buttons.map((btn, index) => (
          <FilterButton
            key={btn}
            text={btn}
            handleClick={() => {handleFilter(btn); setSelected(index)}}
            isSelected={selected === index}
          />
        ))}
      </ButtonBox>
      <AnimatePresence mode='wait'>
        {cards.map((el) => (
          <CardWr
            key={el.title}
            initial='rest'
            whileHover='hover'
            animate='rest'
            layout
          >
            <Cards
              image={el.file}
              as={motion.div}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              whileHover={{
                backgroundColor: primaryHover,
                backgroundImage: 'none',
              }}
              transition={{ease: 'easeInOut', type: 'tween', duration: 0.35}}
            >
              <InsideText as={motion.p} variants={textMotion}>
                {el.title}
              </InsideText>
            </Cards>
          </CardWr>
        ))}
      </AnimatePresence>
    </Wr>
  );
}
