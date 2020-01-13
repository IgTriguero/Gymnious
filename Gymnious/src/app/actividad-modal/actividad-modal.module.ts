import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadModalComponent } from './actividad-modal.component';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [ActividadModalComponent],
  imports: [
    IonicModule,
    CommonModule
  ], exports: [ActividadModalComponent],
  entryComponents:[ActividadModalComponent]
})
export class ActividadModalModule { }
