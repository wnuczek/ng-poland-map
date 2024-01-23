import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import {
  defaultConfig,
  eastLong,
  northLat,
  southLat,
  westLong,
} from '../config';

@Component({
  selector: 'g[lib-ng-poland-map-pointer]',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
  templateUrl: './pointer.component.html',
  styleUrl: './pointer.component.sass',
})
export class NgPolandMapPointerComponent {
  svgWidth = 565;
  svgHeight = 533;

  northLat = northLat;
  southLat = southLat;
  eastLong = eastLong;
  westLong = westLong;

  southToNorth = this.southLat - this.northLat;
  eastToWest = this.eastLong - this.westLong;

  @Input() longitude: number | undefined;
  @Input() latitude: number | undefined;
  @Input() fill: string = defaultConfig.pointColor;
  @Input() pointSize: number = defaultConfig.pointSize;
  @Input() pointerTemplate: TemplateRef<any> | undefined;

  longitudeToSvgX(longitude: number) {
    const x =
      this.svgWidth *
      Math.abs(Math.abs(longitude - this.eastLong) / this.eastToWest);
    return x;
  }

  latitudeToSvgY(latitude: number) {
    const y =
      this.svgHeight *
      Math.abs(Math.abs(this.northLat - latitude) / this.southToNorth);
    return y;
  }
}
