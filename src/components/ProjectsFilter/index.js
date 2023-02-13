import React, {useState} from 'react';
import styled from 'styled-components';
import {AnimatePresence, motion} from 'framer-motion';
import {BPT, bold, h2s, primaryHover, white} from '../design';
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

const AnimWr = styled.div`
  position: relative;
  padding: 0;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 24px;
  @media ${BPT.lg} {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
  @media ${BPT.md} {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
`;

const CardWr = styled(motion.div)`
  position: relative;
  cursor: pointer;
`;
const Cards = styled.div`
  float: left;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 105%;
  filter: brightness(90%);
  width: 100%;
  aspect-ratio: 325 / 225;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

const InsideText = styled.p`
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

  const handleFilter = selector => {
    if (selector === 'all') return setCards(data);

    setCards(data.filter(el => el.category === selector));
  };

  const openModal = dt => {
    setActive(true);
    setModalData(dt);
  };
  const closeModal = () => {
    setActive(false);
    setModalData({});
  };

  return (
    <Wr>
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
      <AnimWr>
        <AnimatePresence mode="popLayout">
          {cards.map(el => (
            <CardWr
              key={el.title}
              initial="rest"
              whileHover="hover"
              animate="rest"
              layout>
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
                layout>
                <InsideText as={motion.p} variants={textMotion}>
                  {el.title}
                </InsideText>
              </Cards>
            </CardWr>
          ))}
        </AnimatePresence>
      </AnimWr>
      {active && (
        <Modal
          active={active}
          onClose={closeModal}
          data={modalData}
        />
      )}
    </Wr>
  );
}
