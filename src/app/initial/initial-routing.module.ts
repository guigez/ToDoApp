import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialPage } from './initial.page';

const routes: Routes = [
  {
    path: '',
    component: InitialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitialPageRoutingModule {}
