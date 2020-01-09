import { Injectable } from "@angular/core";
import {
  AngularFirestore
} from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { AuthService } from "../auth/auth.service";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class PerfilService {
  actividades: Observable<any>;
  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {
    this.actividades = this.authService.actividades;
  }

  addToActividades(actividaduid: string) {
    this.afs
      .doc(`users/${this.authService.afAuth.auth.currentUser.uid}/`)
      .ref.update("actividades", firebase.firestore.FieldValue.arrayUnion(actividaduid));
  }
  removeFromActividades(actividaduid: string){
    this.afs
      .doc(`users/${this.authService.afAuth.auth.currentUser.uid}/`)
      .ref.update("actividades", firebase.firestore.FieldValue.arrayRemove(actividaduid));
  }
}
