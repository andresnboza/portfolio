import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form!: FormGroup;
  phone = '+506 8638 1731';
  email = 'andresnboza92@gmail.com';

  letsDiscuss = 'Let\'s discuss your next project.';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.builForm();
  }

  builForm() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(2)]],
      subject: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  submit() {}
}
