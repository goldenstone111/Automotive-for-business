import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  list=[];
  constructor(public router:Router) { }
  obj={step:1}
  ngOnInit() {
    this.list = [
      {
        title: "Business Profile",
        component: "../businessprofile",
        icon: "../../assets/home/businessprofile.svg"
      },
      {
        title: "Bank Account",
        component: "/bankaccounts",
        icon: "../../assets/home/bankaccount.svg"
      },
      {
        title: "Order",
        component: "/order",
        icon: "../../assets/home/orders.svg"
      },
      {
        title: "Photos",
        component: "/addphotos",
        icon: "../../assets/home/photos.svg"
      },
      {
        title: "Help",
        component: "../help",
        icon: "../../assets/home/help.svg"
      },
      {
        title: "Logout",
        component: "../help",
        icon: "../../assets/home/logout.svg"
      }
    ]
  }
  openPage(item) {
    this.router.navigate([item.component]);
  }
  editProfile(){
    this.router.navigate(["/completeprofile",this.obj]);
  }
}
