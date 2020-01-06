import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
import { PopoverController, Events } from "@ionic/angular";
import { LoginComponent } from "../login/login.component";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(
    private titleService: Title,
    private authService: AuthService,
    private router: Router,
    public popoverController: PopoverController,
    private events: Events
  ) {}

  ngOnInit() {
    this.titleService.setTitle("Gymnious");
  }

  onClick() {
    //TODO remove
    console.log("funciona bro");
  }
  toHome() {
    this.router.navigateByUrl("/home");
  }

  logout(){
    this.authService.logout();
  }
  async showPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LoginComponent,
      event: ev,
      cssClass: 'loginPopover'
    });
    
    return await popover.present();
  }

  perfil(ev: any) {
    if (this.authService.isAuth()) {
      console.log("iniciado sesion");
      this.router.navigateByUrl("/perfil");
    } else {
      console.log("a iniciar sesion");
      this.showPopover(ev);
    }
  }
}
