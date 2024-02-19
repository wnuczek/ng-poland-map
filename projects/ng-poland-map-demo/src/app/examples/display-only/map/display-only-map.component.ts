import { Component } from "@angular/core";
import { NgPolandMapComponent, cityList, regionList } from "ng-poland-map";

@Component({
	selector: "app-display-only-map",
	standalone: true,
	imports: [NgPolandMapComponent],
	template: `
		<ng-poland-map
			[highlightedRegions]="selectedRegions"
			[highlightedCities]="selectedPoints"
			bgColor="#ededed"
		></ng-poland-map>
	`,
})
export class DisplayOnlyMapComponent {
	selectedRegions = regionList.filter((r) => r.voivodeship.startsWith("P"));
	selectedPoints = cityList.filter(
		(c) =>
			c.latitude > 52 &&
			c.latitude < 53 &&
			c.longitude > 16 &&
			c.longitude < 17,
	);
}
