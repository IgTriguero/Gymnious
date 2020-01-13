import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular'
import { PerfilService } from '../perfil/perfil.service';

@Component({
  selector: 'app-actividad-modal',
  templateUrl: './actividad-modal.component.html',
  styleUrls: ['./actividad-modal.component.scss'],
})
export class ActividadModalComponent implements OnInit {
  @Input() item: any;
  @Input() page: string;
  actividad;
  add:Boolean;
  constructor(private modalController: ModalController, navParams: NavParams, private perfilService: PerfilService) { 
    this.actividad = navParams.get('item');
    if(navParams.get('page') === "home"){
      this.add = true;
    } else{
      this.add = false;
    }
  }

  ngOnInit() {}

  dismissModal(){
    this.modalController.dismiss();
  }
  addActividad(uid:string){
    this.perfilService.addToActividades(uid);
  }
  removeActividad(uid:string){
    this.perfilService.removeFromActividades(uid);
    this.dismissModal();
  }
}
