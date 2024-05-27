import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeescopyPageRoutingModule } from './feescopy-routing.module';

import { FeescopyPage } from './feescopy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeescopyPageRoutingModule
  ],
  declarations: [FeescopyPage]
})
export class FeescopyPageModule {}
