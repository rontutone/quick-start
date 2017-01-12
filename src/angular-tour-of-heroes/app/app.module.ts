import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';
import { TabsModule }           from "ng2-tabs";

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { DashboardComponent }   from './dashboard.component';
import { Tabs }                 from './tabs';
import { Tab }                  from './tab';
import { Ng2DropdownModule }    from 'ng2-material-dropdown';
import { DropdownModule }       from "ng2-dropdown";
import { DropdownNotClosableZone } from "./DropdownNotClosableZone.directive";
import { Dropdown }             from "./Dropdown.directive";
import { DropdownOpen }         from "./DropdownOpen.directive";
import { MyDropdownDirective }  from "./MyDropDown.directive";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2DropdownModule,
    DropdownModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
      path: 'dashboard',
      component: DashboardComponent
      },
      {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
      },
    ])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    Tabs, Tab,
    DropdownNotClosableZone,
    Dropdown,
    DropdownOpen,
    MyDropdownDirective
  ],
  providers: [
    HeroService
  ],
    exports: [
        DropdownNotClosableZone,
        Dropdown,
        DropdownOpen,
    ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}