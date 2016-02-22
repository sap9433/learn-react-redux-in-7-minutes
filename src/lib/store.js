/*    eslint indent: 0 */
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer);
export default store;
