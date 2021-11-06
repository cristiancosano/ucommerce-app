import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderCardComponent } from './order-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [OrderCardComponent],
  exports: [OrderCardComponent],
  providers: []
})
export class OrderCardComponentModule {}
