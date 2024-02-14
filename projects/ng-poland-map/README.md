# NgPolandMap

ng-poland-map is Angular standalone component that displays svg map of Poland with highlightable voivodeship outlines.

## Usage

Install `ng-poland-map` in your project with: `npm i ng-poland-map`.

Use it inside your Angular app with `<ng-poland-map>` selector.

### Import component

```typescript
import { NgPolandMapComponent } from 'ng-poland-map';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NgPolandMapComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
```

### Input data

```typescript
import { NgPolandMapPoint, NgPolandMapRegion, cityList, regionList } from "ng-poland-map";

const selectedRegions: NgPolandMapRegion[] = [...regionList]; // provide your own list based on regionList
const selectedCities: NgPolandMapCity[] = [...cityList]; // provide your own list based on cityList
```

### Config

Config object can be created using `NgPolandMapConfig` type.

```typescript
import { NgPolandMapConfig } from "ng-poland-map";

const config: NgPolandMapConfig = {
  // your config goes here
};
```

Then use it inside template.

```html
<ng-poland-map 
  [highlightedRegions]="selectedRegions" 
  [highlightedCities]="selectedCites" 
  [bgColor]="config.bgColor" 
  [strokeColor]="config.strokeColor" 
  [strokeWidth]="config.strokeWidth" 
  [regionColor]="config.regionColor" 
  [highlightColor]="config.highlightColor" 
  [pointColor]="config.pointColor" 
  [pointSize]="config.pointSize" 
  [regionsClickable]="config.regionsClickable" 
  (regionClicked)="onRegionClicked($event)" 
  [pointersClickable]="config.pointersClickable" 
  (pointClicked)="onPointerClicked($event)" 
></ng-poland-map>
```

#### Click events

Define event handling functions inside your component

```typescript

import { NgPolandMapPoint, NgPolandMapRegion } from "ng-poland-map";

...

onPointerClicked(point: NgPolandMapPoint) {
  // implement your own logic here
}

onRegionClicked(region: NgPolandMapRegion["voivodeship"]) {
  // implement your own logic here
}

```

## Demo

Live demo is available at [https://ng-poland-map.web.app](https://ng-poland-map.web.app).

You can view demo source here at [github](https://github.com/wnuczek/ng-poland-map/tree/master/projects/ng-poland-map-demo)

## Changelog

### v0.0.7

- click events added to regions and pointers

### v0.0.8

- fixed peer dependencies versions

### v0.0.9

- readme updated with click events
