import {
	Component,
	EventEmitter,
	Input,
	NO_ERRORS_SCHEMA,
	Output,
} from "@angular/core";
import { NgPolandMapRegion, Voivodeship, defaultConfig } from "../config";

@Component({
	selector: "g[lib-ng-poland-map-region]",
	standalone: true,
	imports: [],
	templateUrl: "./region.component.html",
	styleUrl: "./region.component.sass",
	schemas: [NO_ERRORS_SCHEMA],
})
export class NgPolandMapRegionComponent {
	@Input() region: NgPolandMapRegion | undefined;
	@Input() bgColor: string = defaultConfig.regionColor;
	@Input() strokeWidth: number = defaultConfig.strokeWidth;
	@Input() strokeColor: string = defaultConfig.strokeColor;
	@Input() clickable: boolean = defaultConfig.regionsClickable;

	@Input() highlightColor: string | undefined = this.bgColor;

	@Input() labelText: string | undefined;
	@Input() labelColor = "#000000";
	@Input() labelPosX: number | undefined;
	@Input() labelPosY: number | undefined;
	@Input() labelFont: string | undefined;
	@Input() labelFontSize: string | undefined;

	@Output() clicked: EventEmitter<Voivodeship> = new EventEmitter();

	regionClicked(region: NgPolandMapRegion["voivodeship"]) {
		this.clicked.next(region);
	}
}
