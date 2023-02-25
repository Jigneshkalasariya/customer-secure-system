import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UnauthorisedPageComponent } from './unauthorised-page/unauthorised-page.component';

const routes: Routes = [
  {
    path: '',component:CustomerListComponent
  },
  {
    path: 'customer/:id',component:CustomerDetailComponent
  },
  {
    path: 'report',component:CustomerReportComponent
  },
  {
    path: '401',component:UnauthorisedPageComponent
  },
   { path: '**', pathMatch: 'full', 
   component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
