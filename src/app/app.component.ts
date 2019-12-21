import { Component } from '@angular/core';
import { InfoService } from './info.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onlinestore';
  public service;
  constructor(private myservice:InfoService){}
  ngOnInit() {
    this.service=this.myservice;

  }
  public nav="topnav";
  public myFunction() {
    if(this.nav==="topnav"){
      this.nav="topnav responsive";    }
      else{
        this.nav="topnav"
      }
  
  }
  public cartupdate(){
    this.service.cartdata1=this.service.cartdata;
    console.log(this.service.cartdata1);
  }
  

}
