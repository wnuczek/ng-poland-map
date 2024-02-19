import { Component } from "@angular/core";
import { CodeViewerComponent } from "../code-viewer/code-viewer.component";
import { ClickSelectMapComponent } from "./map/click-select-map.component";

@Component({
	selector: "app-click-select",
	standalone: true,
	imports: [ClickSelectMapComponent, CodeViewerComponent],
	templateUrl: "./click-select.component.html",
	styleUrl: "./click-select.component.sass",
})
export class ClickSelectComponent {
	code = {
		"click-select-map-component.ts":
			"https://github.com/wnuczek/ng-poland-map/blob/more-examples-demo/projects/ng-poland-map-demo/src/app/examples/click-select/map/click-select-map.component.ts",
	};
}
