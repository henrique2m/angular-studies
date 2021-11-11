import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserAccessComponent } from "./user-access/user-access.component";
import { BannerComponent } from "./user-access/banner/banner.component";
import { SignInComponent } from "./user-access/sign-in/sign-in.component";
import { SignUpComponent } from "./user-access/sign-up/sign-up.component";

@NgModule({
  declarations: [
    AppComponent,
    UserAccessComponent,
    BannerComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
