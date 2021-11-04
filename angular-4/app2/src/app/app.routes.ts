import { Routes } from '@angular/router';

import { FunComponent } from './fun/fun.component';
import { HomeComponent } from './home/home.component';
import { HowToUseComponent } from './offer/components/how-to-use/how-to-use.component';
import { WhereIsComponent } from './offer/components/where-is/where-is.component';
import { OfferComponent } from './offer/offer.component';
import { PurchaseOrderFormModuleComponent } from './purchase-order/form-with-ngmodel/purchase-order-form-module.component';
import { PurchaseOrderBindingComponent } from './purchase-order/form-with-event-binding/purchase-order-binding.component';
import { PurchaseOrderFormReactiveModuleComponent } from './purchase-order/purchase-order-form-reactive.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'fun', component: FunComponent },
    { path: 'offer', component: HomeComponent },
    {
        path: 'offer/:id',
        component: OfferComponent,
        children: [
            {
                path: '',
                component: HowToUseComponent
            },
            {
                path: 'how-to-use',
                component: HowToUseComponent
            },
            { path: 'where-is', component: WhereIsComponent }
        ]
    },
    {
        path: 'purchase-order-binding',
        component: PurchaseOrderBindingComponent
    },
    {
        path: 'purchase-order-form-module',
        component: PurchaseOrderFormModuleComponent
    },
    {
        path: 'purchase-order-form-reactive-module',
        component: PurchaseOrderFormReactiveModuleComponent
    }
];
