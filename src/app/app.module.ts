import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule} from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GardientHeroComponent } from './gardient-hero/gardient-hero.component';
import { HeaderComponent } from './header/header.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PolicyComponent } from './policy/policy.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent,
        PolicyComponent,
        ImpressumComponent,
        GardientHeroComponent,
        AboutMeComponent,
        MySkillsComponent,
        MyProjectsComponent,
        ContactComponent,
        FooterComponent,
        HttpClientModule,
        TranslateModule.forRoot(
            {
                defaultLanguage: 'de',
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
