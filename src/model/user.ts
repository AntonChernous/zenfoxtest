//Пользователь
export default class User{
    Id: number;
    Name: string;
    Email: string;
    Phone: string;

    constructor(userId: number, userName: string, userEmail: string, userPhone: string){
        this.Id = userId;
        this.Name = userName;
        this.Email = userEmail;
        this.Phone = userPhone;
    }
}