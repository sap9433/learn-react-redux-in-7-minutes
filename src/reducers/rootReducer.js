/*    eslint indent: 0 */
// rootReducer.js . Imported in store file above.
import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import { colorB } from './colorReducer.js';

const rootReducer = combineReducers({
    colorB,
    router
});
export default rootReducer;
