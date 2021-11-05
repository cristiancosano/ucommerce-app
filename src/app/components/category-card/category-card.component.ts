import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {

  @Input() name: string;
  @Input() id: number;
  @Input() index: number;

  private color: string;
  private colors: Array<string> = ['primary', 'dark', 'success', 'danger', 'secondary', 'medium', 'light', 'warning', 'tertiary'];

  constructor() {

   }

  ngOnInit() {
    this.color = this.colors[this.index % this.colors.length];
  }

}
