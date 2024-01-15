import { Component, Input } from '@angular/core';

@Component({
  selector: 'g[lib-ng-poland-map-pointer]',
  standalone: true,
  imports: [],
  templateUrl: './pointer.component.html',
  styleUrl: './pointer.component.sass',
})
export class NgPolandMapPointerComponent {
  @Input() x: number | undefined;
  @Input() y: number | undefined;
}
