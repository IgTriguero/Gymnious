import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  activities: Observable<any> = this.afs
  .collection(`activities`)
  .valueChanges();
  constructor(private afs: AngularFirestore) { }

  turnPesas(){
    this.activities = this.afs
    .collection(`activities`, ref=> ref.where("tag", "==", "pesas"))
    .valueChanges();
  }
  turnCardio(){
    this.activities = this.afs
    .collection(`activities`, ref=> ref.where("tag", "==", "cardio"))
    .valueChanges();
  }
  turnAbs(){
    this.activities = this.afs
    .collection(`activities`, ref=> ref.where("tag", "==", "abs"))
    .valueChanges();
  }
  turnTodos(){
    this.activities = this.afs
    .collection(`activities`)
    .valueChanges();
  }
  
}
