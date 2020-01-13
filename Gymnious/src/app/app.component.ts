import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './home/home.page';
import { HomeService } from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private homeService: HomeService,
    private menuController: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
  turnCardio(){
    this.homeService.turnCardio();
    this.menuController.close();
  }
  turnAbs(){
    this.homeService.turnAbs();
    this.menuController.close();
  }
  turnTodos(){
    this.homeService.turnTodos();
    this.menuController.close();
  }
  turnPesas(){
    this.homeService.turnPesas();
    this.menuController.close();
  }
}
