import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  private isAuth: Boolean;

  constructor(public actionSheetController: ActionSheetController, private userService: UserService) {
    this.isAuth = userService.isAuth();
  }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Are you sure you want logout?',
      buttons: [
        {
          text: 'Logout',
          role: 'destructive',
          icon: 'log-out-outline',
          handler: () => console.log('Logout clicked')  
        }, 
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => console.log('Cancel clicked')
        }
      ]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
