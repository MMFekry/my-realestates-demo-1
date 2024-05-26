import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeescopyPage } from './feescopy.page';

const routes: Routes = [
  {
    path: '',
    component: FeescopyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeescopyPageRoutingModule {}
