import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { InfoService } from './info.service';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlidebarComponent,
    ProductComponent,
    CartComponent,
    RoutingComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
