import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ClickSelectComponent } from "./examples/click-select/click-select.component";
import { ConfigOptionsComponent } from "./examples/config-options/config-options.component";
import { DisplayOnlyComponent } from "./examples/display-only/display-only.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [DisplayOnlyComponent, ClickSelectComponent, ConfigOptionsComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	title = "ng-poland-map-demo";
}
