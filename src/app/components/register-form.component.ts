import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Custom Validators
import { 
    confirmPasswordValidator, 
    strongPasswordValidator
} from '../validators/password.validator';
import { thaiPhoneValidator } from '../validators/identity.validator';

// Services
import { ApiService } from '../services/api.service';

@Component({
    standalone: true,
    selector: 'register-form-component',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
})
export default class RegisterFormComponent implements OnInit {
    constructor(
        private apiService: ApiService,
        private fb: FormBuilder
    ) { }

    registerForm !: FormGroup

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            firstName: new FormControl('', Validators.required),
            middleName: new FormControl(''),
            lastName: new FormControl('', Validators.required),
            phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8)]),
            confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
        },
            {
                validators: [
                    strongPasswordValidator('password'),
                    confirmPasswordValidator('password', 'confirmPassword'),
                    thaiPhoneValidator('phoneNumber')
                ]
            });
    }


    async register(): Promise<void> {
        const data = this.registerForm.value;
        const res = await this.apiService.login(data);
        console.log(res)
    }
}

