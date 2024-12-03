import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RacesListPageRoutingModule } from './races-list-routing.module';

import { RacesListPage } from './races-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RacesListPageRoutingModule
  ],
  declarations: [RacesListPage]
})
export class RacesListPageModule {}
