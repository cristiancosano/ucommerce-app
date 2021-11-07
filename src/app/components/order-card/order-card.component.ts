import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() orderId: any;
  @Input() total: any;
  @Input() createdAt: any;
  @Input() updatedAt: any;
  
  constructor() { }

  ngOnInit() {}

}
