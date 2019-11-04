import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'authentication', loadChildren: './authentication/authentication.module#AuthenticationPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'otpverify', loadChildren: './otpverify/otpverify.module#OtpverifyPageModule' },
  { path: 'completeprofile', loadChildren: './completeprofile/completeprofile.module#CompleteprofilePageModule' },
  { path: 'bankdetails', loadChildren: './bankdetails/bankdetails.module#BankdetailsPageModule' },
  { path: 'addphotos', loadChildren: './addphotos/addphotos.module#AddphotosPageModule' },
  { path: 'deliverysetting', loadChildren: './deliverysetting/deliverysetting.module#DeliverysettingPageModule' },
  { path: 'services', loadChildren: './services/services.module#ServicesPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },  { path: 'order', loadChildren: './order/order.module#OrderPageModule' },
  { path: 'bankaccounts', loadChildren: './bankaccounts/bankaccounts.module#BankaccountsPageModule' },
  { path: 'businessprofile', loadChildren: './businessprofile/businessprofile.module#BusinessprofilePageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
