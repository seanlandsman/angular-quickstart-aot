import {Component} from "@angular/core";
import RefData from "./refData";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    rows: any[];
    ngOnInit() {
            const rowData: any[] = [];

            for (let i = 0; i < 200; i++) {
                const countryData = RefData.countries[i % RefData.countries.length];
                rowData.push({
                    name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
                    skills: {
                        android: Math.random() < 0.4,
                        html5: Math.random() < 0.4,
                        mac: Math.random() < 0.4,
                        windows: Math.random() < 0.4,
                        css: Math.random() < 0.4
                    },
                    dob: RefData.DOBs[i % RefData.DOBs.length],
                    address: RefData.addresses[i % RefData.addresses.length],
                    years: Math.round(Math.random() * 100),
                    proficiency: Math.round(Math.random() * 100),
                    country: countryData.country,
                    continent: countryData.continent,
                    language: countryData.language
                });
            }

            this.rows = rowData;
    }
}
