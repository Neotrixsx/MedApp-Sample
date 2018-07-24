import { JsonProvider } from './../../providers/json/json';
import { RestapiProvider } from './../../providers/restapi/restapi';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  resposeData;
  jsonData;
  newsData;
  constructor(public navCtrl: NavController, public navParams: NavParams, public jsonProvider: JsonProvider, public restfulServices: RestapiProvider) {
    this.restfulServices.postData()
      .then((result) => {
        this.resposeData = result;
        console.log(this.resposeData);
      }, (err) => {
        console.log(err);
      });

    this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getdata() {
    this.jsonData = this.jsonProvider.getJsonData();
    this.newsData = this.jsonData.response;
    if (this.newsData) {
      console.log(this.newsData);
      
      console.log('getData completed');
    } else {
      console.error("Error : Json not loaded from provider");
    }
  }

  itemSelected(selected) {
    this.navCtrl.push('InfoPage', {
      param: selected
    });
  }

}
