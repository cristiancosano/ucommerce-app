import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage implements OnInit {

  private products: Array<Product>;
  private category: "Prueba Categoria";
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts()
    console.log(this.category)
  }

  getProducts = () => {
    this.productService.getProducts().then((data: Array<Product>) => {
      this.products = data
    })
  }

}
