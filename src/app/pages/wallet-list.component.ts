import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { IWallet } from "../models/walletModel";
import { WalletService } from "../services/wallet.service";
import { tabTitle } from "../title";

@Component({
    selector: 'wallet-list',
    styleUrls: ['./wallet-list.component.css'],
    templateUrl: './wallet-list.component.html'
})
export class WalletList implements OnInit {
    title : string = 'Wallet List'
    wallets : IWallet[] = []
    constructor(private walletService : WalletService, private titleService : Title){
        this.wallets = walletService.getAll()
    }

    ngOnInit(): void {
        this.titleService.setTitle("Wallets | " + tabTitle);
    }
}