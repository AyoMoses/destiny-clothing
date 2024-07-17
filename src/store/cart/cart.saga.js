import { takeLatest, put, all, call } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from '../user/user.types';
import { clearCart } from './cart.action';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
