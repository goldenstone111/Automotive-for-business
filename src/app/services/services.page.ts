import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {


  carsinfo :any =[]

  price :any=[];

  constructor(public router: Router) {
    this.price.length=100;
    this.carsinfo.length=5;
   }

  ngOnInit() {
  }
  updateService(){
    console.log("service price has been updated successfully");
    this.router.navigate(['/home'])
  }
}
