import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DbserviceService } from '../services/dbservice.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  task_title = new FormControl('');
  task_deatil = new FormControl('');

  constructor(private dbservice: DbserviceService) { }

  ngOnInit(): void {
  }

  add_task(){
    // console.log(this.task_title,this.task_deatil)
    if(this.task_title.value=="" || this.task_deatil.value==""){
      window.alert("Please fill the field")
    }
    else{
      console.log(JSON.parse(localStorage.getItem("todos")!))
      if (localStorage.getItem("todos") == null ){
        window.localStorage.setItem("todos",JSON.stringify([{'title':this.task_title.value, 'detail':this.task_deatil.value, "id": 1, "favorite": false}]))
      }else{
        // let todos = JSON.parse(localStorage.getItem("todos")!)
        let todos = this.dbservice.getTodos();
        this.dbservice.createTodo(this.task_title.value,this.task_deatil.value, todos.length + 1, false)
        // todos.push({'titel':this.task_title.value, 'deatil':this.task_deatil.value})
        // window.localStorage.setItem("todos",JSON.stringify(todos))
      }
      this.task_title.setValue('')
      this.task_deatil.setValue('')
      window.alert("Your tast is added") 
    }
  
  }

}
