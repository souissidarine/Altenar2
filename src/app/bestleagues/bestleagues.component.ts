import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {APIService} from '../api.service'


@Component({
  selector: 'app-bestleagues',
  templateUrl: './bestleagues.component.html',
  styleUrls: ['./bestleagues.component.css']
})
export class BestleaguesComponent implements OnInit {

sportslist : any;
bestleaguess : any ;

  constructor(private http:HttpClient , private api:APIService) {
  
  }
 
  ngOnInit() {
    
    this.getsportslist();
    this.getbestleagues();
    
    
    
    
  }

  getsportslist(){
    this.api.sportlist().subscribe((sl: any)=>{
      this.sportslist = sl;
      console.log(this.sportslist);
      
    })
  }
  
  getbestleagues(){
    this.api.bestleauges().subscribe((bs:any)=>{
      this.bestleaguess = bs.Result;
     // console.log(this.bestleaguess)
    })
  }


}
