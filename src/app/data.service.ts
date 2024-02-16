import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  mydataUrl ='./assets/my-info.json';
  myData: any;

  constructor(private http: HttpClient) {
    // this.http.get(this.mydataUrl).subscribe(data =>{
    //   this.myData = data;
    // });
  }

  getData() {
    this.http.get(this.mydataUrl).subscribe(data =>{
      this.myData = data;
    });
    return this.myData;
  }
}
