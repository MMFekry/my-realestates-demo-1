import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopycontactPage } from './copycontact.page';

const routes: Routes = [
  {
    path: '',
    component: CopycontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopycontactPageRoutingModule {}
