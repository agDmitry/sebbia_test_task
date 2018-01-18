import {
  FetchCategories,
  HandleCategoriesFetchSuccess,
  HandleCategoriesFetchError,
  ChangeNewsPage,
  HandleNewsFetchSuccess,
  HandleNewsFetchError,
  ResetRequestStatus,
  SelectCategory,
} from 'app/store/types/actions';
import { RequestStatus } from 'app/store/types';

export default function requestStatusReducer (
  state: RequestStatus | null = null,
  action: 
    FetchCategories |
    HandleCategoriesFetchSuccess |
    HandleCategoriesFetchError |
    SelectCategory |
    ChangeNewsPage |
    HandleNewsFetchSuccess |
    HandleNewsFetchError |
    ResetRequestStatus,
): RequestStatus | null {
  switch ( action.type ) {
    case 'FETCH_CATEGORIES': return { 
      state: 'pending',
      msg: 'Загрузка категорий', 
    };

    case 'CHANGE_NEWS_PAGE':
    case 'SELECT_CATEGORY': return { 
      state: 'pending',
      msg: 'Загрузка новостей', 
    };

    case 'HANDLE_CATEGORIES_FETCH_ERROR': return { 
      state: 'error',
      msg: `Ошибка загрузки категорий: ${action.res.message}`, 
    };

    case 'HANDLE_NEWS_FETCH_ERROR': return { 
      state: 'error',
      msg: `Ошибка загрузки новостей: ${action.res.message}`, 
    };

    case 'HANDLE_CATEGORIES_FETCH_SUCCESS': 
    case 'HANDLE_NEWS_FETCH_SUCCESS': 
    case 'RESET_REQUEST_STATUS': return null;
  
    default: return state;
  }
}