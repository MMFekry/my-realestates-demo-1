import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccesscopyPage } from './successcopy.page';

const routes: Routes = [
  {
    path: '',
    component: SuccesscopyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccesscopyPageRoutingModule {}
