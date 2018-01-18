import { createStore } from 'redux';
import reducer from './reducers';
import Store from './types';

export default createStore<Store>( reducer );
