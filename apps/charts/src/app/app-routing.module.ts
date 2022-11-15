import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'ngx-charts', loadChildren: () => import('./ngx-charts-test/ngx-charts-test.module').then(m => m.NgxChartsTestModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
