import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
import { PopoverController, Events, ModalController } from "@ionic/angular";
import { LoginComponent } from "../login/login.component";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { PerfilService } from '../perfil/perfil.service';
import { ActividadModalComponent } from '../actividad-modal/actividad-modal.component';
import { HomeService } from './home.service';
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  activities:Observable<any>;
  
  constructor(
    private titleService: Title,
    public authService: AuthService,
    private router: Router,
    public popoverController: PopoverController,
    private afs: AngularFirestore,
    private perfilService: PerfilService,
    private modalController: ModalController,
    private homeService: HomeService
  ) {
    
  }

  ngOnInit() {
    this.titleService.setTitle("Gymnious");
    this.activities = this.homeService.activities;
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
  async mostrarModal(item:any){
    const modal = await this.modalController.create({
      component: ActividadModalComponent,
      componentProps: {
        item
      }
    });
    return await modal.present();
  }

  turnPesas(){
    this.activities = this.homeService.turnPesas();
  }
  turnCardio(){
    this.activities = this.homeService.turnCardio();
  }
  turnAbs(){
    this.activities = this.homeService.turnAbs();
  }
  turnTodos(){
    this.activities = this.homeService.turnTodos();
  }
}