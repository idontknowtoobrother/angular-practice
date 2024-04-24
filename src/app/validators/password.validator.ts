import { FormGroup } from "@angular/forms"

const PASSWORD_REXEX = {
    // ต้องมีตัวเลข 1 ตัว ตัวพิมพ์เล็ก 1 ตัว ตัวพิมพ์ใหญ่ 1 ตัว อักขระพิเศษ 1 ตัว และมีความยาวอย่างน้อย 8 ตัวอักษร
    strength: new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}'), 
}

export const confirmPasswordValidator = (controlName: string, controlNameToMatch: string) => {
    return (fornGroup: FormGroup) => {
        let control = fornGroup.controls[controlName]; // ดึงค่า control ที่ต้องการตรวจสอบ
        let controlToMatch = fornGroup.controls[controlNameToMatch]; // ดึงค่า control ที่ต้องการเปรียบเทียบ

        // ถ้า controlToMatch มี error จะไม่ใช้ confirmPasswordValidator ให้ return ออกไป
        if (control.errors || controlToMatch.errors && !controlToMatch.errors['confirmPasswordValidator']) { 
            return;
        }

        if (control.value !== controlToMatch.value) { // ถ้าค่าของ control ไม่เท่ากับค่าของ controlToMatch
            controlToMatch.setErrors({ confirmPasswordValidator: true }); // กำหนด error ให้ controlToMatch
            return; // ออกจาก function
        }

        controlToMatch.setErrors(null); // ไม่มี error ให้ controlToMatch
        return;
    }
}


export const strongPasswordValidator = (controlName: string) => {
    return (formGroup: FormGroup) => {
        let control = formGroup.controls[controlName]; // ดึงค่า control ที่ต้องการตรวจสอบ

        // ถ้า control มี error จะไม่ใช้ strongPasswordValidator ให้ return ออกไป
        if (control.errors && !control.errors['strongPasswordValidator']) {
            return;
        }

        // ตรวจสอบความแข็งแกร่งของ password
        if (!PASSWORD_REXEX.strength.test(control.value)) { // ถ้า password มีความแข็งแกร่งตามที่กำหนด
            control.setErrors({ strongPasswordValidator: true }); // กำหนด error ให้ control
            return; // ออกจาก function
        }

        control.setErrors(null); // ไม่มี error ให้ control
        return;
    }
}