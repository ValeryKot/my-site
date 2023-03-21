import React, {useEffect, useState, useCallback} from 'react';
import styled from 'styled-components';
import {h2m, bodyMd, regular, primaryHover, semibold} from '../design';
import {WP_API} from '../../utils/static';
import {findKeys} from '../../utils/helpers';
import Loader from '../ui/Loader';

const Wr = styled.div`
  display: block;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
  width: 100%;
`;

const Tumb = styled.div`
  border-bottom: 5px solid ${primaryHover};
  border-radius: 5px 5px 0 0;
  height: 200px;
  cursor: pointer;
  position: relative;
  display: block;
  overflow: hidden;
  background-image: url(${props => props.image});
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
  position: relative;
  background-color: ${props => props.theme.gradientMid};
  padding: 20px 25px 25px;
  border-radius: 0 0 5px 5px;
  height: 190px;
  & h3 {
    ${h2m};
    ${semibold};
    color: ${props => props.theme.title};
  }
  & p {
    margin: 15px 0 5px;
    ${bodyMd};
    ${regular};
    color: ${props => props.theme.title};
  }
  &::after {
    content: '';
    position: absolute;
    width: inherit;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    border-radius: 0 0 5px 5px;
    background: linear-gradient(
      0deg,
      ${props => props.theme.gradientMid} 0%,
      rgba(0, 0, 0, 0) 80%
    );
  }
`;

export default function BlogPostCard({openModal = () => {}}) {
  const [data, setData] = useState();

  const getApiData = useCallback(async () => {
    const response = await fetch(WP_API)
      .then(response => response.json())
      .catch(error => {
        console.log('error', error);
      });

    setData(response);
  }, []);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  if (!data) return <Loader />;

  return (
    <>
      {data.posts.map(p => (
        <Wr key={p.global_ID} onClick={e => openModal(p)}>
          <Tumb image={findKeys(p.attachments)} />
          <TextBox>
            <h3>{p.title}</h3>
            <p>
              {p.excerpt.replace(/<[^>]*>/gi, '').replace('&#8211; ', ' - ')}
            </p>
          </TextBox>
        </Wr>
      ))}
    </>
  );
}
