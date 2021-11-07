import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderHistoryPage } from './orderHistory.page';

const routes: Routes = [
  {
    path: '',
    component: OrderHistoryPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderHistoryPageRoutingModule {}
