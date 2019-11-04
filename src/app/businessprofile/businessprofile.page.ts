import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-businessprofile',
  templateUrl: './businessprofile.page.html',
  styleUrls: ['./businessprofile.page.scss'],
})
export class BusinessprofilePage implements OnInit {
  obj={step:2}
  constructor(public router:Router) { }

  ngOnInit() {
  }

  editBProfile(){
    this.router.navigate(["/completeprofile",this.obj]);
  }
}
