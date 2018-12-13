import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CorrectasCeroPage } from '../correctas-cero/correctas-cero';
import { CorrectasUnoPage } from '../correctas-uno/correctas-uno';
import { CorrectasDosPage } from '../correctas-dos/correctas-dos';
import { CorrectasTresPage } from '../correctas-tres/correctas-tres';
import { CorrectasCuatroPage } from '../correctas-cuatro/correctas-cuatro';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

/**
 * Generated class for the PreguntaCuatroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pregunta-cuatro',
  templateUrl: 'pregunta-cuatro.html',
})
export class PreguntaCuatroPage {

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
    console.log('ionViewDidLoad PreguntaCuatroPage');
  }

  changeIntoPrizePage(){
    switch(this.score) {
      case 0: this.navCtrl.push(CorrectasCeroPage); break;
      case 1: this.navCtrl.push(CorrectasUnoPage); break;
      case 2: this.navCtrl.push(CorrectasDosPage); break;
      case 3: this.navCtrl.push(CorrectasTresPage); break;
      case 4: this.navCtrl.push(CorrectasCuatroPage); break;
    }
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
    this.isRightAnswer(false);

    this.checkedFirstOptionBackgroundColor = "#fd3a38";
    this.checkedFourthOptionBackgroundColor = "#0d2b6a";

    this.checkedFirstOptionTextColor="#ffffff";
    this.checkedFourthOptionTextColor="#ffffff";
  }

  secondOptionChecked() {
    this.isRightAnswer(false);

    this.checkedSecondOptionBackgroundColor = "#fd3a38";
    this.checkedFourthOptionBackgroundColor = "#0d2b6a";

    this.checkedSecondOptionTextColor="#ffffff";
    this.checkedFourthOptionTextColor="#ffffff";
  }

  thirdOptionChecked() {
    this.isRightAnswer(false);

    this.checkedThirdOptionBackgroundColor = "#fd3a38";
    this.checkedFourthOptionBackgroundColor = "#0d2b6a";

    this.checkedThirdOptionTextColor="#ffffff";
    this.checkedFourthOptionTextColor="#ffffff";
  }

  fourthOptionChecked() {
    this.isRightAnswer(true);
    this.score++;

    this.checkedFourthOptionBackgroundColor = "#0d2b6a";

    this.checkedFourthOptionTextColor="#ffffff";
  }

}
