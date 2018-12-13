import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PreguntaTresPage } from '../pregunta-tres/pregunta-tres';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

/**
 * Generated class for the PreguntaDosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pregunta-dos',
  templateUrl: 'pregunta-dos.html',
})
export class PreguntaDosPage {

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

  score;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntaDosPage');
  }

  changeIntoPageThree(){
    this.navCtrl.push(PreguntaTresPage, { data: this.score } );
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

  closePopUpRightAnswerMessage() {
    this.rightanswer = false;
  }

  closePopUpWrongAnswerMessage() {
    this.wronganswer = false;
  }

  isRightAnswer(answer: boolean) {
    (answer) ? this.rightanswer = true : this.wronganswer = true;
    (this.rightanswer) ? setTimeout(()=>{this.rightanswer = false}, 3000) : setTimeout(()=>{this.wronganswer = false}, 3000);

    this.enabledBackgroundColor = "#ed7102";
    this.enabledTextColor = "#ffffff";
    this.isEnabled = true;
  }

  firstOptionChecked() {
    this.isRightAnswer(true);
    this.score++;

    this.checkedFirstOptionBackgroundColor = "#0d2b6a";

    this.checkedFirstOptionTextColor = "#ffffff";
  }

  secondOptionChecked() {
    this.isRightAnswer(false);

    this.checkedSecondOptionBackgroundColor = "#fd3a38";
    this.checkedFirstOptionBackgroundColor = "#0d2b6a";

    this.checkedSecondOptionTextColor = "#ffffff";
    this.checkedFirstOptionTextColor = "#ffffff";
  }

  thirdOptionChecked() {
    this.isRightAnswer(false);

    this.checkedThirdOptionBackgroundColor = "#fd3a38";
    this.checkedFirstOptionBackgroundColor = "#0d2b6a";

    this.checkedThirdOptionTextColor = "#ffffff";
    this.checkedFirstOptionTextColor = "#ffffff";
  }

  fourthOptionChecked() {
    this.isRightAnswer(false);

    this.checkedFourthOptionBackgroundColor = "#fd3a38";
    this.checkedFirstOptionBackgroundColor = "#0d2b6a";

    this.checkedFourthOptionTextColor = "#ffffff";
    this.checkedFirstOptionTextColor = "#ffffff";
  }

}
