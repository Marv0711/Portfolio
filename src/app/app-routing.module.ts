import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component'
import { PolicyComponent } from './policy/policy.component';

const routes: Routes = [
  { path: 'impressum', component: ImpressumComponent },
  { path: 'policy', component: PolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
