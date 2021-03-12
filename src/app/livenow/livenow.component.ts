import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../api.service'

@Component({
  selector: 'app-livenow',
  templateUrl: './livenow.component.html',
  styleUrls: ['./livenow.component.css']
})
export class LivenowComponent implements OnInit {
  active = 1;
  football: any;
  basketball: any;
  tennis: any;
  lv10: any

  displayTotal = false;
  displayBut = false;
  displayEq = false;
  display1x2 = false
  Menu = []
  constructor(private http: HttpClient, private api: APIService) { }


  public isCollapsed = true;
  ngOnInit(): void {
    
    
    
  
  }





clickEvent(){
    this.isCollapsed = !this.isCollapsed;       
}
 
 


  DisplayTotal() {
    this.displayTotal = !this.displayTotal
  }
  DisplayBut() {
    this.displayBut = !this.displayBut
  }
  DisplayEq() {
    this.displayEq = !this.displayEq
  }
  Display1x2() {
    this.display1x2 = !this.display1x2
  }
}
