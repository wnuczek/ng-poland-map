import { CommonModule } from '@angular/common';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  NgPolandMapPoint,
  NgPolandMapRegion,
  Voivodeship,
  cityList,
  regionList,
} from './config';
import { NgPolandMapPointerComponent } from './pointer/pointer.component';
import { NgPolandMapRegionComponent } from './region/region.component';

const northLat = 54.833333;
const northLong = 18.066667;
const southLat = 49;
const southLong = 22.85;
const eastLat = 52.85;
const eastLong = 14.116667;
const westLat = 50.866667;
const westLong = 24.15;

const southToNorth = southLat - northLat;
const eastToWest = eastLong - westLong;

@Component({
  selector: 'lib-ng-poland-map',
  standalone: true,
  imports: [
    CommonModule,
    NgPolandMapRegionComponent,
    NgPolandMapPointerComponent,
  ],
  templateUrl: './ng-poland-map.component.html',
  styleUrl: './ng-poland-map.component.sass',
  schemas: [NO_ERRORS_SCHEMA],
})
export class NgPolandMapComponent {
  svgWidth = 565;
  svgHeight = 533;

  @Input() bgColor: string = '#eeeeee';
  @Input() strokeWidth: number = 2;
  @Input() strokeColor: string = '#ffffff';
  @Input() highlightColor: string = '#9fc874';
  @Input() pointColor: string = '#f93324';

  @Input() highlightedRegions: NgPolandMapRegion[] | undefined;
  @Input() highlightedCities: NgPolandMapPoint[] | undefined;

  regions = regionList;
  cities = cityList;

  constructor() {}

  ngOnInit(): void {}

  regionFillColor(region: Voivodeship): string {
    return this.highlightedRegions?.map((i) => i?.voivodeship).includes(region)
      ? this.highlightColor
      : this.bgColor;
  }

  longitudeToSvgX(longitude: number) {
    const x =
      this.svgWidth * Math.abs(Math.abs(longitude - eastLong) / eastToWest);
    return x;
  }

  latitudeToSvgY(latitude: number) {
    const y =
      this.svgHeight * Math.abs(Math.abs(northLat - latitude) / southToNorth);
    return y;
  }
}
