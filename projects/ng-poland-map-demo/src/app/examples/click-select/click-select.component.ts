import { AsyncPipe, KeyValuePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  NgPolandMapComponent,
  NgPolandMapRegion,
  regionList,
} from 'ng-poland-map';
import { HighlightModule } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';

@Component({
  selector: 'app-click-select',
  standalone: true,
  imports: [
    NgPolandMapComponent,
    HighlightModule,
    HighlightPlusModule,
    KeyValuePipe,
    AsyncPipe,
  ],
  templateUrl: './click-select.component.html',
  styleUrl: './click-select.component.sass',
})
export class ClickSelectComponent {
  voivodeships = regionList;
  selectedRegions = signal<NgPolandMapRegion[]>([]);

  code = {
    'click-select.component.html':
      'https://github.com/wnuczek/ng-poland-map/blob/master/projects/ng-poland-map-demo/src/app/examples/click-select/click-select.component.html',
    'click-select-component.ts':
      'https://github.com/wnuczek/ng-poland-map/blob/master/projects/ng-poland-map-demo/src/app/examples/click-select/click-select.component.ts',
  };

  codeString = `test
	 test`;
  onRegionClicked(regionClicked: NgPolandMapRegion['voivodeship']) {
    // alert(regionClicked);
    this.selectedRegions.update((regions) => {
      const voivodeshipNames = regions.map((region) => region.voivodeship);

      if (!voivodeshipNames.includes(regionClicked)) {
        const region = this.voivodeships.find(
          (r) => r.voivodeship === regionClicked
        );

        if (region) regions.push(region);
      } else {
        regions.splice(voivodeshipNames.indexOf(regionClicked), 1);
      }
      console.log(regions);
      return [...regions];
    });
  }
}
