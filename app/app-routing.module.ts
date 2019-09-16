import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  //make sure you order the routes logically what comes first
  {path: 'pets', component: MainComponent},
  {path: 'pets/new', component: AddComponent},
  {path: 'pets/:id', component: ShowComponent },
  {path: 'pets/edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
