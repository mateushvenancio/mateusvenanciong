import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { SobreResumoComponent } from './components/home/sobre-resumo/sobre-resumo.component';
import { UltimosProjetosComponent } from './components/home/ultimos-projetos/ultimos-projetos.component';
import { UltimosPostsComponent } from './components/home/ultimos-posts/ultimos-posts.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinksComponent } from './components/links/links.component';
import { BlogComponent } from './components/blog/blog.component';
import { MarkdownModule } from 'ngx-markdown';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


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
        BlogComponent,
        PortfolioComponent,
        SobreComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        MarkdownModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
