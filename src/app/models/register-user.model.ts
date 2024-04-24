export class RegisterUserData {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    phone: string;
    firstName: string;
    middleName: string;
    lastName: string;
    constructor(
        username: string,
        password: string,
        confirmPassword: string,
        email: string,
        phone: string,
        firstName: string,
        middleName: string,
        lastName: string,
    ) {
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.email = email;
        this.phone = phone;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
}