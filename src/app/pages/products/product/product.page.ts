import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
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
  loading: Promise<HTMLIonLoadingElement>;
  loadError: Boolean

  constructor(private route: ActivatedRoute, private productService: ProductService, private loadingController: LoadingController) { 
    this.product = {name: '', categoryId: 0, unitPrice: 0}
    this.loadError = false;
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.presentLoading()
    this.getProduct()
  }

  getProduct(){
    this.productService.getProduct(this.id).then(async (product: Product) => {
      this.product = product
      this.loading.then(message => message.dismiss('loaded', 'ok'))
    }).catch(async() => this.loading.then(message => message.dismiss('not loaded', 'api timeout')));
  }

  async presentLoading() {
    this.loading = this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      backdropDismiss:  false
    });
    this.loading.then(async (message) => {
      message.present()
      const { data, role } = await message.onDidDismiss();
      if(role == undefined || role == 'api timeout'){
        this.loadError = true
      }
    })
  }

}
