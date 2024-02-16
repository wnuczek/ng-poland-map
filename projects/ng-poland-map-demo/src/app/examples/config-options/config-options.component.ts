import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
	NgPolandMapComponent,
	NgPolandMapPoint,
	NgPolandMapRegion,
	Voivodeship,
	cityList,
	defaultConfig,
	eastLong,
	northLat,
	regionList,
	southLat,
	westLong,
} from "ng-poland-map";

@Component({
	selector: "app-config-options",
	standalone: true,
	imports: [NgPolandMapComponent, CommonModule, FormsModule],
	templateUrl: "./config-options.component.html",
	styleUrl: "./config-options.component.sass",
})
export class ConfigOptionsComponent {
	voivodeships = regionList;
	cities = cityList;

	selectedVoivodeships: NgPolandMapRegion[] = [];
	selectedCites: NgPolandMapPoint[] = [];

	customLatitude: number | undefined = 52.1053;
	customLongitude: number | undefined = 21.2616;

	bgColor: string = defaultConfig.bgColor;
	strokeColor: string = defaultConfig.strokeColor;
	strokeWidth: number = defaultConfig.strokeWidth;
	regionColor: string = defaultConfig.regionColor;
	highlightColor: string = defaultConfig.highlightColor;
	pointColor: string = defaultConfig.pointColor;
	pointSize: number = defaultConfig.pointSize;
	regionsClickable: boolean = defaultConfig.regionsClickable;
	pointersClickable: boolean = defaultConfig.pointersClickable;

	minLongitude = eastLong;
	maxLongitude = westLong;
	minLatitude = southLat;
	maxLatitude = northLat;

	onRegionSelectionChange($event: any) {
		const options = $event.target.options;

		this.selectedVoivodeships = [];

		Array.from(options).map((option: any) => {
			if (option.selected) {
				const value = option.value as Voivodeship;
				const selected = this.voivodeships.filter(
					(v) => v.voivodeship === value,
				)[0];
				this.selectedVoivodeships.push(selected);
			}
		});
	}

	onCitySelectionChange($event: any) {
		const options = $event.target.options;

		this.selectedCites = [];

		Array.from(options).map((option: any) => {
			if (option.selected) {
				const value = option.value;
				const selected = this.cities.filter((v) => v.labelText === value)[0];
				this.selectedCites.push(selected);
			}
		});
	}

	addPointer() {
		if (this.customLongitude && this.customLatitude) {
			const newCity: NgPolandMapPoint = {
				longitude: this.customLongitude,
				latitude: this.customLatitude,
				labelText: `Point ${this.cities.length + 1}`,
			};
			this.cities.push(newCity);
			this.selectedCites.push(newCity);
		}
	}

	onPointerClicked(point: NgPolandMapPoint) {
		alert(point.labelText);
	}

	onRegionClicked(region: NgPolandMapRegion["voivodeship"]) {
		alert(region);
	}
}
