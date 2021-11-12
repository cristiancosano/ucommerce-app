import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  private user: any;
  private email: string;
  private password: string;
  private name: string;
  private phone: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getDecodedToken()
    this.email = this.user.email;
    this.name = this.user.name;
    this.phone = this.user.phone;
    this.password = this.user.password;
  }

  saveProfile(){
    this.userService.update(this.name, this.email, this.password, this.phone)
    console.log('I need to save: ', {user: this.user, email: this.email, password: this.password, name: this.name, phone: this.phone} )
  }

}
