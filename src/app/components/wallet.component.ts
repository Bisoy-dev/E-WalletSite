import { Component, Input } from "@angular/core";
import { IWallet } from "../models/walletModel";

@Component({
    selector: 'wallet',
    styleUrls: ['./wallet.component.css'],
    templateUrl : './wallet.component.html'
})
export class Wallet {
    @Input()
    wallet : IWallet;
    @Input()
    isDefault : boolean = true; 
    @Input()
    appUrl : any[] 
    @Input()
    style: any = { anchor: 'a-wallet', img: 'wallet-img', h4: 'wallet-name'}
}