import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  private searchText: string;
  private products: any;

  constructor(private productService: ProductService, private nfc: NFC, private ndef: Ndef) { }

  ngOnInit() {
  }

  searchProducts(){
    this.products = undefined
    if(this.searchText.length > 3)
      this.productService.getProductsByText(this.searchText).then(products => {
        this.products = products
      })
  }

  async scanNfcTag(){
    try {
      let tag = await this.nfc.scanNdef();
      console.log(JSON.stringify(tag));
   } catch (err) {
       console.log('Error reading tag', err);
   }

  }

}
