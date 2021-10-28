import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCardComponent } from './product-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent]
})
export class ProductCardComponentModule {}
