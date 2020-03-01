import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavThreeComponent }    from './navs/nav-three/nav-three.component';
import { NavOneComponent }      from './navs/nav-one/nav-one.component';
import { NavTwoComponent }      from './navs/nav-two/nav-two.component';
import { DbTestComponent }      from './db-test/db-test.component';

const routes: Routes = [
  {path: '', redirectTo: 'nav1', pathMatch: 'full'},
  {path: 'nav1', component: NavOneComponent},
  {path: 'nav2', component: NavTwoComponent},
  {path: 'nav3', component: NavThreeComponent},
  {path: 'db-test', component: DbTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
