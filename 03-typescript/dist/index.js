"use strict";
// class User {
//   public email: string;
//   private name: string;
//   //   city: string = "";
//   //   readonly city: string = "Santos";
//   private readonly city: string = "Santos";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
//Clean and professional way
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Santos";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    //   getEmail(): string{
    get getEmail() {
        return `The email is ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //In 'Set' option, do not return type
    set courseCount(number) {
        if (number <= 1)
            throw new Error("Course count should be more than one");
        this._courseCount = number;
    }
}
//Using PROTECTED in the main class, the attribute can be accessable in the inherited classes
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const user = new User("mail@mail.com", "Pele");
// user.city = "Santos";
