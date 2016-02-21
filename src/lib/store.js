/*    eslint indent: 0 */
import { createStore, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { createHashHistory as createHistory } from 'history';
import routes from '../Routes';
import rootReducer from '../reducers/rootReducer';

const finalCreateStore = compose(
    reduxReactRouter({
        routes,
        createHistory
    }),
)(createStore);
const store = finalCreateStore(rootReducer);
export default store;
