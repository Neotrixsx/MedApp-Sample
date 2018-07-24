import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl = 'http://metrohospitalweb.com/dasuiauysdaisdaosidaid121245321_23232$$$$/index.php/admin/WEBPHARMA/purchase_bill_invoice';

@Injectable()
export class RestapiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestapiProvider Provider');
  }

  postData() {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
      .set('Accept', 'application/json')
      .set('content-type', 'application/json');
      this.http.post(apiUrl, { 'KEY': 1234 }, { headers: headers }).
        subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
