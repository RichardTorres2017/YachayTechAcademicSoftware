export class Schedule{

  constructor(
    public student_class: string
  ){}

  getClass(): string{
    return this.student_class
  }
}
