import { combineReducers } from 'redux';
import categories from './categories';
import selectedCategory from './selectedCategory';
import news from './news';
import newsPage from './newsPage';
import selectedArticle from './selectedArticle';
import requestStatus from './requestStatus';
import Store from 'app/store/types';

export default combineReducers<Store>( {
  categories,
  selectedCategory,
  news,
  newsPage,
  selectedArticle,
  requestStatus,
} );