export class User {
    id: number;
    username: string;
    email: string;
    phone: string;
    firstName: string;
    middleName: string;
    lastName: string;
    created_at: Date;
    updated_at: Date;
    constructor(
        id: number,
        username: string,
        email: string,
        phone: string,
        firstName: string,
        middleName: string,
        lastName: string,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}