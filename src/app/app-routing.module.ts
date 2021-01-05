import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { LinksComponent } from './components/links/links.component';

const routes: Routes = [
    { path: 'links', component: LinksComponent },
    { path: 'blog', component: BlogComponent },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
