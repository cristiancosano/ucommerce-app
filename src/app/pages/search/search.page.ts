import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  private searchText: string;
  private products: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  searchProducts(){
    this.productService.getProductsByText(this.searchText).then(products => {
      this.products = products
    })
  }

}
