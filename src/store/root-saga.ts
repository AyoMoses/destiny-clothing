import { all, call } from 'typed-redux-saga/macro';

import { categoriesSaga } from './categories/category.saga';
import { userSagas } from './user/user.saga';
import { cartSagas } from './cart/cart.saga';

// generation function
export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas), call(cartSagas)]);
}
