import {
  Article,
  NewsResponse,
} from 'app/types/api';
import {
  SelectCategory,
  DeselectCategory,
  ChangeNewsPage,
  HandleNewsFetchSuccess,
  HandleNewsFetchError,
} from 'app/store/types/actions';
import store from 'app/store';
import axios, { AxiosResponse } from 'axios';
import config from 'app/config';

function fetchNews ( catId: number, page = 0 ) {
  return axios( config.urls.news( catId, page ) )
    .then( ( res: AxiosResponse<NewsResponse> ) => 
      store.dispatch<HandleNewsFetchSuccess>( {
        type: 'HANDLE_NEWS_FETCH_SUCCESS',
        news: res.data.list,
      } ),
    )
    .catch( res => store.dispatch<HandleNewsFetchError>( {
      type: 'HANDLE_NEWS_FETCH_ERROR',
      res,
    } ) );
}

export default function newsPageReducer (
  state: number = 0, 
  action: SelectCategory | DeselectCategory | ChangeNewsPage,
): number {
  switch ( action.type ) {
    case 'SELECT_CATEGORY': {
      fetchNews( action.category.id, state );

      return state;
    }

    case 'CHANGE_NEWS_PAGE': {
      let { selectedCategory } = store.getState();

      if ( selectedCategory !== null ) {
        fetchNews( selectedCategory.id, action.page );
        
        return action.page;
      } else {
        throw new Error( 'store.selectedCategory === null' );
      }
    }

    case 'DESELECT_CATEGORY': return 0;
  
    default: return state;
  }
}