import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import * as fromApp from '../../../store/app.reducer';
import { setLanguage } from '../store/general.actions';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  currentLanguage: string = 'en';

  constructor(private store: Store<fromApp.AppState>) {}

  /**
   * Returns the languages available
   * @returns Observable<string[]>
   */
  getLanguages(): Observable<string[]> {
    return of(['en', 'es']);
  }

  /**
   * Returns the current language to display
   * @returns Observable<string>
   */
  getCurrentLanguage(): Observable<string> {
    return of(this.currentLanguage);
  }

  /**
   * Set the language to display
   * @param language, string with the language to display either 'en' or 'es'
   * @returns Observable<string>
   */
  setLanguage(language: string) {
    this.currentLanguage = language;
    this.store.dispatch(setLanguage({ language }));
  }
}
