import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgPolandMapComponent, Voivodeship } from 'ng-poland-map';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgPolandMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'ng-poland-map-demo';

  voivodeships = Object.keys(Voivodeship);

  selectedVoivodeships: Voivodeship[] = [];

  onSelectionChange($event: any) {
    const options = $event.target.options;
    this.selectedVoivodeships = [];
    Array.from(options).map((option: any) => {
      if (option.selected) {
        const value = option.value as keyof typeof Voivodeship;
        this.selectedVoivodeships.push(Voivodeship[value]);
      }
    });
    console.log(this.selectedVoivodeships);
  }
}
