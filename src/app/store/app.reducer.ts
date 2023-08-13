import { ActionReducerMap } from '@ngrx/store';
// Interfaces
import { IGeneralState } from '../modules/general/interfaces/general.interfaces';
// Reducers
import * as fromGeneral from '../modules/general/store/general.reducer';
// App State
export interface AppState {
    general: IGeneralState;
}
export const appReducer: ActionReducerMap<AppState> = {
    general: fromGeneral.generalReducer
}
