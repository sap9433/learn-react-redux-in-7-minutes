/*    eslint indent: 0 */
// rootReducer.js . Imported in store file above.
import { combineReducers } from 'redux';
import { colorB } from './colorReducer.js';

const rootReducer = combineReducers({
    colorB
});
export default rootReducer;
