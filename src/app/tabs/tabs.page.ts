import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  private numCartItems: number

  constructor(private userService: UserService) {
    this.numCartItems = 0
  }

  isAuth = () => this.userService.isAuth()

  //TODO: Obtener del servicio de carrito el numero de articulos que hay en la cesta y setearlo en numCartItems.

}
