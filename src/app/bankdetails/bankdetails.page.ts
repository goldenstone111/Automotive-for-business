import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  FormControl,
  Validators
} from "@angular/forms";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-bankdetails",
  templateUrl: "./bankdetails.page.html",
  styleUrls: ["./bankdetails.page.scss"]
})
export class BankdetailsPage implements OnInit {
  bankdetails: FormGroup;
  bankdocuments = [
    { url: '../../assets/shapes.svg'},
    { url: '../../assets/Phone.svg'},
    { url: '../../assets/phone1.svg'}
  ];
  constructor(private formBuilder: FormBuilder, public router : Router, public camera: Camera) {}

  ngOnInit() {
    this.bankdetails = this.formBuilder.group({
      accountnumber: new FormControl("", [Validators.required]),
      beneficiaryname: new FormControl("", [Validators.required]),
      abanumber: new FormControl("", [Validators.required]),
      bankname: new FormControl("", [Validators.required]),
      bankaddress: new FormControl("", [Validators.required])
    });
  }

  openCamera(i, j) {
    const options: CameraOptions = {
      sourceType:
        i == 1
          ? this.camera.PictureSourceType.CAMERA
          : this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 80,
      targetWidth: 150,
      allowEdit: true,
      targetHeight: 150,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false
    };

    this.camera.getPicture(options).then(imageData => {
      let picture = { url: "data:image/jpeg;base64," + imageData };
      this.bankdocuments.push(picture);
    });
  }

  removeItem(i){
     this.bankdocuments.splice(i,1);
    }

    addbankdetails(){
    console.log("data saved");
    this.router.navigate(['/addphotos'])
    }
    skip(){
      this.router.navigate(['/addphotos'])
    }
}
