import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { UsersComponent } from './components/users/users.component';
import { NavComponent } from './components/nav/nav.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryRepository } from "./repository/CategoryRepository";
import { UserRepository } from "./repository/UserRepository";
import { CreateCategoryComponent } from './components/create-category/create-category.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavComponent,
    CategoriesComponent,
    CreateCategoryComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule
    ],
  providers: [
    CategoryRepository,
    UserRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
