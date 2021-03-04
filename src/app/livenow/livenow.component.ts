import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {APIService} from '../api.service'

@Component({
  selector: 'app-livenow',
  templateUrl: './livenow.component.html',
  styleUrls: ['./livenow.component.css']
})
export class LivenowComponent implements OnInit {
  active = 1;
  football : any;
  basketball : any ;
  tennis : any;
  lv10 : any
  

  
  constructor(private http:HttpClient , private api:APIService) { }
 

  public isCollapsed = true;
  ngOnInit(): void {
    
    
     this.get10live();
  
  }

get10live(){
  this.api.live10ev().subscribe((lv10:any)=>{
    this.lv10 = lv10.Result.Items[0].Events ;
    //console.log(this.lv10)
  })
}



clickEvent(){
    this.isCollapsed = !this.isCollapsed;       
}
 
 



}
