import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  id: number;
  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { 
    this.product = {name: '', categoryId: 0, unitPrice: 0}
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.getProduct()
  }

  getProduct(){
    this.productService.getProduct(this.id).then((product: Product) => {
      this.product = product
    });
  }

}
