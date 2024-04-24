import { Injectable } from '@angular/core';
import { RegisterUserData } from '../models/register-user.model';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiVersion: string = 'v1'; // กำหนดเวอร์ชั่นของ api
    private apiEndpoint: string = `http://localhost:3000/api/${this.apiVersion}`; // กำหนด url ของ api

    constructor(
    ) { }

    public async login(data: RegisterUserData): Promise<User> {
        // พี่ๆบอกว่ายังไม่ต้องทำ Backend เอาแค่ทำ Frontend ก่อน
        // แต่ทำเผื่อไว้ก่อน
        // const res = request ... 

        const mockUserSomeData = { // ข้อมูล User จำลองบางส่วนที่ต้องส่งกลับมาจาก Backend
            id: 1,
            create_at: new Date(),
            updated_at: new Date()
        }

        const user = new User( // สร้างข้อมูล User จำลอง
            mockUserSomeData.id,
            data.username,
            data.email,
            data.phone,
            data.firstName, 
            data.middleName, 
            data.lastName, 
            mockUserSomeData.create_at, 
            mockUserSomeData.updated_at
        )

        return user;
    }
}
