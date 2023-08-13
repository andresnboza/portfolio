import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IGeneralState } from '../interfaces/general.interfaces';

// Create a feature selector for the 'general' state
export const selectGeneralState = createFeatureSelector<IGeneralState>('general');

// Select specific pieces of state using createSelector
export const selectLanguage = createSelector(
    selectGeneralState,
    (state: IGeneralState) => state.language
);

export const selectLanguages = createSelector(
    selectGeneralState,
    (state: IGeneralState) => state.languages
);

export const selectWords = createSelector(
    selectGeneralState,
    (state: IGeneralState) => state.words
);