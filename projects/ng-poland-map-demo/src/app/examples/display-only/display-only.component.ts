import { Component } from "@angular/core";
import { CodeViewerComponent } from "../code-viewer/code-viewer.component";
import { DisplayOnlyMapComponent } from "./map/display-only-map.component";

import { environment } from "../../../environments/environment";

@Component({
  selector: "app-display-only",
  standalone: true,
  imports: [DisplayOnlyMapComponent, CodeViewerComponent],
  templateUrl: "./display-only.component.html",
  styleUrl: "./display-only.component.sass",
})
export class DisplayOnlyComponent {
  url = environment.url;
  code = {
    "display-only-map-component.ts": `${this.url}/app/examples/display-only/map/display-only-map.component.ts`,
  };
}
