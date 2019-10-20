import { AbstractControl } from "@angular/forms";

export function ValidateConfirmPassword(control: AbstractControl) {


  if(control.root.value.confirmPassword === control.root.value.password) {
    return null;
  } else {
    return { validConfirmPassword: true }
  }
}
