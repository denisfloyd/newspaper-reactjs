import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../api/api';

import News from '../../models/news.model';

import NewsCard from '../../components/NewsCard';

import { Container, Content, DividerNews } from './styles';
import CustomLoader from '../../components/CustomLoader';

interface ApiResponse {
  bigNews: News[];
  othersNews: News[];
}

interface DashboardParams {
  topic: string;
}

const Dashboard: React.FC = () => {
  const { params } = useRouteMatch<DashboardParams>();

  const [news, setNews] = useState<ApiResponse>({} as ApiResponse);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function loadNews() {
      const response = await api.get<ApiResponse>('/data/news.mockfile.json');
      setTimeout(() => {
        setNews(response.data);
        setLoading(false);
      }, 1500);
    }

    loadNews();
  }, [params.topic]);

  return (
    <Container>
      {loading ? (
        <CustomLoader />
      ) : (
        <Content>
          {news.bigNews &&
            news.bigNews
              .filter(bigNews => {
                return bigNews.type === params.topic || !params.topic;
              })
              .map((bigNews, index) => (
                <NewsCard
                  headNews={index === 0}
                  key={bigNews.id}
                  news={bigNews}
                />
              ))}

          <DividerNews light />

          {news.othersNews &&
            news.othersNews
              .filter(otherNews => {
                return otherNews.type === params.topic || !params.topic;
              })
              .map(otherNews => (
                <NewsCard key={otherNews.id} news={otherNews} />
              ))}
        </Content>
      )}
    </Container>
  );
};

export default Dashboard;
