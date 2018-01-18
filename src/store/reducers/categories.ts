import {
  Category,
  CategoriesResponse,
} from 'app/types/api';
import {
  FetchCategories,
  HandleCategoriesFetchSuccess,
  HandleCategoriesFetchError,
} from 'app/store/types/actions';
import store from 'app/store';
import axios, { AxiosResponse } from 'axios';
import config from 'app/config';

export default function categoriesReducer (
  state: Category[] | null = null, 
  action: FetchCategories | HandleCategoriesFetchSuccess,
): Category[] | null {
  switch ( action.type ) {
    case 'FETCH_CATEGORIES': {
      axios( config.urls.categories )
        .then( ( res: AxiosResponse<CategoriesResponse> ) => 
          store.dispatch<HandleCategoriesFetchSuccess>( {
            type: 'HANDLE_CATEGORIES_FETCH_SUCCESS',
            categories: res.data.list,
          } ),
        )
        .catch( res => store.dispatch<HandleCategoriesFetchError>( {
          type: 'HANDLE_CATEGORIES_FETCH_ERROR',
          res,
        } ) );

      return state;
    }

    case 'HANDLE_CATEGORIES_FETCH_SUCCESS': return action.categories;
  
    default: return state;
  }
}