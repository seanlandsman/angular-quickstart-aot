import {Component} from "@angular/core";
import RefData from "./refData";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    countries: any[];

    ngOnInit() {
        this.countries = RefData.countries;
    }
}
