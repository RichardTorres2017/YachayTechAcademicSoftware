export class Login{

    constructor(
        public username:string,
        public password: string
    ){}
    
    getLogin():string{
        return `${this.username} ${this.password}`;
    }

}