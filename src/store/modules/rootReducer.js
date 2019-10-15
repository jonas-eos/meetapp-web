/**
 * This file is responsible for connecting all reducers in the application, it
 * is important that every new module is imported here so that the reducer is
 * recognized by the application.
 */
import { combineReducers } from 'redux';

import auth from './auth/reducer';

export default combineReducers({ auth });
