import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket : any;
  readonly uri:string = "http://192.168.1.26:2000";
  constructor() {
    //this.socket = io(this.uri);
   }

   
   listen(eventName:string){
    //  return new Observable((Subscriber)=>{
    //    this.socket.on(eventName,(data)=>{
    //      Subscriber.next(data);
    //    })
    //  })
   }
   emit(eventName,data){
     //this.socket.emit(eventName,data);
   }
}
