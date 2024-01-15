import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';

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
  @Input() bgColor: string = '#eeeeee';
  @Input() strokeWidth: number = 2;
  @Input() strokeColor: string = '#ffffff';

  @Input() highlightColor: string | undefined = this.bgColor;
  @Input() pointColor: string = '#f93324';
  @Input() labelText: string | undefined;
  @Input() labelColor: string = '#000000';
  @Input() labelPosX: string | undefined;
  @Input() labelPosY: string | undefined;
  @Input() labelFont: string | undefined;
  @Input() labelFontSize: string | undefined;
}
