import { AsyncPipe, KeyValuePipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { HighlightModule } from "ngx-highlightjs";
import { HighlightPlusModule } from "ngx-highlightjs/plus";

@Component({
	selector: "app-code-viewer",
	standalone: true,
	imports: [HighlightModule, HighlightPlusModule, KeyValuePipe, AsyncPipe],
	template: `
		@for (url of code | keyvalue; track url) {
			<pre><code [highlight]="url.value| codeFromUrl | async"></code></pre>
		}
	`,
})
export class CodeViewerComponent {
	@Input() code: { [filename: string]: string } = {};
}
