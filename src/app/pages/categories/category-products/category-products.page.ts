import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage implements OnInit {

  private products: Array<Product>;
  private category: any;
  private id: number;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(this.id)
    this.category = {name: 'prueba'}
    //this.getProducts()
  }

  getProducts = () => {
    this.productService.getProductsByCategory(this.id).then((data: Array<Product>) => {
      this.products = data
    })
  }

}
