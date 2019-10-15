import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

/** Activate reactotron monitor in dev env */
const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor() // eslint-disable-line
    : null;

/**
 * Create saga middlware to handle the actions that must pass through saga first
 * On dev env, use sagaMonitor to send log to reactotron.
 */
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

/** Create a global store to send actions to rootReducer and pass by sagaMiddlware */
const store = createStore(rootReducer, [sagaMiddleware]);

/**
 * All actions that exist in the saga are intercepted y the saga before going to
 * reducer.
 */
sagaMiddleware.run(rootSaga);

export default store;
