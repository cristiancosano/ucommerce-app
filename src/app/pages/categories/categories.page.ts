import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/interfaces/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  private categories: Array<Category>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories()
    console.log(this.categories)
  }

  getCategories = () => {
    this.categoryService.getCategories().then((data: Array<Category>) => {
      this.categories = data
    })
  }
}
