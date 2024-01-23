import { CommonModule } from '@angular/common';
import { Component, Input, NO_ERRORS_SCHEMA, TemplateRef } from '@angular/core';
import {
  NgPolandMapPoint,
  NgPolandMapRegion,
  Voivodeship,
  cityList,
  defaultConfig,
  regionList,
} from './config';
import { NgPolandMapPointerComponent } from './pointer/pointer.component';
import { NgPolandMapRegionComponent } from './region/region.component';

@Component({
  selector: 'ng-poland-map',
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
  regions = regionList;
  cities = cityList;

  // config
  @Input() bgColor: string = defaultConfig.bgColor;
  @Input() regionColor: string = defaultConfig.regionColor;
  @Input() strokeWidth: number = defaultConfig.strokeWidth;
  @Input() strokeColor: string = defaultConfig.strokeColor;
  @Input() highlightColor: string = defaultConfig.highlightColor;
  @Input() pointColor: string = defaultConfig.pointColor;
  @Input() pointSize: number = defaultConfig.pointSize;

  // data
  @Input() highlightedRegions: NgPolandMapRegion[] | undefined;
  @Input() highlightedCities: NgPolandMapPoint[] | undefined;

  // custom templates
  @Input() pointerTemplate: TemplateRef<any> | undefined;

  constructor() {}

  ngOnInit(): void {}

  regionFillColor(region: Voivodeship): string {
    return this.highlightedRegions?.map((i) => i?.voivodeship).includes(region)
      ? this.highlightColor
      : this.regionColor;
  }
}
