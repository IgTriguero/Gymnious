import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { PerfilService } from './perfil.service';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

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
  edit:Boolean = false;
  constructor(private router: Router, public authService: AuthService, public perfilService: PerfilService, private afs: AngularFirestore) { 
    this.user = this.authService.user;
  }

  ngOnInit() {
    this.user.subscribe(user=>{
      this.arrSubscripciones = user.actividades;
      this.actividades = this.afs.collection("activities", ref => ref.where("uid","in",this.arrSubscripciones)).valueChanges();
    });
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
