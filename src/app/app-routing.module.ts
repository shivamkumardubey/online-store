import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
//import { InfoService } from './info.service';


const routes: Routes = [
  {path:"" ,component: HomeComponent },
{path:"home" ,component: HomeComponent },
{path:"cart",component:CartComponent},
{path:"Products",component:ProductComponent},
{path:"signup",component:SignupComponent},
{path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
export const RoutingComponent=[ProductComponent,SlidebarComponent,CartComponent,NavbarComponent,HomeComponent,SignupComponent,LoginComponent]

