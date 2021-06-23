import { createSelector } from 'reselect';

const selectPlanet = (state) => state.planet;

export const selectedPlanet = createSelector([selectPlanet], (planet) => planet);
