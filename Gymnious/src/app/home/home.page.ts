import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
import { PopoverController, Events } from "@ionic/angular";
import { LoginComponent } from "../login/login.component";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { PerfilService } from '../perfil/perfil.service';
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  activities: Observable<any> = this.afs
    .collection(`activities`)
    .valueChanges();

  constructor(
    private titleService: Title,
    public authService: AuthService,
    private router: Router,
    public popoverController: PopoverController,
    private afs: AngularFirestore,
    private perfilService: PerfilService
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

  logout() {
    this.authService.logout();
  }
  async showPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: LoginComponent,
      event: ev,
      cssClass: "loginPopover"
    });

    return await popover.present();
  }

  toPerfil(){
    this.router.navigateByUrl("/perfil");
  }
  inicioSesion(ev: any) {
    this.showPopover(ev);
  }

  guardarActividad(uid: string){
    this.perfilService.addToActividades(uid);
  }
  eliminarActividad(uid:string){
    this.perfilService.removeFromActividades(uid);
  }
}
