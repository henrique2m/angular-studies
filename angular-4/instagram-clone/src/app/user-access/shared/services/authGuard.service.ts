import { CanActivate } from "@angular/router";

export class AuthGuardService implements CanActivate {
  constructor() {}

  canActivate(): boolean {
    return false;
  }
}
