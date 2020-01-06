import { Component, OnInit } from "@angular/core";
import { PopoverController, NavParams, Events } from "@ionic/angular";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  page;

  constructor(
    private events: Events,
    private navParams: NavParams,
    private popoverController: PopoverController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    //Get data from popover page
    this.page = this.navParams.get("data");
  }

  loginWithGoogle() {
    this.authService.googleLogin();
    this.popoverController.dismiss();
  }

}
