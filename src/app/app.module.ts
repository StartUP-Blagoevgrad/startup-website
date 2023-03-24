import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationMenuComponent } from './shared/components/navigation-menu/navigation-menu.component';
import { AppComponent } from './app.component';
import { DepartmentService } from './shared/services/department.service';
import { TeamComponent } from './pages/team-page/team.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SvgGraphComponent } from './components/svg-component/svg.component';
import { HomeComponent } from './pages/home-page/home-page.component';
import { WeekendTwentyThreeComponent } from './pages/weekend-twenty-three/weekend-twenty-three.component';
import { WeekendService } from './shared/services/weekend.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, NavigationMenuComponent, TeamComponent, EventsPageComponent, SvgGraphComponent, HomeComponent, WeekendTwentyThreeComponent
    //BoardComponent, ItComponent, MarketingComponent, SpeakersComponent, SponsorshipComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FontAwesomeModule,
  ],
  providers: [DepartmentService, WeekendService, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
