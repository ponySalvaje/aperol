import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

/**
 * Generated class for the CorrectasUnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-correctas-uno',
  templateUrl: 'correctas-uno.html',
})
export class CorrectasUnoPage {

  startagain: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorrectasUnoPage');
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
