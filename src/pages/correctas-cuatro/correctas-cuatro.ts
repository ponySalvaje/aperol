import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

/**
 * Generated class for the CorrectasCuatroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-correctas-cuatro',
  templateUrl: 'correctas-cuatro.html',
})
export class CorrectasCuatroPage {

  startagain: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorrectasCuatroPage');
  }

  finishQuiz() {
    this.navCtrl.push(HelloIonicPage);
  }

  menuClicked() {
    this.startagain = true;
  }

  closeMenu() {
    this.startagain = false;
  }

  startAgain() {
    this.navCtrl.push(HelloIonicPage);
  }

}