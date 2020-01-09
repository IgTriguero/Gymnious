import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

interface User {
  uid: string;
  email: string;
  photoUrl?: string;  //puede tener o no tener foto
  displayName?: string;
}
@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: Observable<User>;
  actividades: Observable<any>;
  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user) {
          this.actividades = this.afs.doc(`users/${user.uid}/actividades`).valueChanges()
          return this.afs.doc(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  isAuth() {
    return firebase.auth().currentUser;
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl("/home");
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then(credential => {
      this.router.navigateByUrl("/perfil");
      this.updateUserData(credential.user);
    });
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      photoUrl: user.photoURL,
      displayName: user.displayName
    };
    console.log(data);
    return userRef.set(data);
  }

}
