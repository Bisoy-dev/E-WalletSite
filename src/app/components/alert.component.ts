import { Component, Input } from '@angular/core';

@Component({
    selector : 'alert',
    styleUrls: ['./alert.component.css'],
    templateUrl: './alert.component.html'
})

export class Alert{
    
    @Input()
    options : any = {}
}