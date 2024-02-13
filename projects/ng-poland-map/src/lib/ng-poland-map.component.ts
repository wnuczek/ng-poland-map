import { CommonModule } from "@angular/common";
import {
	Component,
	EventEmitter,
	Input,
	NO_ERRORS_SCHEMA,
	Output,
	TemplateRef,
} from "@angular/core";
import {
	NgPolandMapPoint,
	NgPolandMapRegion,
	Voivodeship,
	cityList,
	defaultConfig,
	regionList,
} from "./config";
import { NgPolandMapPointerComponent } from "./pointer/pointer.component";
import { NgPolandMapRegionComponent } from "./region/region.component";

@Component({
	selector: "ng-poland-map",
	standalone: true,
	imports: [
		CommonModule,
		NgPolandMapRegionComponent,
		NgPolandMapPointerComponent,
	],
	templateUrl: "./ng-poland-map.component.html",
	styleUrl: "./ng-poland-map.component.sass",
	schemas: [NO_ERRORS_SCHEMA],
})
export class NgPolandMapComponent {
	regions = regionList;
	cities = cityList;

	// config
	@Input() bgColor: string = defaultConfig.bgColor;
	@Input() regionColor: string = defaultConfig.regionColor;
	@Input() strokeWidth: number = defaultConfig.strokeWidth;
	@Input() strokeColor: string = defaultConfig.strokeColor;
	@Input() highlightColor: string = defaultConfig.highlightColor;
	@Input() pointColor: string = defaultConfig.pointColor;
	@Input() pointSize: number = defaultConfig.pointSize;
	@Input() regionsClickable: boolean = defaultConfig.regionsClickable;
	@Input() pointersClickable: boolean = defaultConfig.pointersClickable;

	// data
	@Input() highlightedRegions: NgPolandMapRegion[] | undefined;
	@Input() highlightedCities: NgPolandMapPoint[] | undefined;

	// custom templates
	@Input() pointerTemplate: TemplateRef<any> | undefined;

	@Output() regionClicked: EventEmitter<Voivodeship> = new EventEmitter();
	@Output() pointClicked: EventEmitter<NgPolandMapPoint> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	regionFillColor(region: Voivodeship): string {
		return this.highlightedRegions?.map((i) => i?.voivodeship).includes(region)
			? this.highlightColor
			: this.regionColor;
	}

	regionClick(region: NgPolandMapRegion["voivodeship"]) {
		if (this.regionsClickable) {
			// console.log("regionClick", region);
			this.regionClicked.next(region);
		}
	}

	pointClick(point: NgPolandMapPoint) {
		if (this.pointersClickable) {
			// console.log("pointClick", point);
			this.pointClicked.next(point);
		}
	}
}
