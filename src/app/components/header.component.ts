import { Component } from '@angular/core';

@Component({
    selector : 'header',
    styleUrls: ['./header.component.css'],
    templateUrl: './header.component.html'
})
export class Header {
    isShow : boolean = false

    onToggle() : void {
        this.isShow = !this.isShow
    }
}