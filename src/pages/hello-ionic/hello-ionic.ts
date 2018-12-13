import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { PreguntaUnoPage } from '../pregunta-uno/pregunta-uno';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  constructor(private navCtrl: NavController) {
    
  }
  changeIntoPageOne(){
    this.navCtrl.push(PreguntaUnoPage);
  }
}
