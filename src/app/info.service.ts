import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor() { }
  public updatecount;
  public count=0;
  public cartindex=0;
  public cartcounter(){
   this.count+=1;
   this.updatecount=this.count;
   }
   

   public getdata(){
     return [[{id:1,name:'jbl-go2',price:750,like:5,img:"https://rukminim1.flixcart.com/image/612/612/k1l1ea80/speaker/mobile-tablet-speaker/7/j/z/jbl-jblgo2blk-original-imafh4b8hadqj8s2.jpeg?q=70" },
     {id:2,name:'jbl-tunner',price:3000,like:25,img:"https://rukminim1.flixcart.com/image/612/612/k0lbdzk0pkrrdj/speaker/mobile-tablet-speaker/p/c/e/jbl-jbltunerfmblkin-original-imaffy9hhzdva8df.jpeg?q=70"},
     {id:3,name:'jbl-joombox',price:3700,like:28,img:"https://rukminim1.flixcart.com/image/612/612/k0lbdzk0pkrrdj/speaker/home-audio-speaker/p/r/d/jbl-boombox-original-imafj9zgyenpy2rt.jpeg?q=70"}
    ],
       [{id:4,name:'bootstone1000',price:2600,like:30,img:"https://rukminim1.flixcart.com/image/612/612/k0vbgy80pkrrdj/speaker/mobile-tablet-speaker/7/m/d/boat-stone-1000-original-imafg96ydhzhj4rp.jpeg?q=70"},
       {id:5,name:'bootstone230',price:1000,like:39,img:"https://rukminim1.flixcart.com/image/612/612/jqqy6q80/speaker/mobile-tablet-speaker/q/x/5/boat-stone-230-original-imafbh6hazg9zrfv.jpeg?q=70"},
       {id:6,name:'bootrugby',price:1800,like:94,img:"https://rukminim1.flixcart.com/image/612/612/k0vbgy80pkrrdj/speaker/mobile-tablet-speaker/n/y/v/boat-rugby-original-imafjd7hnzyzqcpq.jpeg?q=70"}
      ] ,
      [{id:7,name:'bootstone260',price:1100,like:78,img:"https://rukminim1.flixcart.com/image/612/612/j2ur3ww0-2/speaker/mobile-tablet-speaker/z/q/k/boat-stone-260-original-imaeu3ycwhnkjt5a.jpeg?q=70"},
      {id:8,name:'jbl-t110',price:900,like:48,img:"https://rukminim1.flixcart.com/image/200/200/jkk1hu80/headphone/p/k/f/jbl-t110bt-wireless-pure-bass-original-imaf7vpzpxvqrbgw.jpeg?q=70"},
      {id:9,name:'bootrockzer',price:800,like:71,img:"https://rukminim1.flixcart.com/image/200/200/jxw5g280/headphone/y/9/n/boat-rockerz-255f-original-imafg96ynyx9ty6e.jpeg?q=70"}
     ]  ];
   }
   public cartdata=[];
   public cartdata1=[];
   public getcartdata(){
     return this.cartdata1;
   }

  }

