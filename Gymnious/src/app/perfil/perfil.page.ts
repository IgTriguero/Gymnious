import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user;
  constructor(private router: Router, public authService: AuthService) { 
    this.user = this.authService.afAuth.auth.currentUser;
  }

  ngOnInit() {
    
  }
  updateProfile(){

  }
  toHome(){
    this.router.navigateByUrl("/home");
  }
  cerrarSesion(){
    this.authService.logout();
  }
  editar(){
    
  }
}
