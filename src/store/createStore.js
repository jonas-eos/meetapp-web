import { createStore, compose, applyMiddleware } from 'redux';

/**
 * Method for creating global storage, if it is a development environment,
 * logging should be enabled to make it easier to debug code by reactotron.
 * Middleware must be applied in the creation of the store so the actions that
 * have business rules are directed to the saga.
 * @default
 * @function
 */
export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          console.tron.createEnhancer(), // eslint-disable-line
          applyMiddleware(...middlewares)
        )
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
