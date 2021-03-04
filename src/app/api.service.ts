import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {


  urll= 'https://sb1capi-altenar.biahosted.com/Sportsbook/GetFavouritesChamps?timezoneOffset=-60&langId=1&skinName=default&configId=1&culture=en-GB&deviceType=Mobile&numformat=en&period=periodmonth&sportId=&startDate=2021-02-16T10%3A02%3A00.000Z&endDate=2021-03-18T10%3A02%3A00.000Z';
  urllive = 'https://sb1capi-altenar.biahosted.com/Sportsbook/GetLivenow?timezoneOffset=-60&langId=1&skinName=default&configId=1&culture=en-GB&deviceType=Desktop&numformat=en&sportId=1&showAllEvents=false&count=10';
 
  constructor(private http:HttpClient) { 
    this.sportlist();
    
      this.live10ev();
      this.bestleauges();
  }
  sportlist(){
    return this.http.get(this.urll);
  }
 

bestleauges(){
  return this.http.get(this.urll);
}
live10ev(){
return this.http.get(this.urllive);
}



}