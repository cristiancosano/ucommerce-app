import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryProductsPageRoutingModule } from './category-products-routing.module';

import { CategoryProductsPage } from './category-products.page';
import { CategoryCardComponentModule } from 'src/app/components/category-card/category-card.module';
import { ProductCardComponentModule } from 'src/app/components/product-card/product-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryProductsPageRoutingModule,
    CategoryCardComponentModule,
    ProductCardComponentModule
    
  ],
  declarations: [CategoryProductsPage]
})
export class CategoryProductsPageModule {}
