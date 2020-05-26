export class Task{
  id: number;
  name: string;
  dueDate: string;
  completed: boolean;

  constructor(id:number, name:string,dueDate:string,completed:boolean)
  {
    this.id=id;
    this.name=name;
    this.dueDate=dueDate;
    this.completed=completed;
  }
}
