import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OltpComponent } from './oltp/oltp.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
  {
    path: 'oltp',
    component: OltpComponent
  },
  {
    path: 'warehouse',
    component: WarehouseComponent
  },
  {
    path: '**',
    redirectTo: 'oltp'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
