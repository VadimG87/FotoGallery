import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }                from '@angular/core';
import { HttpClientModule }        from '@angular/common/http';
import { NzButtonModule }          from 'ng-zorro-antd/button';
import { NzMenuModule }            from 'ng-zorro-antd/menu';
import { NzLayoutModule }          from 'ng-zorro-antd/layout';
import { NzCardModule }            from 'ng-zorro-antd/card';
import { NzAvatarModule }          from 'ng-zorro-antd/avatar';
import { NzIconModule }            from 'ng-zorro-antd/icon';
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { NavOneComponent }         from './navs/nav-one/nav-one.component';
import { NavTwoComponent }         from './navs/nav-two/nav-two.component';
import { NavThreeComponent }       from './navs/nav-three/nav-three.component';

const ANT_DESIGN_MODULES = [
  NzButtonModule,
  NzLayoutModule,
  NzMenuModule,
  NzCardModule,
  NzAvatarModule,
  NzIconModule
];
const BROWSER_MODULES = [BrowserModule, BrowserAnimationsModule];

@NgModule({
  declarations: [AppComponent, NavOneComponent, NavTwoComponent, NavThreeComponent],
  imports: [AppRoutingModule, HttpClientModule, BROWSER_MODULES, ANT_DESIGN_MODULES],
  bootstrap: [AppComponent]
})
export class AppModule {
}
