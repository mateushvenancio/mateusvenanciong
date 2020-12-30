import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { SobreResumoComponent } from './components/home/sobre-resumo/sobre-resumo.component';
import { UltimosProjetosComponent } from './components/home/ultimos-projetos/ultimos-projetos.component';
import { UltimosPostsComponent } from './components/home/ultimos-posts/ultimos-posts.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinksComponent } from './components/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    SobreResumoComponent,
    UltimosProjetosComponent,
    UltimosPostsComponent,
    FooterComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
