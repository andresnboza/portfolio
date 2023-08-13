import { createReducer, on } from '@ngrx/store';
import { setLanguage } from './general.actions';
import { en } from 'src/assets/language/en';
import { es } from 'src/assets/language/es';
import { IGeneralState } from '../interfaces/general.interfaces';

// Initial general state
export const initialState: IGeneralState = {
    language: 'en',
    languages: ['en', 'es'],
    words: en
}

export const generalReducer = createReducer(
    initialState,
    on(setLanguage, (state, action) => ({ 
        ...state, 
        language: action.language,
        words: action.language === 'en' ?  en : es
    }))
)