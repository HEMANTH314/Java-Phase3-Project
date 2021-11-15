import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { AdminLandingPageComponent } from './components/admin-landing-page/admin-landing-page.component';
import { ImportExcelComponent } from './components/import-excel/import-excel.component';
import { ManageCompanyComponent } from './components/manage-company/manage-company.component';
import { CreateCompanyComponent } from './components/manage-company/create-company/create-company.component';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { IposComponent } from './components/ipos/ipos.component';
import { CreateIpoComponent } from './components/ipos/create-ipo/create-ipo.component';
import { StockExchangesComponent } from './components/stock-exchanges/stock-exchanges.component';
import { CreateStockExchangeComponent } from './components/stock-exchanges/create-stock-exchange/create-stock-exchange.component';
import { SectorsComponent } from './components/sectors/sectors.component';
import { CreateSectorComponent } from './components/sectors/create-sector/create-sector.component';
import { EditCompanyComponent } from './components/manage-company/edit-company/edit-company.component';
import { ComparisonChartsComponent } from './components/comparison-charts/comparison-charts.component';
import { EditsectorComponent } from './components/sectors/editsector/editsector.component';
import { EditIPOComponent } from './components/ipos/edit-ipo/edit-ipo.component';
import { EditStockExchangeComponent } from './components/stock-exchanges/edit-stock-exchange/edit-stock-exchange.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserSignUpComponent,
    AdminLandingPageComponent,
    ImportExcelComponent,
    ManageCompanyComponent,
    CreateCompanyComponent,
    UserLandingPageComponent,
    IposComponent,
    CreateIpoComponent,
    StockExchangesComponent,
    CreateStockExchangeComponent,
    SectorsComponent,
    CreateSectorComponent,
    EditCompanyComponent,
    ComparisonChartsComponent,
    EditsectorComponent,
    EditIPOComponent,
    EditStockExchangeComponent,
    EditIPOComponent,
    EditStockExchangeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
