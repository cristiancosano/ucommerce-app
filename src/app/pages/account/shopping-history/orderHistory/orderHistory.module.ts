import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderHistoryPageRoutingModule } from './orderHistory-routing.module';

import { OrderHistoryPage } from './orderHistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderHistoryPageRoutingModule
  ],
  declarations: [OrderHistoryPage]
})
export class OrderHistoryPageModule {}
