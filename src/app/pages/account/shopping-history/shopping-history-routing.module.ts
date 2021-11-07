import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingHistoryPage } from './shopping-history.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingHistoryPage
  },
  {
    path: ':id',
    loadChildren: () => import('./order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingHistoryPageRoutingModule {}
