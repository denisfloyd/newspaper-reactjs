import React from 'react';

import News from '../../models/news.model';

import news1Image from '../../assets/news_01.jpg';
import news1Image2x from '../../assets/news_01@2x.png';
import news2Image from '../../assets/news_02.jpg';
import news2Image2x from '../../assets/news_02@2x.jpg';
import news3Image from '../../assets/news_03.jpg';
import news3Image2x from '../../assets/news_03@2x.jpg';
import authorimage from '../../assets/creed_bratton.jpg';

import { Container, NewsType, NewsImage, NewsAuthor } from './styles';

interface NewsCardProps {
  news: News;
  headNews?: boolean;
}

interface ImageArrayToPrint {
  [key: string]: string;
}

const imageObject: ImageArrayToPrint = {
  'news_01.jpg': news1Image,
  'news_02.jpg': news2Image,
  'news_03.jpg': news3Image,
  'news_01.jpg.2x': news1Image2x,
  'news_02.jpg.2x': news2Image2x,
  'news_03.jpg.2x': news3Image2x,
};

const AlbumCard: React.FC<NewsCardProps> = ({ news, headNews }) => (
  <Container heading={headNews}>
    <NewsType type={news.type}>
      <span>{news.type}</span>
    </NewsType>

    {news.image && (
      <NewsImage>
        <img
          src={imageObject[news.image]}
          srcSet={`${imageObject[news.image.concat('.2x')]} 2x`}
          alt={news.title}
        />
        <div>
          <button className="buttonImageNews" type="button">
            Read More
          </button>
        </div>
      </NewsImage>
    )}

    <h2>{news.title}</h2>
    {news.author && (
      <NewsAuthor heading={headNews}>
        <img src={authorimage} alt={news.author} />
        <span>{`by ${news.author}`}</span>
      </NewsAuthor>
    )}
    <p>{news.news}</p>
  </Container>
);

export default AlbumCard;
