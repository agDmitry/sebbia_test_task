import {
  Article,
  ArticleResponse,
} from 'app/types/api';
import {
  SelectArticle,
  DeselectArticle,
  HandleArticleFetchSuccess,
  HandleArticleFetchError,
} from 'app/store/types/actions';
import store from 'app/store';
import axios, { AxiosResponse } from 'axios';
import config from 'app/config';

export default function selectedArticleReducer (
  state: Article | null = null,
  action: 
    SelectArticle | 
    DeselectArticle | 
    HandleArticleFetchSuccess | 
    HandleArticleFetchError,
): Article | null {
  switch ( action.type ) {
    case 'SELECT_ARTICLE': {
      axios( config.urls.article( action.article.id ) )
        .then( ( res: AxiosResponse<ArticleResponse> ) => 
          store.dispatch<HandleArticleFetchSuccess>( {
            type: 'HANDLE_ARTICLE_FETCH_SUCCESS',
            article: res.data.news,
          } ),
        )
        .catch( res => store.dispatch<HandleArticleFetchError>( {
          type: 'HANDLE_ARTICLE_FETCH_ERROR',
          res,
        } ) );

      return action.article;
    }

    case 'HANDLE_ARTICLE_FETCH_SUCCESS': return action.article;

    case 'HANDLE_ARTICLE_FETCH_ERROR': {
      if ( state !== null ) {
        return {
          ...state,
          fullDescription: 'Ошибка загрузки статьи',
        };
      } else {
        return state;
      }
    }
    
    case 'DESELECT_ARTICLE': return null;
  
    default: return state;
  }
}