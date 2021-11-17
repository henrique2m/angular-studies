import { Routes } from "@angular/router";
import { HomeComponent } from "./user-access/home/home.component";
import { AuthGuardService } from "./user-access/shared/services/authGuard.service";
import { UserAccessComponent } from "./user-access/user-access.component";

export const ROUTES: Routes = [
  { path: "", component: UserAccessComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuardService] },
];
