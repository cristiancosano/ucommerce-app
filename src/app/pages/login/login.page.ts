import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private password: string;
  private email: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  login(){
    this.userService.auth(this.email, this.password);
    if(this.userService.isAuth){
      console.log(this.userService.getToken())
      console.log('logeado')
    }
  }
}
