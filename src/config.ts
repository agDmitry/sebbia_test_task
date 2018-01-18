const baseUrl = 'http://testtask.sebbia.com/v1/news';
const categoriesUrl = `${baseUrl}/categories`;
const newsUrl = ( 
  catId: number, 
  page: number = 0,
) => `${categoriesUrl}/${catId}/news?page=${page}`;
const articleUrl = ( id: number ) => `${baseUrl}/details?id=${id}`;

export default {
  urls: {
    base: baseUrl,
    categories: categoriesUrl,
    news: newsUrl,
    article: articleUrl,
  },
  newsPageSize: 10,
};
