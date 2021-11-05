import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private products: Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts()
    
  }

  getProducts = () => {
    this.productService.getProducts().then((data: Array<Product>) => {
      this.products = data
    })
  }

}
