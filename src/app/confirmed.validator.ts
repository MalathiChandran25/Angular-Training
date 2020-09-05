import { AbstractControl, FormGroup } from "@angular/forms";


export function ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName];
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ ConfirmedValidator: true });
      } 
      else {
        matchingControl.setErrors(null);
      }
    };
  }