import React, {useState} from 'react';
import styled from 'styled-components';
import BlogPostCard from '../../components/BlogPostCard';
import TitleSection from '../../components/ui/TitleSection';
import {Modal} from '../../components/Modal';
import {BPT} from '../../components/design';
import Layout from '../../components/Layout/index';

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
  grid-auto-flow: row dense;
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
  const [active, setActive] = useState(false);
  const [modalData, setModalData] = useState({});

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
          <CardWr>
            <BlogPostCard openModal={openModal} />
          </CardWr>
        </Container>
        {active && (
          <Modal active={active} onClose={closeModal} data={modalData} />
        )}
      </Wr>
    </Layout>
  );
}

export default MyBlog;
