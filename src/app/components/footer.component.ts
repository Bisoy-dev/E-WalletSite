import { Component } from "@angular/core"; 

@Component({
    selector: 'footer-component',
    styleUrls: ['./footer.component.css'],
    templateUrl: './footer.component.html'
})
export class Footer {
    title : string = 'footer'
    currentYear : Date = new Date()
}