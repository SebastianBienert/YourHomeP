import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatGridListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OfferDetailsComponent } from './offer/offer-details/offer-details.component';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatDividerModule } from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list'
import { router } from './router';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    OfferDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    RouterModule.forRoot(router),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
