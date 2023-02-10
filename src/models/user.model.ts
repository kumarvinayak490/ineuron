export interface User {
    data:Person[],
    message:string,
}

export type Person = {
    _id:string,
    firstName:string,
    lastName:string,
    phoneNumber:string,
    age:number,
}