/**
 * This file is responsible for linking all sagas in the application, it is
 * important that every new module is imported here, so that the saga is
 * recognized by the application.
 */
import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSata() {
  return yield all([auth]);
}
