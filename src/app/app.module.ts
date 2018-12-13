import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PreguntaUnoPage } from '../pages/pregunta-uno/pregunta-uno';
import { PreguntaDosPage } from '../pages/pregunta-dos/pregunta-dos';
import { PreguntaTresPage } from '../pages/pregunta-tres/pregunta-tres';
import { PreguntaCuatroPage } from '../pages/pregunta-cuatro/pregunta-cuatro';
import { CorrectasCeroPage } from '../pages/correctas-cero/correctas-cero';
import { CorrectasUnoPage } from '../pages/correctas-uno/correctas-uno';
import { CorrectasDosPage } from '../pages/correctas-dos/correctas-dos';
import { CorrectasCuatroPage } from '../pages/correctas-cuatro/correctas-cuatro';
import { CorrectasTresPage } from '../pages/correctas-tres/correctas-tres';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    PreguntaUnoPage,
    PreguntaDosPage,
    PreguntaTresPage,
    PreguntaCuatroPage,
    CorrectasCeroPage,
    CorrectasUnoPage,
    CorrectasDosPage,
    CorrectasTresPage,
    CorrectasCuatroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    PreguntaUnoPage,
    PreguntaDosPage,
    PreguntaTresPage,
    PreguntaCuatroPage,
    CorrectasCeroPage,
    CorrectasUnoPage,
    CorrectasDosPage,
    CorrectasTresPage,
    CorrectasCuatroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
