import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {APIService} from '../api.service';
import { SocketService } from 'src/app/socket.service';


@Component({
  selector: 'app-bestleagues',
  templateUrl: './bestleagues.component.html',
  styleUrls: ['./bestleagues.component.css']
})
export class BestleaguesComponent implements OnInit {




  constructor(private http:HttpClient , private api:APIService) {
   
  }
 

 


  ngOnInit() {

   
  }



 



}
