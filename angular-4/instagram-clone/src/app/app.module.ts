import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserAccessComponent } from "./user-access/user-access.component";
import { BannerComponent } from "./user-access/banner/banner.component";
import { SignInComponent } from "./user-access/sign-in/sign-in.component";
import { SignUpComponent } from "./user-access/sign-up/sign-up.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./user-access/shared/services/auth.service";
import { HomeComponent } from "./user-access/home/home.component";
import { PostComponent } from "./user-access/home/post/post.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { AuthGuardService } from "./user-access/shared/services/authGuard.service";
import { NewPostComponent } from "./user-access/home/post/new-post/new-post.component";
import { PostService } from "./user-access/shared/services/post.service";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    UserAccessComponent,
    BannerComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    PostComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [AuthService, AuthGuardService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
