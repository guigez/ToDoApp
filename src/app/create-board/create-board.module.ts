import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBoardPageRoutingModule } from './create-board-routing.module';

import { CreateBoardPage } from './create-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBoardPageRoutingModule
  ],
  declarations: [CreateBoardPage]
})
export class CreateBoardPageModule {}
