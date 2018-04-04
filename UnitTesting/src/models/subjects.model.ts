export class Subjects{

    constructor(
        public student_id:string,
        public period: string
    ){}
    
    getSubjects():string{
        return `${this.student_id} ${this.period}`;
    }

}