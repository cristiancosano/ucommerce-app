import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Order } from 'src/app/interfaces/Order';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-orderHistory',
  templateUrl: './orderHistory.page.html',
  styleUrls: ['./orderHistory.page.scss'],
})
export class OrderHistoryPage implements OnInit {

  id: number;
  order: Order;
  loading: Promise<HTMLIonLoadingElement>;
  loadError: Boolean

  constructor(private route: ActivatedRoute, private orderService: OrderService, private loadingController: LoadingController) { 
    this.order = {orderId: 0, total: '0', createdAt:'', updatedAt: ''}
    this.loadError = false;
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.presentLoading()
    this.getOrderHistory()
  }

  
  getOrderHistory(){
    this.orderService.getOrderById(this.id).then(async (order: Order) => {
      this.order = order
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
