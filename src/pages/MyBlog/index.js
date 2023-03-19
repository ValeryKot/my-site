import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import BlogPostCard from '../../components/BlogPostCard';
import TitleSection from '../../components/ui/TitleSection';
import {WP_API} from '../../utils/static';
import {findKeys} from '../../utils/helpers';
import { Modal } from '../../components/Modal';
import {BPT} from '../../components/design';
import Layout from '../../components/Layout/index';
import Loader from '../../components/ui/Loader/index';

const Wr = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.body};
`;

const Container = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  @media ${BPT.lg} {
    padding: 0 24px;
  }
  @media ${BPT.md} {
    padding: 0 16px;
  } ;
`;

const CardWr = styled.div`
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

function MyBlog() {
  const [data, setData] = useState();
  const [active, setActive] = useState(false);
  const [modalData, setModalData] = useState({});
  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const response = await fetch(WP_API)
      .then(response => response.json())
      .catch(error => {
        console.log('error', error);
      });

    setData(response);
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
    <Layout>
      <Wr>
        <Container>
          <TitleSection title="MY " secondTitle="BLOG" subtitle="posts" />
          {!data && <Loader/>}
          {data && (
            <CardWr>
              {data.posts.map(p => (
                <BlogPostCard
                  onClick={() => openModal(p)}
                  key={p.global_ID}
                  image={findKeys(p.attachments)}
                  title={p.title}
                  body={p.excerpt}
                  data={p}
                />
              ))}
            </CardWr>
          )}
        </Container>
        {active && (
          <Modal active={active} onClose={closeModal} data={modalData} />
        )}
      </Wr>
    </Layout>
  );
}

export default MyBlog;
