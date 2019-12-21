
import { Component, OnInit } from '@angular/core';
import { InfoService } from './../info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public service;
  public cartno;

  constructor(private myservice:InfoService){}
  ngOnInit() {
    this.service=this.myservice;
    this.cartno=this.service.updatecount;
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
   // console.log(this.service.cartdata1);
  }
  

  
}

