import planetActionTypes from '../types/planet.types';

const INITIAL_STATE = {
  planet: null,
  error: null,
  isLoading: false,
  token: null,
};

const planetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case planetActionTypes.SET_CURRENT_PLANET:
      return {
        ...state,
        isLoading: false,
        currentPlanet: action.payload,
      };

    default:
      return state;
  }
};

export default planetReducer;
