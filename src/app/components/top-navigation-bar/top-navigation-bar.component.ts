import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ILanguage } from 'src/assets/language/language';
import * as fromApp from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { selectLanguage, selectWords } from 'src/app/modules/general/store/general.selectors';
import { GeneralService } from 'src/app/modules/general/services/general.service';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.scss']
})
export class TopNavigationBarComponent {
  words$!: Observable<ILanguage>;
  language!: Observable<string>;

  externalUrl: string = '';

  constructor(private store: Store<fromApp.AppState>, private generalService: GeneralService) {
    this.words$ = this.store.select(selectWords);
    this.language = this.store.select(selectLanguage);
  }

  changeLanguage() {
    const language = this.generalService.currentLanguage === 'en' ? 'es' : 'en';
    this.generalService.setLanguage(language);
  }
}
