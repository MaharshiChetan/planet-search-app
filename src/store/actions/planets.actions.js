import planetActionTypes from '../types/planet.types';
import { actionCreator } from '../actionsCreator/index';

export const newSetSelectedPlanet = actionCreator(planetActionTypes.SET_SELECTED_PLANET, 'planet');

export const setSelectedPlanet = (planet) => ({
  type: planetActionTypes.SET_SELECTED_PLANET,
  payload: planet,
});
