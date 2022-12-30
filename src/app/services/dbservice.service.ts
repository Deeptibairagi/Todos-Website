import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {


  constructor() { 
  }

  createTodo(title:any, detail: any, id: any, favorite:boolean){
    let todo = {
      "id": id,
      "title": title,
      "detail": detail,
      "favorite": favorite
    }
    let todos = this.getTodos();
    console.log(todos)
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  getTodos(){
    return JSON.parse(localStorage.getItem('todos')!) 
  }

  removeTodo(id:any){
    let todos = this.getTodos();
    console.log(todos)
    let updatedTodo = []
    for (var todo of todos) {
      if (todo.id !== id){
        updatedTodo.push(todo)
      }
    }
    localStorage.setItem("todos", JSON.stringify(updatedTodo));
  }

  remove_fav_todo(id:any){
   let todos = this.getTodos();
   let new_todos =[]
   for (var todo of todos){
    if (todo.id ==id){
      todo.favorite=false
      new_todos.push(todo)
    }
    else{
      new_todos.push(todo)
    }
   }
  console.log(new_todos)
  }

  getFavoriteTodos(id: any){
    let todos = this.getTodos();
    console.log(todos)
    let fav_todo = []
    for (var todo of todos) {
      if (todo.id !== id){
        fav_todo.push(todo)
      }else{
        let favouriteTodo = todo
        favouriteTodo['favorite'] = true
        console.log(favouriteTodo)
        fav_todo.push(favouriteTodo)
      }
    }
    localStorage.setItem("todos", JSON.stringify(fav_todo));
  }

}
