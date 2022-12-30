import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DbserviceService } from '../services/dbservice.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  todos_list = []

  favorite = new FormControl("");

  constructor(private bdService: DbserviceService) {
    // let list = this.bdService.getTodos();
    // if (list == null){
    //   console.log("null", this.todos_list.length)
    // }else{
    //   console.log("not null")
    // }
    
    if (this.bdService.getTodos() != null) {
      this.todos_list = this.bdService.getTodos();
      console.log(this.todos_list)
    }
  }
  ngOnInit(): void {
  }

  deleteTodo(id: any) {
    this.bdService.removeTodo(id);
    this.todos_list = this.bdService.getTodos();
  }

  Favorite_add_Todo(id: any) {
    this.bdService.getFavoriteTodos(id);
    alert("Added in favourite list")
  }

}
