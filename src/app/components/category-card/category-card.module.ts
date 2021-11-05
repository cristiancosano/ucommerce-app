import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryCardComponent } from './category-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [CategoryCardComponent],
  exports: [CategoryCardComponent]
})
export class CategoryCardComponentModule {}
