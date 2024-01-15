import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  NgPolandMapComponent,
  NgPolandMapPoint,
  NgPolandMapRegion,
  Voivodeship,
  cityList,
  regionList,
} from 'ng-poland-map';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgPolandMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'ng-poland-map-demo';

  voivodeships = regionList;
  cities = cityList;

  selectedVoivodeships: NgPolandMapRegion[] = [];
  selectedCites: NgPolandMapPoint[] = [];

  onRegionSelectionChange($event: any) {
    const options = $event.target.options;

    this.selectedVoivodeships = [];

    Array.from(options).map((option: any) => {
      if (option.selected) {
        const value = option.value as Voivodeship;
        const selected = this.voivodeships.filter(
          (v) => v.voivodeship == value
        )[0];
        this.selectedVoivodeships.push(selected);
      }
    });
  }

  onCitySelectionChange($event: any) {
    const options = $event.target.options;

    this.selectedCites = [];

    Array.from(options).map((option: any) => {
      if (option.selected) {
        const value = option.value;
        const selected = this.cities.filter((v) => v.labelText == value)[0];
        this.selectedCites.push(selected);
      }
    });
  }
}
