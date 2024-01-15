import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule} from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import {RouterModule} from '@angular/router';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { GardientHeroSectionComponent } from './gardient-hero-section/gardient-hero-section.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { ImpressumSectionComponent } from './impressum-section/impressum-section.component';
import { MyProjectsSectionComponent } from './my-projects-section/my-projects-section.component';
import { MyPolicySectionComponent } from './my-policy-section/my-policy-section.component';
import { MySkillsSectionComponent } from './my-skills-section/my-skills-section.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,
        AboutMeSectionComponent,
        ContactSectionComponent,
        FooterSectionComponent,
        GardientHeroSectionComponent,
        HeaderSectionComponent,
        ImpressumSectionComponent,
        MyProjectsSectionComponent,
        MyPolicySectionComponent,
        MySkillsSectionComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot(
            {
                defaultLanguage: 'en',
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }
        )
    ]
})
export class AppModule { }
