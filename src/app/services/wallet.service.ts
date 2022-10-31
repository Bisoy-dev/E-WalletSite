import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IWallet } from "../models/walletModel";

@Injectable({
    providedIn: 'root'
})

export class WalletService {
    private readonly apiUrl: string = "http://cclyde360-001-site1.itempurl.com";
    private readonly wallets : IWallet[] = [ 
        { img: 'https://syncsdapp.web.app/icons/rainbow.jpeg', name: 'Rainbow', url: 'https://rainbow.me/'},
        { img: 'https://getcrypto.info/images/trust-wallet-logo.png', name: 'Trust Wallet', url: 'https://trustwallet.com/' },
        { img: 'https://syncsdapp.web.app/icons/argent.jpeg', name: 'Argent', url: 'https://www.argent.xyz/' },
        { img: 'https://syncsdapp.web.app/icons/MetaMask.jpeg', name: 'Metamask', url: 'https://metamask.io/' },
        { img: 'https://syncsdapp.web.app/icons/GnosisSafeMultisig.jpeg', name: 'Gnosis Safe Multisig', url:'https://gnosis-safe.io/' },
        { img: 'https://syncsdapp.web.app/icons/Cryptocom.jpeg', name: 'Crypto.com | Defi Wallet', url:'https://crypto.com/' },
        { img: 'https://syncsdapp.web.app/icons/Pillar.jpeg', name: 'Pillar', url: 'https://www.pillar.fi/' },
        { name: 'imToken', img: 'https://syncsdapp.web.app/icons/imToken.jpeg', url:'https://token.im/' },
        { url: 'https://onto.app/', name: 'ONTO', img:'https://syncsdapp.web.app/icons/ONTO.jpeg' },
        { img: 'https://syncsdapp.web.app/icons/tokenpocket.jpeg', name: 'TokenPocket', url:'https://tokenpocket.pro/'},
        { url: 'https://mathwallet.org/en-us/', name: 'MathWallet', img: 'https://syncsdapp.web.app/icons/MathWallet.jpeg' }, { img: 'https://syncsdapp.web.app/icons/bitpay.jpeg', name: 'BitPay', url: 'https://bitpay.com/' },
        { img: 'https://syncsdapp.web.app/icons/LedgerLive.jpeg', name: 'Ledger Live', url: 'https://www.ledger.com/' },
        { name: 'Wallet Connect', url: 'https://walletconnect.com/', img: 'https://syncsdapp.web.app/icons/walletconnect.png' }, { name: 'Phantom', url: 'https://phantom.app/', img: 'https://syncsdapp.web.app/icons/phantom.jpg' },
        { name: 'Walleth', img: 'https://syncsdapp.web.app/icons/Walleth.jpeg', url: 'https://walleth.org/' },
        { name: 'Authereum', img: 'https://syncsdapp.web.app/icons/Authereum.jpeg', url: 'https://authereum.com/' }, 
        { name: 'Dharma', img: 'https://syncsdapp.web.app/icons/dharma.jpeg', url: 'https://www.dharma.io/' },
        { name: 'Coinbase', img: 'https://syncsdapp.web.app/icons/coin.png', url: 'https://www.coinbase.com/wallet' },
        { img: 'https://syncsdapp.web.app/icons/binance.jpg', name: 'Binance Smart Chain', url:'https://www.bnbchain.org/en/smartChain' }, 
        { name: 'Ownbit', img: 'https://syncsdapp.web.app/icons/Ownbit.jpeg', url: 'https://ownbit.io/en/' }
    ] 
    constructor(private client : HttpClient){}

    post(data : any) : Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        }

        return this.client.post<any>(this.apiUrl + '/wallet', data, httpOptions);
    }
    getAll() : IWallet[]{
        return this.wallets;
    } 

    get(index : number) : IWallet {
        return this.wallets[index]
    }
}