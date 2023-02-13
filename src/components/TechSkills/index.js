import React from 'react';
import styled from 'styled-components';
import {BPT, semibold, h2l, bodyMd, primaryLt} from '../../components/design';

const Wr = styled.div`
  width: 100%;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &::before {
    content: 'TECHNICAL/PRODUCT SKILLS';
    text-transform: uppercase;
    text-align: center;
    ${h2l};
    ${semibold};
    color: ${props => props.theme.title};
  }
  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

const BoxWr = styled.div`
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 24px;
  @media ${BPT.lg} {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
  @media ${BPT.md} {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
`;

const Box = styled.div`
  max-width: calc(50% - 15px);
  min-width: fit-content;
  padding: 20px 30px 25px 40px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.subtitle};
  & p {
    position: relative;
    padding-left: 40px;
    ${bodyMd};
    color: ${props => props.theme.title};
    text-transform: uppercase;
  }
  & p > span {
    display: block;
  }
  & p::before {
    content: '';
    position: absolute;
    left: 3px;
    top: 13px;
    width: 30px;
    height: 1px;
    background-color: ${primaryLt};
  }
  @media ${BPT.md} {
    width: 100%;
  }
`;

export default function TechSkills({values}) {
  if (!values.libs) return <></>;
  return (
    <Wr>
      <BoxWr>
        {values.libs !== null &&
          values.libs.map(item => (
            <Box key={item}>
              <p>{item}</p>
            </Box>
          ))}
      </BoxWr>
    </Wr>
  );
}
