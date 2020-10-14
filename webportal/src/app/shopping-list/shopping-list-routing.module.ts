import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';


const routes: Routes = [
  {path: '', component: ShoppingListComponent},
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingListRoutingModule {

}
