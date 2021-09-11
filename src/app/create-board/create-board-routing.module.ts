import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBoardPage } from './create-board.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBoardPageRoutingModule {}
