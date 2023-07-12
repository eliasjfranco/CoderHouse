import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Register } from 'src/app/models/register';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  cityControl = new FormControl('', [Validators.required]);
  addressControl = new FormControl('', [Validators.required]);
  phoneControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

  registerModel: FormGroup<Register> = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
    city: this.cityControl,
    address: this.addressControl,
    phone: this.phoneControl,
  });

  sendRegister(): void {
    window.location.reload();
  }
}
