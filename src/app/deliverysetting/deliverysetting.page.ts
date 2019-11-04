import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliverysetting',
  templateUrl: './deliverysetting.page.html',
  styleUrls: ['./deliverysetting.page.scss'],
})
export class DeliverysettingPage implements OnInit {
  isAlert:boolean=false;
  miles=[];
  charge=[];
  constructor(public router: Router) {
  this.miles.length=15;
  this.charge.length=15;
   }

  ngOnInit() {
  }
  openmodal(){
    this.isAlert=true;
  }
  skip(){
    this.router.navigate(['/home'])
  }
  saveOffer(){
    this.router.navigate(['/home'])
  }


}
