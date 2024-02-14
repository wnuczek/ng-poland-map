import { NgIf, NgTemplateOutlet } from "@angular/common";
import {
	Component,
	EventEmitter,
	Input,
	Output,
	TemplateRef,
} from "@angular/core";
import {
	NgPolandMapPoint,
	defaultConfig,
	eastLong,
	northLat,
	southLat,
	westLong,
} from "../config";

@Component({
	selector: "g[lib-ng-poland-map-pointer]",
	standalone: true,
	imports: [NgIf, NgTemplateOutlet],
	templateUrl: "./pointer.component.html",
	styleUrl: "./pointer.component.sass",
})
export class NgPolandMapPointerComponent {
	svgWidth = 565;
	svgHeight = 533;

	northLat = northLat;
	southLat = southLat;
	eastLong = eastLong;
	westLong = westLong;

	southToNorth = this.southLat - this.northLat;
	eastToWest = this.eastLong - this.westLong;

	@Input() point: NgPolandMapPoint | undefined;
	@Input() pointerTemplate: TemplateRef<any> | undefined;

	@Input() fill: string = defaultConfig.pointColor;
	@Input() pointSize: number = defaultConfig.pointSize;
	@Input() clickable: boolean = defaultConfig.pointersClickable;

	@Output() clicked: EventEmitter<NgPolandMapPoint> = new EventEmitter();

	longitudeToSvgX(longitude: number): number | undefined {
		if (longitude < eastLong || longitude > westLong) {
			return undefined;
		}
		const x =
			this.svgWidth *
			Math.abs(Math.abs(longitude - this.eastLong) / this.eastToWest);
		return x;
	}

	latitudeToSvgY(latitude: number): number | undefined {
		if (latitude < southLat || latitude > northLat) {
			return undefined;
		}
		const y =
			this.svgHeight *
			Math.abs(Math.abs(this.northLat - latitude) / this.southToNorth);
		return y;
	}

	pointClicked(point: NgPolandMapPoint | undefined) {
		if (this.clickable && point) this.clicked.next(point);
	}
}
