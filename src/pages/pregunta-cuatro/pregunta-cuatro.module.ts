import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreguntaCuatroPage } from './pregunta-cuatro';

@NgModule({
  declarations: [
    PreguntaCuatroPage,
  ],
  imports: [
    IonicPageModule.forChild(PreguntaCuatroPage),
  ],
  exports: [
    PreguntaCuatroPage
  ]
})
export class PreguntaCuatroPageModule {}
