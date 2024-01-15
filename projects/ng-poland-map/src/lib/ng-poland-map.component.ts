import { CommonModule } from '@angular/common';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { City, Voivodeship, VoivodeshipCapital, regions } from './config';
import { NgPolandMapRegionComponent } from './region/region.component';

@Component({
  selector: 'lib-ng-poland-map',
  standalone: true,
  imports: [CommonModule, NgPolandMapRegionComponent],
  templateUrl: './ng-poland-map.component.html',
  styleUrl: './ng-poland-map.component.sass',
  schemas: [NO_ERRORS_SCHEMA],
})
export class NgPolandMapComponent {
  @Input() bgColor: string = '#eeeeee';
  @Input() strokeWidth: number = 2;
  @Input() strokeColor: string = '#ffffff';
  @Input() highlightColor: string = '#9fc874';
  @Input() pointColor: string = '#f93324';

  @Input() highlighted: Voivodeship[] | undefined;
  @Input() highlightedCities: City[] | undefined;

  voivodeships = Voivodeship;

  voivodeshipCapitals = VoivodeshipCapital;

  cities = City;

  regions = regions;

  constructor() {}

  ngOnInit(): void {}

  regionFillColor(region: Voivodeship): string {
    return this.highlighted?.includes(region)
      ? this.highlightColor
      : this.bgColor;
  }

  showCityPin(city: City): boolean {
    return this.highlightedCities?.includes(city) ? true : false;
  }

  cityPinColor(city: City): string {
    return this.pointColor;
  }
}
