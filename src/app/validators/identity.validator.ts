import { FormGroup } from "@angular/forms";

const IDENTITY_REGEX = {
    thaiPhone: new RegExp('^(\\+66|0)-?\\d{1,3}-?\\d{3}-?\\d{3}$'),
};

export const thaiPhoneValidator = (controlName: string) => {
    return (formGroup: FormGroup) => {
        let control = formGroup.controls[controlName]; // ดึงค่า control ที่ต้องการตรวจสอบ

        // ถ้า control มี error จะไม่ใช้ thaiPhoneValidator ให้ return ออกไป
        if (control.errors && !control.errors['thaiPhoneValidator']) {
            return;
        }

        // ตรวจสอบเบอร์โทรศัพท์
        if (!IDENTITY_REGEX.thaiPhone.test(control.value)) { // ถ้าเบอร์โทรศัพท์ถูกต้องตามที่กำหนด
            control.setErrors({ thaiPhoneValidator: true }); // กำหนด error ให้ control
            return; // ออกจาก function
        }

        control.setErrors(null); // ไม่มี error ให้ control
        return;
    }
}