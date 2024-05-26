import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccesscopyPageRoutingModule } from './successcopy-routing.module';

import { SuccesscopyPage } from './successcopy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccesscopyPageRoutingModule
  ],
  declarations: [SuccesscopyPage]
})
export class SuccesscopyPageModule {}
