import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function passwordMatchValidator(c: AbstractControl) {
  const v = c.value;
    return (v.password === v.passwordConfirm) ? null : {
      passwordnotmatch: true
    };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;

  registerForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) { }
  

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      pwGroup: new FormGroup({
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6)
        ]),
        passwordConfirm: new FormControl('', [
          Validators.required,
          Validators.minLength(6)
        ]),
      }, {validators: passwordMatchValidator}),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('male', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)])
    });

    this.registerForm.patchValue({
      email: 'info@example.com'
    });
  }
  
  onSubmit() {
    console.log(this.registerForm.value);
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get(['pwGroup', 'password']);
  }

  get passwordConfirm() {
    return this.registerForm.get(['pwGroup', 'passwordConfirm']);
  }
  
  get country() {
    return this.registerForm.get('country');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

}
