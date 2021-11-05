import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage
  },
 
  {
    path: ':id',
    loadChildren: () => import('./category-products/category-products.module').then( m => m.CategoryProductsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}
