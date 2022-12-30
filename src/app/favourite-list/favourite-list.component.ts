import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../services/dbservice.service';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {

  favourite_list: any = []

  constructor(private bdService: DbserviceService) { 
    // this.favourite_list = this.bdService.getFavoriteTodos();
    // console.log(this.getFavoriteTodos)
    this.getfavourite_todo();
  }

  ngOnInit(): void {
  }

  delete_Fav_Todo(id:any){
    this.bdService.remove_fav_todo(id);
    // this.favourite_list.removeTodo(id);
    this.getfavourite_todo();
    
        
  }

  getfavourite_todo(){
    this.favourite_list = [];
    let todos = this.bdService.getTodos();
    console.log(todos)
    if (todos !== null){
      for (var todo of todos) {
        if (todo.favorite == true){
          this.favourite_list.push(todo);
        }
      }
    }
    
  }
}