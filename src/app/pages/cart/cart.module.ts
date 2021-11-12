import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';
import { ProductPageRoutingModule } from '../products/product/product-routing.module';
import { ProductCardComponentModule } from 'src/app/components/product-card/product-card.module';
import { CartShowCardComponentModule } from 'src/app/components/cart-show-card/cart-show-card.module';
import { CartPage } from './cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    ProductPageRoutingModule,
    ProductCardComponentModule,
    CartShowCardComponentModule
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
