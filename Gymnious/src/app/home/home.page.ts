import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private titleService: Title, private authService: AuthService) { }

  ngOnInit(){
    this.titleService.setTitle("Gymnious")
  }
  googleSignIn(){
    this.authService.googleLogin();
  }
}