import {
  Category,
  Article,
} from 'app/types/api';

import { AxiosError } from 'axios';

export interface FetchCategories {
  type: 'FETCH_CATEGORIES';
}

export interface HandleCategoriesFetchSuccess {
  type: 'HANDLE_CATEGORIES_FETCH_SUCCESS';
  categories: Category[];
}

export interface HandleCategoriesFetchError {
  type: 'HANDLE_CATEGORIES_FETCH_ERROR';
  res: AxiosError;
}

export interface SelectCategory {
  type: 'SELECT_CATEGORY';
  category: Category;
}

export interface DeselectCategory {
  type: 'DESELECT_CATEGORY';
}

export interface HandleNewsFetchSuccess {
  type: 'HANDLE_NEWS_FETCH_SUCCESS';
  news: Article[];
}

export interface HandleNewsFetchError {
  type: 'HANDLE_NEWS_FETCH_ERROR';
  res: AxiosError;
}

export interface ChangeNewsPage {
  type: 'CHANGE_NEWS_PAGE';
  page: number;
}

export interface SelectArticle {
  type: 'SELECT_ARTICLE';
  article: Article;
}

export interface DeselectArticle {
  type: 'DESELECT_ARTICLE';
}

export interface HandleArticleFetchSuccess {
  type: 'HANDLE_ARTICLE_FETCH_SUCCESS';
  article: Article;
}

export interface HandleArticleFetchError {
  type: 'HANDLE_ARTICLE_FETCH_ERROR';
  res: AxiosError;
}

export interface ResetRequestStatus {
  type: 'RESET_REQUEST_STATUS';
}