import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreguntaDosPage } from './pregunta-dos';

@NgModule({
  declarations: [
    PreguntaDosPage,
  ],
  imports: [
    IonicPageModule.forChild(PreguntaDosPage),
  ],
  exports: [
    PreguntaDosPage
  ]
})
export class PreguntaDosPageModule {}
