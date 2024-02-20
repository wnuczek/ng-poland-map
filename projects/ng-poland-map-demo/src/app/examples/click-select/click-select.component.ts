import { Component } from "@angular/core";
import { CodeViewerComponent } from "../code-viewer/code-viewer.component";
import { ClickSelectMapComponent } from "./map/click-select-map.component";

import { environment } from "../../../environments/environment";

@Component({
  selector: "app-click-select",
  standalone: true,
  imports: [ClickSelectMapComponent, CodeViewerComponent],
  templateUrl: "./click-select.component.html",
  styleUrl: "./click-select.component.sass",
})
export class ClickSelectComponent {
  url = environment.url;
  code = {
    "click-select-map-component.ts": `${this.url}/app/examples/click-select/map/click-select-map.component.ts`,
  };
}
