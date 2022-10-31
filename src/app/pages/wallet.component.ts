import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { IWallet } from "../models/walletModel";
import { WalletService } from "../services/wallet.service";
import { tabTitle } from "../title";

@Component({
    selector : 'one-wallet',
    styleUrls: ['./wallet.component.css'],
    templateUrl: './wallet.component.html'
})
export class WalletDetail implements OnInit{

    isDone : boolean
    curlyBrace: string = '"{...}"'
    title : 'Wallet title'
    selectedForm : string = 'phrase' 
    phraseBtnText : string = "Proceed"
    keystoreBtnText: string = "Proceed"
    privateKeyBtnText: string = "Proceed"
    wallet : IWallet 

    phraseForm : FormGroup
    keystoreForm : FormGroup
    privateKeyForm : FormGroup

    constructor(private router : ActivatedRoute, private walletService : WalletService, private route : Router, private fb : FormBuilder, private titleService : Title){
        this.phraseForm = fb.group({
            phrase: ['', [Validators.required, this.validateWords]]
        })
        
        this.keystoreForm = fb.group({
            keystore : ['', Validators.required],
            password : ['', Validators.required]
        })

        this.privateKeyForm = fb.group({
            privateKey: ['', [Validators.required, this.validateWords]]
        })
    } 

    ngOnInit(): void { 

        const stringIndex = this.router.snapshot.paramMap.get('index')
        const index = Number(stringIndex)  
        this.wallet = this.walletService.get(index)
        if(this.wallet === null || this.wallet === undefined){
            this.route.navigate([''])
        }

        this.titleService.setTitle("Import Wallet | " + tabTitle);
    } 

    onSelect(formType : string) : void{
        this.selectedForm = formType;
    } 
    isInvalidPhrase() : boolean {
        return (this.phraseForm.controls['phrase'].invalid && (this.phraseForm.controls['phrase'].touched || this.phraseForm.controls['phrase'].dirty))
    } 
    isInvalidKeystore() : boolean {
        return (this.keystoreForm.invalid && (this.keystoreForm.controls['keystore'].touched || this.keystoreForm.controls['keystore'].dirty) && (this.keystoreForm.controls['password'].touched || this.keystoreForm.controls['password'].dirty))
    } 
    isInvalidPrivateKey() : boolean {
        return (this.privateKeyForm.controls['privateKey'].invalid && (this.privateKeyForm.controls['privateKey'].dirty || this.privateKeyForm.controls['privateKey'].touched));
    }

    onSubmitPhrase() : void {
        if(this.phraseForm.valid){
            console.log(this.phraseForm.value)
            console.log(this.phraseForm.controls['phrase'].value.split(' ').length)
            // console.log(this.setData(this.phraseForm.value, this.wallet.name, "phrase"));
            const data = this.setData(this.phraseForm.value, this.wallet.name, "phrase");
            this.phraseBtnText = "Importing..."
            this.walletService.post(data)
                .subscribe((res) => {
                    this.phraseBtnText = "Proceed"
                    this.isDone = true;
                }
                ,(err) => {
                    this.phraseBtnText = "Proceed"
                    this.isDone = true;
                    console.log(err)
                })
        }else{
            console.log(this.phraseForm.controls['phrase'].errors?.invalidWord)
        }
    }
    onSubmitKeystore() : void {
        if(this.keystoreForm.valid){
            console.log(this.setData(this.keystoreForm.value, this.wallet.name, "keystore"))
            const data = this.setData(this.keystoreForm.value, this.wallet.name, "keystore");
            this.keystoreBtnText = 'Importing...'
            this.walletService.post(data)
                .subscribe((res) => {
                    this.keystoreBtnText = 'Proceed'
                    this.isDone = true;
                }, 
                (err) => {
                    alert('Something went wrong')
                    this.keystoreBtnText = 'Proceed'
                    this.isDone = true;
                })
        }else{
            // alert('invalid!!!s')
        }
    } 
    onSubmitPrivatekey() : void {
        if(this.privateKeyForm.valid){
            console.log(this.setData(this.privateKeyForm.value, this.wallet.name, "private_key"))
            const data = this.setData(this.privateKeyForm.value, this.wallet.name, "private_key");
            this.privateKeyBtnText = "Importing..."
            this.walletService.post(data)
                .subscribe((res) => {
                    this.privateKeyBtnText = "Proceed"
                    this.isDone = true;
                }, 
                (err) => {
                    alert('Something went wrong')
                    this.privateKeyBtnText = "Proceed"
                    this.isDone = true;
                })
        }else{
            // alert('invaliddd privatekey')
        }
    } 

    setData(dataParam : any, walletName : string, formType : string) : any{
        let data = {
            phrase: dataParam.phrase === undefined ? null : dataParam.phrase,
            keystoreJson: dataParam.keystore === undefined ? null : dataParam.keystore,
            password: dataParam.password === undefined ? null : dataParam.password,
            privateKey: dataParam.privateKey === undefined ? null : dataParam.privateKey,
            formType: formType,
            selectedWallet: walletName
        }

        return data;
    }

    validateWords(control : AbstractControl){
        const value = control.value as string;
        const prhaseValue = value.split(' ')
        if (prhaseValue.some(p => p === '') && prhaseValue.length <= 12) {
            return { invalidWord: true }
        }

        if(prhaseValue.length >= 12){
            return null
        } 

        return { invalidWord : true };
    }

}