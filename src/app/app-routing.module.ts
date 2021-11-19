import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OneComponent } from './learing/one/one.component';
import { TwoComponent } from './learing/two/two.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
