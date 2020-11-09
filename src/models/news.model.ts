interface News {
  id: number;
  title: string;
  image: 'news_01.jpg' | 'news_02.jpg' | 'news_03.jpg';
  author: string;
  news: string;
  type: string;
  heading: boolean;
}

export default News;
