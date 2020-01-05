import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private titleService: Title, private authService: AuthService, private router: Router, public popoverController: PopoverController) { }

  ngOnInit(){
    this.titleService.setTitle("Gymnious")
  }

  onClick(){ //TODO remove
    console.log("funciona bro");
  }
  toHome(){
    this.router.navigateByUrl("/home");
  }
  
  login = '<div class="container mt-5"><h2>Google Login</h2>  <div class="row mt-5">    <div class="col-md-4 mt-2 m-auto ">        <button class="loginBtn loginBtn--google" #loginRef>            Login with Google          </button>    </div>      </div></div>"';

  async showPopover(ev: any){
    const popover = await this.popoverController.create({
      component: this.login,
      event: ev,

    });
    return await popover.present();
  }
  perfil(){
    if(this.authService.isAuth()){
      console.log("iniciado sesion");
      this.router.navigateByUrl("/perfil");
    } else {
      console.log("a iniciar sesion");
      this.showPopover();
      //this.authService.googleLogin();
    }
  }
}