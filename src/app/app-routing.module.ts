import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LinksComponent } from './components/links/links.component';

const routes: Routes = [
  { path: 'links', component: LinksComponent, },
  { path: '', component: HomeComponent, },
  { path: '**', redirectTo: '', },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
