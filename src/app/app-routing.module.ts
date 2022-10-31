import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPoint } from './pages/entrypoint.component';
import { WalletList } from './pages/wallet-list.component';
import { WalletDetail } from './pages/wallet.component';

const routes: Routes = [
  { path : '', component : EntryPoint},
  { path: 'wallets', component: WalletList },
  { path: 'wallet/:index', component: WalletDetail }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
