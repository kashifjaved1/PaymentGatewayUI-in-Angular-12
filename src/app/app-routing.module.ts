import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component';

const routes: Routes = [
  {path: 'payment-details', component: PaymentDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }