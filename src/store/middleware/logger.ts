// import { Middleware } from 'redux';
// import { Action } from 'redux';
// import { RootState } from '../store';

// export const loggerMiddleware: Middleware<{}, RootState> = (store) => (next) => (action: unknown) => {
//   // Handle unknown action type
//   console.log('Unknown action:', action);
//   return next(action);
// };

// // Overload for specific action types
// loggerMiddleware<{}, RootState> = (store) => (next) => <A extends Action>(action: A) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log('type: ', action.type);
//   console.log('payload: ', action.payload);
//   console.log('currentState: ', store.getState());

//   next(action);

//   console.log('next state: ', store.getState());
// };
