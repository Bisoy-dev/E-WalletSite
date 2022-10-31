import { Component, OnInit } from "@angular/core";
import { IWallet } from "../models/walletModel";
import { Title } from "@angular/platform-browser";
import { WalletService } from "../services/wallet.service";
import { tabTitle } from "../title";

@Component({
    selector : 'entry-point',
    styleUrls : ['./entrypoint.component.css'],
    templateUrl: './entrypoint.component.html'
})
export class EntryPoint implements OnInit{
    text = "Heellloo" 
    wallets : IWallet[] = []
    constructor(private walletService : WalletService, private titleService : Title){
        this.wallets = walletService.getAll();
    }
    ngOnInit(): void {
        this.titleService.setTitle("Welcome | " + tabTitle);
    }
}