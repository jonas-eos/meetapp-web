/**
 *
 * This file is solely responsible for working with business rules and
 * performing database connection, all actions that require database handling
 * or connection, must go through the saga before being going to the reducer.
 */
import { all, call, put } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~services/api';

import { signUpSuccess, signFailure } from './actions';

/**
 * Performs user registration.
 * For the registration to be successful, the user must fill the data correctly,
 * these rules are validated on the Sign up page, so in this part of the code
 * all data is already correct.
 * If the user already exists, they should display an error on the screen for
 * the user to check their registration information.
 * @generator @function
 * @param {object} payload
 * @return redirection to root page
 */
export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'user/create', {
      name,
      email,
      password,
      provider: true,
    });

    yield put(signUpSuccess());

    history.push('/');
  } catch (error) {
    // TODO erro msg to user
    console.tron.log(error);

    yield put(signFailure());
  }
}

export default all(['@auth/SIGN_UP_REQUEST', signUp]);
