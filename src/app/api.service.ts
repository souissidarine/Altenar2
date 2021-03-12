import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {


  urll = 'https://sb1capi-altenar.biahosted.com/Sportsbook/GetFavouritesChamps?timezoneOffset=-60&langId=1&skinName=default&configId=1&culture=en-GB&deviceType=Mobile&numformat=en&period=periodmonth&sportId=&startDate=2021-02-16T10%3A02%3A00.000Z&endDate=2021-03-18T10%3A02%3A00.000Z';
  urlsport = 'http://192.168.1.26:3000/Sport';
  urlsportwc = 'http://192.168.1.26:3000/Sportswithcount';
  urlPaysByIdSports = "http://192.168.1.26:3000/country/"
  private data = new BehaviorSubject<string>("");
  castdata = this.data.asObservable();


  constructor(private http: HttpClient) {
    this.sportlist();

    this.live10ev();
    this.bestleauges();
  }
  sportlist() {
    return this.http.get(this.urlsportwc);
  }


  bestleauges() {
    return this.http.get(this.urll);
  }
  live10ev() {
    return this.http.get(this.urlsportwc);
  }
  sendData(data) {

    this.data.next(data);

  }

  getPaysByIdSports(id) {
    debugger;
    return this.http.get<any[]>(this.urlPaysByIdSports + id);
  }

  getLeagues(idSports, countryName) {
    return this.http.get<any[]>("http://192.168.1.26:3000/leagues/"+idSports+"/"+countryName)
  }
  getMarkets(){
    return this.http.get<any[]>("https://prematch.lsports.eu/OddService/GetFixtureMarkets?username=skillwarecomp@gmail.com&password=h6rt7m34&guid=a1f5f44b-01fd-48b4-b2fd-86ecf873a8f0&Locations=243&Sports=6046&Fixtures=6384145")

  }
  getPrematch(){
    return this.http.get<any[]>("https://prematch.lsports.eu/OddService/GetFixtures?username=skillwarecomp@gmail.com&password=h6rt7m34&guid=a1f5f44b-01fd-48b4-b2fd-86ecf873a8f0&Locations=243&Sports=6046")

  }
  getBet(fixture){
    return this.http.get<any[]>("https://prematch.lsports.eu/OddService/GetFixtureMarkets?username=skillwarecomp@gmail.com&password=h6rt7m34&guid=a1f5f44b-01fd-48b4-b2fd-86ecf873a8f0&Locations=243&Sports=6046&Fixtures="+fixture)

  }
}