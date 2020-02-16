import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }                from '@angular/core';
import { NzButtonModule }          from 'ng-zorro-antd/button';
import { NzMenuModule }            from 'ng-zorro-antd/menu';
import { NzLayoutModule }          from 'ng-zorro-antd/layout';
import { NzCardModule }            from 'ng-zorro-antd/card';
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { NavOneComponent }         from './navs/nav-one/nav-one.component';
import { NavTwoComponent }         from './navs/nav-two/nav-two.component';
import { NavThreeComponent }       from './navs/nav-three/nav-three.component';

const ANT_DESIGN_MODULES = [NzButtonModule, NzLayoutModule, NzMenuModule, NzCardModule];
const BROWSER_MODULES = [BrowserModule, BrowserAnimationsModule];

@NgModule({
  declarations: [AppComponent, NavOneComponent, NavTwoComponent, NavThreeComponent],
  imports: [AppRoutingModule, BROWSER_MODULES, ANT_DESIGN_MODULES],
  bootstrap: [AppComponent]
})
export class AppModule {
}
