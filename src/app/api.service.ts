import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {


  urlc= 'http://192.168.1.26:3000/country/';
  urll= 'http://192.168.1.26:3000/leagues/';
  urlsport = 'http://192.168.1.26:3000/Sport';
  urlsportwc = 'http://192.168.1.26:3000/Sportswithcount'
  constructor(private http:HttpClient) { 
    this.sportlist();
    
      this.live10ev();
      this.bestleauges();
  }
  sportlist(){
    return this.http.get(this.urlsportwc);
  }
 

  bestleauges(){
  return this.http.get(this.urlc);
}
live10ev(){
return this.http.get(this.urlsportwc);
}

getcountries(sportid):Observable<any[]>{

  return   this.http.get<any[]>(this.urlc+sportid);


}

getleagues(sportid,countryname):Observable<any[]>{
  
  return this.http.get<any[]>(this.urll+sportid+'/'+countryname);
}

}