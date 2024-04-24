import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'register-form-component',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.css']
})
export default class RegisterFormComponent implements OnInit {
    fb = inject(FormBuilder)
    registerForm !: FormGroup

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            firstName: ['', Validators.required],
            middleName: [''],
            lastName: ['', Validators.required],
            phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        })
    }


    register() {
        console.log(this.registerForm.value)
    }
}