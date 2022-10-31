import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryPoint } from './pages/entrypoint.component';
import { Header } from './components/header.component';
import { Wallet } from './components/wallet.component';
import { Footer } from './components/footer.component';
import { WalletList } from './pages/wallet-list.component';
import { WalletDetail } from './pages/wallet.component';
import { Alert } from './components/alert.component';

@NgModule({
  declarations: [
    AppComponent, 
    EntryPoint,
    Header,
    Wallet,
    Footer,
    WalletList,
    WalletDetail,
    Alert
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
