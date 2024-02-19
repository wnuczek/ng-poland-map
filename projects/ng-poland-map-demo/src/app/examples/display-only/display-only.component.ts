import { Component } from "@angular/core";
import { CodeViewerComponent } from "../code-viewer/code-viewer.component";
import { DisplayOnlyMapComponent } from "./map/display-only-map.component";

@Component({
	selector: "app-display-only",
	standalone: true,
	imports: [DisplayOnlyMapComponent, CodeViewerComponent],
	templateUrl: "./display-only.component.html",
	styleUrl: "./display-only.component.sass",
})
export class DisplayOnlyComponent {
	code = {
		"display-only-map-component.ts":
			"https://github.com/wnuczek/ng-poland-map/blob/more-examples-demo/projects/ng-poland-map-demo/src/app/examples/display-only/map/display-only-map.component.ts",
	};
}
