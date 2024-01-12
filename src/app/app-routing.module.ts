import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImpressumSectionComponent } from './impressum-section/impressum-section.component';
import { MyPolicySectionComponent } from './my-policy-section/my-policy-section.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'impressum', component: ImpressumSectionComponent },
  { path: 'policy', component: MyPolicySectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
