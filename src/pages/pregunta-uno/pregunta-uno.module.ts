import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreguntaUnoPage } from './pregunta-uno';

@NgModule({
  declarations: [
    PreguntaUnoPage,
  ],
  imports: [
    IonicPageModule.forChild(PreguntaUnoPage),
  ],
  exports:[
    PreguntaUnoPage
  ]
})
export class PreguntaUnoPageModule {}
