import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import BlogPostCard from '../../components/BlogPostCard';
import TitleSection from '../../components/ui/TitleSection';
import {WP_API} from '../../utils/static';
import {findKeys} from '../../utils/helpers';

const Wr = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

const CardWr = styled.div`
display: flex;
flex-wrap: wrap;
  width: 100%;
`;

function MyBlog() {
  const [data, setData] = useState();
  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const response = await fetch(WP_API)
      .then((response) => response.json())
      .catch((error) => {
        console.log('error', error);
      });

    setData(response);
  };



  return (
    <Wr>
      <TitleSection title='MY ' secondTitle='BLOG' subtitle='posts' />
      <Container>
        {data && (
          <CardWr>
            {data.posts.map((p) => (
              <BlogPostCard key={p.global_ID} image={findKeys(p.attachments)} title={p.title} body={p.excerpt} />
            ))}
          </CardWr>
        )}
      </Container>
    </Wr>
  );
}

export default MyBlog;
