import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import TopCard from '../components/CommunityPage/TopCard';
import Lists from '../components/CommunityPage/Lists';
import Layout from '../components/Layout';
import butter from '../butter-client';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) getBlogData();
  }, [data]);

  const getBlogData = () => {
    butter.post.list({ page: 1 }).then(function (response) {
      setData(response.data.data);
    });
  };

  return (
    <Layout>
      {data.length > 0 && (
        <Container>
          <TopCard data={data[0]} />
          <div className={'row col-12 m-0 mt-5'}>
            {data &&
              data.length > 1 &&
              data.map((item, index) => {
                return (
                  index !== 0 && (
                    <div key={index} className={'col-md-4 col-12'}>
                      <Lists data={item} />
                    </div>
                  )
                );
              })}
          </div>
        </Container>
      )}
    </Layout>
  );
};

export default Home;
