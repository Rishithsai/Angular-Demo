import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  //@Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  @Input({required:true}) name!: string;
  isAddingTask: boolean = false;
  //private tasksService: TasksService;

  constructor(private tasksService: TasksService) {
  }
  /*tasks = [
    {
      id:'t1',
      userId:'u1',
      title:'Master Angular',
      summary:'Learn all the basic and advanced features of Angular',
      dueDate: '2025-12-31'
    },
    {
      id:'t2',
      userId:'u1',
      title:'Master Angular',
      summary:'Learn all the basic and advanced features of Angular',
      dueDate: '2025-12-31'
    },
    {
      id:'t3',
      userId:'u1',
      title:'Master Angular',
      summary:'Learn all the basic and advanced features of Angular',
      dueDate: '2025-12-31'
    }
  ];*/

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  //onCompleteTask(id: string) {


  //}
  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

 // onAddTask(taskData: NewTaskData){

   // this.isAddingTask = false;

  //}

}
