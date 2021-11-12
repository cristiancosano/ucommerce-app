import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cart-show-card',
  templateUrl: './cart-show-card.component.html',
  styleUrls: ['./cart-show-card.component.scss'],
})
export class CartShowCardComponent implements OnInit {
  @Input() quantity: any;
  @Input() price: any;
  private total: any;
    constructor() { }

  ngOnInit() {
    this.total = this.quantity * this.price;
  }

}
