import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RacesListPage } from './races-list.page';

const routes: Routes = [
  {
    path: '',
    component: RacesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RacesListPageRoutingModule {}
