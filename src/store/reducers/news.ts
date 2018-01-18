import {
  Article,
} from 'app/types/api';
import {
  HandleNewsFetchSuccess,
  DeselectCategory,
} from 'app/store/types/actions';

export default function newsReducer (
  state: Article[] | null = null, 
  action: HandleNewsFetchSuccess | DeselectCategory,
): Article[] | null {
  switch ( action.type ) {

    case 'DESELECT_CATEGORY': return null;

    case 'HANDLE_NEWS_FETCH_SUCCESS': return action.news;
  
    default: return state;
  }
}