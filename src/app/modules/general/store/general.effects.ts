import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GeneralService } from '../services/general.service';
import { setLanguage } from './general.actions';


@Injectable()
export class GeneralEffects {

    loadLanguage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(setLanguage),
            mergeMap(() =>
                this.generalService.getCurrentLanguage().pipe(
                    map((language: string) => setLanguage({ language }),
                        catchError(() => of({ type: '[Language] Set Language Error' }))
                    )
                )
            )
        ));

    constructor(private actions$: Actions, private generalService: GeneralService) { }
}