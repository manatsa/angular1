// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskAddComponent } from './task/task-add/task-add.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TaskService} from "./task/task.service";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskAddComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
