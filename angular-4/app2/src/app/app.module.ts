import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FunComponent } from './fun/fun.component';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { OfferComponent } from './offer/offer.component';
import { NavComponent } from './offer/components/nav/nav.component';
import { HowToUseComponent } from './offer/components/how-to-use/how-to-use.component';
import { WhereIsComponent } from './offer/components/where-is/where-is.component';
import { ReductionDescription } from './util/pipes/reduction-description.pipe';

import { registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PurchaseOrderSuccessComponent } from './purchase-order-success/purchase-order-success.component';
import { PurchaseOrderBindingComponent } from './purchase-order/form-with-event-binding/purchase-order-binding.component';
import { PurchaseOrderFormReactiveModuleComponent } from './purchase-order/purchase-order-form-reactive.component';
import { PurchaseOrderFormModuleComponent } from './purchase-order/form-with-ngmodel/purchase-order-form-module.component';
import { CartService } from './services/cart.service';

registerLocaleData(localePt);

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        RestaurantsComponent,
        FunComponent,
        OfferComponent,
        NavComponent,
        HowToUseComponent,
        WhereIsComponent,
        ReductionDescription,
        PurchaseOrderBindingComponent,
        PurchaseOrderFormModuleComponent,
        PurchaseOrderFormReactiveModuleComponent,
        PurchaseOrderSuccessComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [CartService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
