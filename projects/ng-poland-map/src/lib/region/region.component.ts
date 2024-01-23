import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { defaultConfig } from '../config';

@Component({
  selector: 'g[lib-ng-poland-map-region]',
  standalone: true,
  imports: [],
  templateUrl: './region.component.html',
  styleUrl: './region.component.sass',
  schemas: [NO_ERRORS_SCHEMA],
})
export class NgPolandMapRegionComponent {
  @Input() path: string | undefined;
  @Input() bgColor: string = defaultConfig.regionColor;
  @Input() strokeWidth: number = defaultConfig.strokeWidth;
  @Input() strokeColor: string = defaultConfig.strokeColor;

  @Input() highlightColor: string | undefined = this.bgColor;

  @Input() labelText: string | undefined;
  @Input() labelColor: string = '#000000';
  @Input() labelPosX: number | undefined;
  @Input() labelPosY: number | undefined;
  @Input() labelFont: string | undefined;
  @Input() labelFontSize: string | undefined;
}
