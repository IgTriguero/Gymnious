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
  
  constructor(
    private titleService: Title,
    public authService: AuthService,
    private router: Router,
    public popoverController: PopoverController,
    private afs: AngularFirestore,
    private perfilService: PerfilService,
    private modalController: ModalController,
    public homeService: HomeService
  ) {
    
  }

  ngOnInit() {
    this.titleService.setTitle("Gymnious");
  }

  toHome() {
    this.router.navigateByUrl("/home");
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
  async mostrarModal(item:any){
    const modal = await this.modalController.create({
      component: ActividadModalComponent,
      componentProps: {
        item,
        page:'home'
      }
    });
    return await modal.present();
  }

  turnPesas(){
    this.homeService.turnPesas();
  }
  turnCardio(){
    this.homeService.turnCardio();
  }
  turnAbs(){
    this.homeService.turnAbs();
  }
  turnTodos(){
    this.homeService.turnTodos();
  }
}