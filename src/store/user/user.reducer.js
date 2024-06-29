export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

// reducer initial state
const INITIAL_STATE = {
  currentUser: null,
};

// we write reducer to change the state. It takes the PREVIOUS STATE and an ACTION
// Then we reduce it(read only) to one entity: the new updated instance state
export const userReducer = (state = INITIAL_STATE, action) => {
  console.log('dispatched');
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        // MAKE A COPY OF THE ENTIRE STATE SINCE STATE IS IMMMUTABLE. MAKE OUR CHAGES AND RETURN THE CURRENT USER PAYLOAD
        ...state,
        currentUser: payload,
      };
    default:
      return state; // return the default state if no action meets the switch cases
  }
};
