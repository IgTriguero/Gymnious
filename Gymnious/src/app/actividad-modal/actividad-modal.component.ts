import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular'

@Component({
  selector: 'app-actividad-modal',
  templateUrl: './actividad-modal.component.html',
  styleUrls: ['./actividad-modal.component.scss'],
})
export class ActividadModalComponent implements OnInit {
  @Input() item: any;
  actividad;
  constructor(private modalController: ModalController, navParams: NavParams) { 
    this.actividad = navParams.get('item');
  }

  ngOnInit() {}

}
