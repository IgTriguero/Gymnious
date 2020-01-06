import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }, 
     /* {
        path:'../login/login.component',
        component: LoginComponent
      }*/
    ])
  ],
  entryComponents:[],
  declarations: [HomePage]
})
export class HomePageModule {}
