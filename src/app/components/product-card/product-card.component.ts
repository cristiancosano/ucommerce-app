import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() images: any;
  @Input() mainImage?: any;
  @Input() id: number;

  constructor() { }

  ngOnInit() {
    console.log(this.id, typeof this.images)
    if(typeof this.images == 'string' && this.images != '') this.mainImage = this.images
    else if(typeof this.images == 'object') this.mainImage = this.images[0]
    else this.mainImage = 'https://picsum.photos/800/400'
    console.log(this.mainImage)
  }

}
