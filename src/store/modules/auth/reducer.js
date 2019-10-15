/** Reducer is only used to change the global state of the application. */
import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    const newState = draft;

    switch (action.type) {
      /** Change loading states on sign up request action */
      case '@auth/SIGN_UP_REQUEST': {
        newState.loading = true;
        break;
      }

      /** Change loading states if sign is success */
      case '@auth/SIGN_UP_SUCCESS': {
        newState.loading = false;

        break;
      }

      /** Change loading states on sign failure action */
      case '@auth/SIGN_FAILURE': {
        newState.loading = false;

        break;
      }
      default:
    }
  });
}
