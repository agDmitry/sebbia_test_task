import {
  Category,
} from 'app/types/api';
import {
  SelectCategory,
  DeselectCategory,
} from 'app/store/types/actions';

export default function selectedUserReducer (
  state: Category | null = null,
  action: SelectCategory | DeselectCategory,
): Category | null {
  switch ( action.type ) {
    case 'SELECT_CATEGORY': return action.category;
    
    case 'DESELECT_CATEGORY': return null;
  
    default: return state;
  }
}