import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./components/users/users.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { CreateCategoryComponent } from "./components/create-category/create-category.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'create-category', component: CreateCategoryComponent},
  { path: '', redirectTo: 'users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
