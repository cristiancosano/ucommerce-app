import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCardComponent } from './product-card.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent]
})
export class ProductCardComponentModule {}
