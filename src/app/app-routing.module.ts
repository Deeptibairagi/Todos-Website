import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';

const routes: Routes = [
  {path:"",
  redirectTo:"add",
  pathMatch:"full"  
},
{path: "add", component:AddComponent},
{path:"task-list",component: TaskListComponent},
{path:"favourite-list", component: FavouriteListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
