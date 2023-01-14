import React, {useState} from 'react';
import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import {bodyMd, bold, h2s, primaryHover, semibold, white} from '../design';
import {FilterButton} from './FilterButton';
import {Modal} from '../Modal';

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
  gap: 8px;
`;

const CardWr = styled(motion.div)`
  position: relative;
  cursor: pointer;
`;
const Cards = styled.div`
  float: left;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 105%;
  filter: brightness(90%);
  width: 30%;
  margin: 15px;
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;
const InsideText = styled.p`
  /* color: ${(props) => props.theme.title}; */
  color: ${white};
  ${h2s};
  ${bold};
  filter: brightness(100%);
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

export default function ProjectsFilter({data}) {
  const [cards, setCards] = useState(data);
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(false);
  const [modalData, setModalData] = useState({});

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

  const openModal = (dt) => {
    setActive(true);
    setModalData(dt);
  };
  const closeModal = () => {
    setActive(false);
    setModalData({});
  };

  return (
    <Wr>
      {active && <Modal
        active={active}
        onClose={closeModal}
        data={modalData}
        // width={'300px'}
      />}
      <ButtonBox>
        {buttons.map((btn, index) => (
          <FilterButton
            key={btn}
            text={btn}
            handleClick={() => {
              handleFilter(btn);
              setSelected(index);
            }}
            isSelected={selected === index}
          />
        ))}
      </ButtonBox>
      <AnimatePresence mode='popLayout'>
        {cards.map((el) => (
          <CardWr
            key={el.title}
            initial='rest'
            whileHover='hover'
            animate='rest'
            layout
          >
            <Cards
              onClick={() => openModal(el)}
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
              layout
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
