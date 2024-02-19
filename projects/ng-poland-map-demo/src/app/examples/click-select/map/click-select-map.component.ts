import { Component, signal } from "@angular/core";
import {
	NgPolandMapComponent,
	NgPolandMapRegion,
	regionList,
} from "ng-poland-map";

@Component({
	selector: "app-click-select-map",
	standalone: true,
	imports: [NgPolandMapComponent],
	template: `
		<ng-poland-map
			[highlightedRegions]="selectedRegions()"
			[regionsClickable]="true"
			(regionClicked)="onRegionClicked($event)"
			bgColor="#ededed"
		></ng-poland-map>
	`,
})
export class ClickSelectMapComponent {
	voivodeships = regionList;
	selectedRegions = signal<NgPolandMapRegion[]>([]);

	onRegionClicked(regionClicked: NgPolandMapRegion["voivodeship"]) {
		// alert(regionClicked);
		this.selectedRegions.update((regions) => {
			const voivodeshipNames = regions.map((region) => region.voivodeship);

			if (!voivodeshipNames.includes(regionClicked)) {
				const region = this.voivodeships.find(
					(r) => r.voivodeship === regionClicked,
				);

				if (region) regions.push(region);
			} else {
				regions.splice(voivodeshipNames.indexOf(regionClicked), 1);
			}
			console.log(regions);
			return [...regions];
		});
	}
}
