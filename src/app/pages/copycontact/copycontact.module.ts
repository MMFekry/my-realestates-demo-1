import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopycontactPageRoutingModule } from './copycontact-routing.module';

import { CopycontactPage } from './copycontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopycontactPageRoutingModule
  ],
  declarations: [CopycontactPage]
})
export class CopycontactPageModule {}
