import { LOCALE_ID, NgModule } from '@angular/core';
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
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';

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
        PurchaseOrderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
    bootstrap: [AppComponent]
})
export class AppModule {}
