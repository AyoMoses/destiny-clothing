import { takeLatest, put, all, call } from 'typed-redux-saga/macro';
import { USER_ACTION_TYPES } from '../user/user.types';
import { setClearCart } from './cart.action';

function* clearCartOnSignOut() {
  yield* put(setClearCart());
}

function* onSignOutSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield* all([call(onSignOutSuccess)]);
}
