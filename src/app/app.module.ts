import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    TaskListComponent,
    FavouriteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
