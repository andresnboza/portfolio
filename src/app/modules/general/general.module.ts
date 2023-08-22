import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralService } from './services/general.service';
import { MaterialModule } from '../material/material.module';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputEmailComponent } from './components/input-email/input-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaComponent } from './components/input-textarea/input-textarea.component';

@NgModule({
  declarations: [
    InputTextComponent,
    InputEmailComponent,
    InputTextareaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    GeneralService
  ],
  exports: [
    InputTextComponent,
    InputEmailComponent,
    InputTextareaComponent
  ]
})
export class GeneralModule { }
