import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private password: string;
  private email: string;

  constructor(private userService: UserService, private navCtrl: NavController) { }

  ngOnInit() {

  }

  login(){
    this.userService.login(this.email, this.password).then(token => {
      localStorage.setItem('token', JSON.stringify(token));
    })
    if(this.userService.isAuth){
      console.log(this.userService.getToken())
      this.navCtrl.back()
    }
  }
}
