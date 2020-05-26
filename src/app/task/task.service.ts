import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Task} from "./task.model";



@Injectable()
export class TaskService{


  constructor(private http: HttpClient){

  }

  getTasks()
  {
    // @ts-ignore
    return this.http.get("/api/tasks/");
  }

  saveTask(task:Task){
    // @ts-ignore
    return this.http.post("/api/tasks/save",task);
  }
}
