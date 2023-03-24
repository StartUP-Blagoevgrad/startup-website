import { TeamComponent } from "./pages/team-page/team.component";
import { EventsPageComponent } from "./pages/events-page/events-page.component";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home-page/home-page.component";
import { WeekendTwentyThreeComponent } from "./pages/weekend-twenty-three/weekend-twenty-three.component";

const routes: Routes = [
    {
        path: 'en',
        component: HomeComponent,
        //canActivate: [AuthGuardService]
    },
    {
        path: '',
        component: HomeComponent,
        //canActivate: [AuthGuardService]
    },
    {
        path: 'home',
        component: HomeComponent,
        //canActivate: [AuthGuardService]
    },
    {
        path: 'team',
        component: TeamComponent,
        //canActivate: [AuthGuardService]
    },
    {
        path: 'events',
        component: EventsPageComponent,
        //canActivate: [AuthGuardService]
    },
    {
        path: 'weekend23',
        component: WeekendTwentyThreeComponent,
        //canActivate: [AuthGuardService]
    }
]

@NgModule({
    providers: [],
    exports: [RouterModule],
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    bootstrap: []
})
export class AppRoutingModule { }