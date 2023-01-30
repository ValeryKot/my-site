import React from 'react';
import styled from 'styled-components';
import {h2m, bodyMd, regular, primaryHover, semibold} from '../design';

const Wr = styled.div`
  display: block;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
  flex: 0 0 auto;
  width: 33%;
`;

const Tumb = styled.div`
  border-bottom: 5px solid ${primaryHover};
  border-radius: 5px 5px 0 0;
  height: 200px;
  cursor: pointer;
  position: relative;
  display: block;
  overflow: hidden;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
  filter: brightness(85%);
  transition: 0.3s ease;
  &:hover {
    background-size: 110%;
  }
`;

const TextBox = styled.div`
  background-color: ${(props) => props.theme.gradientMid};
  padding: 20px 25px 25px;
  border-radius: 0 0 5px 5px;
  height: 190px;
  & h3 {
    ${h2m};
    ${semibold};
    color: ${(props) => props.theme.title};
  }
  & p {
    margin: 15px 0 5px;
    ${bodyMd};
    ${regular};
    color: ${(props) => props.theme.title};
  }
`;

export default function BlogPostCard({image, title, body}) {
  return (
    <Wr>
      <Tumb image={image} />
      <TextBox>
        <h3>{title}</h3>
        <p>
          {body.replace(/<\/?[a-zA-Z]+>/gi, '').replace('&#8211; ', ' - ')}
        </p>
      </TextBox>
    </Wr>
  );
}
