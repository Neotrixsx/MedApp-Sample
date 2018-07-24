import { JsonProvider } from './../../providers/json/json';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  newsData: any;
  parameter: any;
  titleno: any;
  datax;
  constructor(public navCtrl: NavController, public navParams: NavParams, public jsonProvider: JsonProvider) {
    this.parameter = navParams.get('param');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  getdata() {
    // return this._http.get(this._url).pipe(map((response: Response) => <IEmployee[]>response.json()));
    this.jsonProvider.getJsonData()
      .pipe(map(data => this.datax))
      .subscribe(
        data => {
          this.newsData = this.datax.filter(item => item.p_invo_id === this.parameter + "");
          this.titleno = parseInt(this.parameter) + 1;
          console.log("Success : " + this.titleno);
        },
        err => {
          console.error("Error : " + err);
        },
        () => {
          console.log('getData completed');
        }
      );
  }
}
