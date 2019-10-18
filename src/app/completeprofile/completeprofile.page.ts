import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx"; 
@Component({
  selector: "app-completeprofile",
  templateUrl: "./completeprofile.page.html",
  styleUrls: ["./completeprofile.page.scss"]
})
export class CompleteprofilePage implements OnInit {
  profiledetail: FormGroup;
  businessDetails: FormGroup;
  Picture:any;
  isPicture=false;
  BusinessPicture:any;
  isBusinessPicture=false;
  regcertificate=[ 
    { url: '../../assets/shapes.svg'},
    { url: '../../assets/Phone.svg'},
    { url: '../../assets/phone1.svg'}
  ];
  licencenumber=[
    { url: '../../assets/Phone.svg'},
    { url: '../../assets/shapes.svg'},
    { url: '../../assets/phone1.svg'}
  ];
  addressproof=[
    { url: '../../assets/phone1.svg'},
    { url: '../../assets/Phone.svg'},
    { url: '../../assets/shapes.svg'}
  ];
  step = 1;
  chooseOption:any;
  countries = [
    {
      name: "United States",
      dial_code: "+1",
      code: "US"
    },
    {
      name: "Israel",
      dial_code: "+972",
      code: "IL"
    },
    {
      name: "Afghanistan",
      dial_code: "+93",
      code: "AF"
    }
  ];
  validation_messages = {
    //personal details errors
    fname: [{ type: "required", message: "Please enter first name." }],
    lname: [{ type: "required", message: "Please enter last name." }],
    email: [
      { type: "required", message: "Please enter email." },
      { type: "email", message: "Enter a valid email." }
    ], 
    address: [{ type: "required", message: "Please enter address." }],
    zip: [
      { type: "required", message: "Zip code is required." },
      { type: "minlength", message: "Zip code must be at least 3 Character long." },
      { type: "maxlength", message: "Zip code must be at most 10 digit." }
    ],
    city: [{ type: "required", message: "Please enter city." }],
    state: [{ type: "required", message: "Please enter state." }],
    country: [{ type: "required", message: "Please select country." }],
    //card errors
    bname:[{ type: "required", message: "please enter business name." }],
    blnumber:[{ type: "required", message: "Please enter business licence number." }],
    baddress:[{ type: "required", message: "Please enter business address." }],
    bzip:[{ type: "required", message: "please enter zip." }],
    bcity:[{ type: "required", message: "Please enter city." }],
    bstate:[{ type: "required", message: "Please enter state." }],
    bcountry:[{ type: "required", message: "Please enter country." }]
    
  };
  isError=false;
  monthlist:any=[];
  yearlist:any=[];
  selectHeader:any={
    header:"Select One"
  }
  constructor(public actionSheetController : ActionSheetController, public camera : Camera ,private formBuilder: FormBuilder, public router: Router) {}

  ngOnInit() {
    this.profiledetail = this.formBuilder.group({
      fname: new FormControl("", [Validators.required]),
      lname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required,Validators.email]),
      address: new FormControl("", [Validators.required]),
      zip: new FormControl("", [Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
      city: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required])
    });
    this.businessDetails = this.formBuilder.group({
      bname: new FormControl("", [Validators.required]),
      blnumber: new FormControl("", [Validators.required]),
      bdetails: new FormControl("", [Validators.required]),
      baddress: new FormControl("", [Validators.required]),
      bzip: new FormControl("", [Validators.required]),
      bcity: new FormControl("", [Validators.required]),
      bstate: new FormControl("", [Validators.required]),
      bcountry:new FormControl("", [Validators.required])
      
    });
    this.profiledetail.valueChanges.subscribe(console.log);
    this.businessDetails.valueChanges.subscribe(()=>{console.log(this.businessDetails.status)
    });
    this.businessDetails.status
    for(let i=1;i<=12;i++){
      this.monthlist.push(i);
    }
    for(let i=22;i<=70;i++){
      this.yearlist.push(i);
    }
    
  }


  continue() {
    if(!this.profiledetail.valid){
      console.log("complete step 1 properly");
    }else {
      this.step=2 
      if(!this.businessDetails.valid){
        console.log("complete step 2 properly");
      }else {
        this.step=3 
      }
    }
  }
  async UploadOption(){
      const actionSheet = await this.actionSheetController.create({
        header: 'Choose One',
        mode:'md',
        buttons: [
          {
            text: "Open Camera",
            role: "destructive",
            icon: "md-camera",
            handler: () => {
              this.openCamera(1,1);
            }
          },
          {
            text: "Open Gallery",
            icon: "md-image",
            handler: () => {
              this.openCamera(2,2);
            }
          },
          {
            text: "Cancel",
            icon: "close",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            }
          }
        ]
      });
      await actionSheet.present();
    }
    openCamera(i,j) {
      
      const options: CameraOptions = {
      
        sourceType: i == 1 ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        quality: 80,
        targetWidth: 150,
        allowEdit: true,
        targetHeight: 150,
        encodingType: this.camera.EncodingType.JPEG,
        saveToPhotoAlbum: false
      };
  
      this.camera.getPicture(options).then(
        imageData => {
         if(j==1){
          this.isPicture=true;
          this.Picture ='data:image/jpeg;base64,' + imageData;
         }
         else if(j==2){
          this.isBusinessPicture=true;
          this.BusinessPicture ='data:image/jpeg;base64,' + imageData;
         }
         else if(j==3){
          let picture={ url: 'data:image/jpeg;base64,' + imageData };
          this.regcertificate.push(picture);
         }
         else if(j==4){
          let picture={ url: 'data:image/jpeg;base64,' + imageData };
          this.licencenumber.push(picture);
        }
        else if(j==5){
          let picture={ url: 'data:image/jpeg;base64,' + imageData };
          this.addressproof.push(picture);
        } 
        },
        err => {
          if(err==20){
           // this.authservice.presentToast("Please give permission in settings > app setting > sneakerhub > permissions in order to access camera");
          }else{
           // this.authservice.presentToast(err);
          }
        }
      );
    }
    removeItem(i,j){
      if(j==1){
       this.regcertificate.splice(i,1);
      }
      else if(j==2){
        this.licencenumber.splice(i,1);
      }
      else if(j==3){
        this.addressproof.splice(i,1);     
      }
    }
  saveDetails(){
    if(this.regcertificate.length>0 && this.licencenumber.length>0 && this.addressproof.length>0){
      this.router.navigate(['/bankdetails']);
    }else{
      // toast attatch all valid documents
    }
    
  }
}
