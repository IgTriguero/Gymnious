import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { PerfilService } from './perfil.service';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { ActividadModalComponent } from '../actividad-modal/actividad-modal.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user:Observable<any>;
  actividades:Observable<any>;
  subscripcion;
  arrSubscripciones;
  edit:Boolean;
  constructor(private router: Router, public authService: AuthService, public perfilService: PerfilService, private afs: AngularFirestore,
    private modalController: ModalController) { 
    this.user = this.authService.user;
  }

  ngOnInit() {
    this.user.subscribe(user=>{
      this.arrSubscripciones = user.actividades;
      this.actividades = this.afs.collection("activities", ref => ref.where("uid","in",this.arrSubscripciones)).valueChanges();
    });
    this.edit = false;
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
  toHome(){
    this.router.navigateByUrl("/home");
  }
  cerrarSesion(){
    this.authService.logout();
  }
  eliminarActividad(uid:string){
    this.perfilService.removeFromActividades(uid);
  }
  editar(){
    this.edit = !this.edit;
  }
}
