import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PreguntaDosPage } from '../pregunta-dos/pregunta-dos';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

/**
 * Generated class for the PreguntaUnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pregunta-uno',
  templateUrl: 'pregunta-uno.html',
})
export class PreguntaUnoPage {

  startagain: boolean;
  rightanswer: boolean;
  wronganswer: boolean;
  enabledBackgroundColor: string;
  enabledTextColor: string;
  isEnabled: boolean;

  checkedFirstOptionBackgroundColor: string;
  checkedSecondOptionBackgroundColor: string;
  checkedThirdOptionBackgroundColor: string;
  checkedFourthOptionBackgroundColor: string;

  checkedFirstOptionTextColor: string;
  checkedSecondOptionTextColor: string;
  checkedThirdOptionTextColor: string;
  checkedFourthOptionTextColor: string;

  score = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntaUnoPage');
  }

  changeIntoPageTwo() {
    this.navCtrl.push(PreguntaDosPage, { data: this.score } );
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

  closePopUpWrongAnswerMessage() {
    this.wronganswer = false;
  }

  closePopUpRightAnswerMessage() {
    this.rightanswer = false;
  }

  isRightAnswer(answer: boolean) {
    (answer) ? this.rightanswer = true : this.wronganswer = true;
    (this.rightanswer) ? setTimeout(()=>{this.rightanswer = false}, 3000) : setTimeout(()=>{this.wronganswer = false}, 3000);

    this.enabledBackgroundColor = "#ed7102";
    this.enabledTextColor = "#ffffff";
    this.isEnabled = true;
  }

  firstOptionChecked() {
    this.isRightAnswer(false);

    this.checkedFirstOptionBackgroundColor = "#fd3a38";
    this.checkedSecondOptionBackgroundColor = "#0d2b6a";

    this.checkedFirstOptionTextColor="#ffffff";
    this.checkedSecondOptionTextColor="#ffffff";
  }

  secondOptionChecked() {
    this.isRightAnswer(true);
    this.score++;

    this.checkedSecondOptionBackgroundColor = "#0d2b6a";

    this.checkedSecondOptionTextColor="#ffffff";
  }

  thirdOptionChecked() {
    this.isRightAnswer(false);

    this.checkedThirdOptionBackgroundColor = "#fd3a38";
    this.checkedSecondOptionBackgroundColor = "#0d2b6a";

    this.checkedThirdOptionTextColor="#ffffff";
    this.checkedSecondOptionTextColor="#ffffff";
  }

  fourthOptionChecked() {
    this.isRightAnswer(false);

    this.checkedFourthOptionBackgroundColor = "#fd3a38";
    this.checkedSecondOptionBackgroundColor = "#0d2b6a";

    this.checkedFourthOptionTextColor="#ffffff";
    this.checkedSecondOptionTextColor="#ffffff";
  }

}
