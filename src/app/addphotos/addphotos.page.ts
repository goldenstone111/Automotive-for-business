import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

import { Router } from "@angular/router";
@Component({
  selector: 'app-addphotos',
  templateUrl: './addphotos.page.html',
  styleUrls: ['./addphotos.page.scss'],
})
export class AddphotosPage implements OnInit {
  storephotos=[];
  isPicture=true;
  options:any;
  constructor(private imagePicker: ImagePicker,private router: Router) { 
    this.storephotos.length=8;
  }

  ngOnInit() {
  }
  // getImages(){
  //   const options ={
  //     maximumImagesCount: 8,
  //     quality: 50,
  //     outputType: 1
  //   }
  //   this.imagePicker.getPictures(options).then((results) => {
  //     for (var i = 0; i < results.length; i++) {
  //         this.storephotos.push('data:image/jpeg;base64,' + results[i]);
  //     }
  //   }, (err) => { });
  // }

  getImages() {
    this.options = {
      width: 200,
      quality: 25,
      outputType: 1
    };
    this.storephotos = [];
    this.imagePicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.storephotos.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (err) => {
      alert(err);
    });
  }
 
}