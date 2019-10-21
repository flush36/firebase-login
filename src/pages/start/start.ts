import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  uid: string;
  task;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage
    ) {
  }

  ionViewDidLoad() {
    this.storage.get('user').then((resolve)=> {
      this.uid = resolve;
    })
  }

  addTask(task: string) {
    console.log(task);
  }

}
