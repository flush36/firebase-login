import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateConfirmPassword } from '../../validators/confirmPassword';

@IonicPage({
  name: 'create-user'
})
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {

  registerForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder
    ) {
      this.registerForm = this.formbuilder.group({
        name: [null, [Validators.required, Validators.minLength(5)]],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
        confirmPassword: [null, [Validators.required, Validators.minLength(6)]]
      })
  }

  validatePassword() {
   let hasError = ValidateConfirmPassword(this.registerForm);
   this.registerForm.get('confirmPassword').setErrors(hasError);
  }

  submitForm() {
    console.log('testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
   // console.log(this.registerForm.value)
  }
}
