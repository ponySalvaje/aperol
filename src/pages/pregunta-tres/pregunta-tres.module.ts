import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreguntaTresPage } from './pregunta-tres';

@NgModule({
  declarations: [
    PreguntaTresPage,
  ],
  imports: [
    IonicPageModule.forChild(PreguntaTresPage),
  ],
  exports: [
    PreguntaTresPage
  ]
})
export class PreguntaTresPageModule {}
