import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/Category';
import { Product } from 'src/app/interfaces/Product';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.page.html',
  styleUrls: ['./category-products.page.scss'],
})
export class CategoryProductsPage implements OnInit {

  private products: Array<Product>;
  private category: Category;
  private id: number;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.products = []
    this.category = {name: ''}
    this.getCategory()
    this.getProducts()
  }

  getCategory = () => {
    this.categoryService.getCategory(this.id).then((data: Category) => {
      this.category = data
    })
  }

  getProducts = () => {
    this.categoryService.getProductsByCategoryId(this.id).then((data: Array<Product>) => {
      this.products = data
    })
  }

}
