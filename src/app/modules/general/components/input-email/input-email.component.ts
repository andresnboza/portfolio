import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent implements OnInit, ControlValueAccessor, OnDestroy {
  form!: FormGroup;
  @Input() formControlName!: string;
  @Input() label: string = 'Email';
  formControl: any;
  subs: any[] = [];
  show = false;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnDestroy(): void {
    this.subs.map((sub) => {
      sub.unsubscribe();
    })
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit() {
    this.show = false;
    this.form = this.rootFormGroup.control;
    this.formControl = this.form.controls[this.formControlName];
    this.show = true;
  }
}
