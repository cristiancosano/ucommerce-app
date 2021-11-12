import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartShowCardComponent } from './cart-show-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [CartShowCardComponent],
  exports: [CartShowCardComponent]
})
export class CartShowCardComponentModule {}
