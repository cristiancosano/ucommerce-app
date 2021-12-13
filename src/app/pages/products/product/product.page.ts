import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product/product.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductExtended } from 'src/app/interfaces/ProductExtended';
import { CartItem } from 'src/app/interfaces/CartItem';
import { ToastController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  id: number;
  product: Product;
  cartItem : CartItem;
  productExtended: ProductExtended;
  loading: Promise<HTMLIonLoadingElement>;
  loadError: Boolean;
  

  constructor(private route: ActivatedRoute, private userService: UserService, private productService: ProductService, private loadingController: LoadingController, private cartService: CartService, private toastController: ToastController) { 
    this.product = {name: '', categoryId: 0, unitPrice: 0}
    this.loadError = false;
   }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.presentLoading()
    this.getProduct()
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    await toast.present();
  }

  addCart() {
    this.cartService.addItem(1, this.id)
      .then(() => {
        this.presentToast('Item succesfully added to your cart!')
      })
      .catch(() => {
        this.presentToast('There was a problem adding the item. It may already be in the cart or the connection failed.')
      });
  }

  getProduct(){
    this.productService.getProduct(this.id).then(async (product: Product) => {
      this.product = product
      this.loading.then(message => message.dismiss('loaded', 'ok'))
    }).catch(async() => this.loading.then(message => message.dismiss('not loaded', 'api timeout')));
  }

  isAuth = () => this.userService.isAuth()

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
