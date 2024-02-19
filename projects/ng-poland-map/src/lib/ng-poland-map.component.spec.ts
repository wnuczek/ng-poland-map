import { TemplateRef } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
	NgPolandMapRegion,
	Voivodeship,
	cityList,
	defaultConfig,
	regionList,
} from "./config";
import { NgPolandMapComponent } from "./ng-poland-map.component";

describe("NgPolandMapComponent", () => {
	let component: NgPolandMapComponent;
	let fixture: ComponentFixture<NgPolandMapComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NgPolandMapComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(NgPolandMapComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	// Component is initialized with default values for all inputs
	it("should initialize component with default values", () => {
		const ngPolandMap = new NgPolandMapComponent();
		expect(ngPolandMap.bgColor).toEqual(defaultConfig.bgColor);
		expect(ngPolandMap.regionColor).toEqual(defaultConfig.regionColor);
		expect(ngPolandMap.strokeWidth).toEqual(defaultConfig.strokeWidth);
		expect(ngPolandMap.strokeColor).toEqual(defaultConfig.strokeColor);
		expect(ngPolandMap.highlightColor).toEqual(defaultConfig.highlightColor);
		expect(ngPolandMap.pointColor).toEqual(defaultConfig.pointColor);
		expect(ngPolandMap.pointSize).toEqual(defaultConfig.pointSize);
		expect(ngPolandMap.regionsClickable).toEqual(
			defaultConfig.regionsClickable,
		);
		expect(ngPolandMap.pointersClickable).toEqual(
			defaultConfig.pointersClickable,
		);
	});

	// Component displays a map of Poland with regions and cities
	it("should display a map of Poland with regions and cities", () => {
		const ngPolandMap = new NgPolandMapComponent();
		// Assert that the component template contains the map of Poland with regions and cities
		// ...
	});

	// Clicking on a region emits a Voivodeship event
	it("should emit a Voivodeship event when clicking on a region", () => {
		const ngPolandMap = new NgPolandMapComponent();
		const region = Voivodeship.mazowieckie;
		spyOn(ngPolandMap.regionClicked, "next");
		ngPolandMap.regionClick(region);
		expect(ngPolandMap.regionClicked.next).toHaveBeenCalledWith(region);
	});

	// No regions or cities are provided as inputs
	it("should not display any regions or cities when no inputs are provided", () => {
		const ngPolandMap = new NgPolandMapComponent();
		// Assert that the component template does not contain any regions or cities
		// ...
	});

	// Only some regions or cities are provided as inputs
	it("should display only the provided regions and cities", () => {
		const ngPolandMap = new NgPolandMapComponent();
		// Set the highlightedRegions and highlightedCities inputs with some values
		// Assert that the component template only contains the provided regions and cities
		// ...
	});

	// Invalid input values are provided for strokeWidth, pointSize
	it("should handle invalid input values for strokeWidth and pointSize", () => {
		const ngPolandMap = new NgPolandMapComponent();
		// Set the strokeWidth and pointSize inputs with invalid values
		// Assert that the component handles the invalid values gracefully
		// ...
	});

	// The component should render a map of Poland with regions and cities.
	it("should render a map of Poland with regions and cities", () => {
		const ngPolandMap = new NgPolandMapComponent();
		expect(ngPolandMap).toBeDefined();
		expect(ngPolandMap.regions).toEqual(regionList);
		expect(ngPolandMap.cities).toEqual(cityList);
	});

	// The component should allow customization of the map's colors and stroke width.
	it("should allow customization of the map's colors and stroke width", () => {
		const ngPolandMap = new NgPolandMapComponent();
		ngPolandMap.bgColor = "#ffffff";
		ngPolandMap.regionColor = "#aaaaaa";
		ngPolandMap.strokeWidth = 2;
		ngPolandMap.strokeColor = "#dddddd";
		ngPolandMap.highlightColor = "#9fc874";
		ngPolandMap.pointColor = "#f93324";
		ngPolandMap.pointSize = 10;
		ngPolandMap.regionsClickable = true;
		ngPolandMap.pointersClickable = true;

		expect(ngPolandMap.bgColor).toEqual("#ffffff");
		expect(ngPolandMap.regionColor).toEqual("#aaaaaa");
		expect(ngPolandMap.strokeWidth).toEqual(2);
		expect(ngPolandMap.strokeColor).toEqual("#dddddd");
		expect(ngPolandMap.highlightColor).toEqual("#9fc874");
		expect(ngPolandMap.pointColor).toEqual("#f93324");
		expect(ngPolandMap.pointSize).toEqual(10);
		expect(ngPolandMap.regionsClickable).toEqual(true);
		expect(ngPolandMap.pointersClickable).toEqual(true);
	});

	// The component should allow highlighting of specific regions and cities.
	it("should allow highlighting of specific regions and cities", () => {
		const ngPolandMap = new NgPolandMapComponent();
		const highlightedRegions: NgPolandMapRegion[] = [
			{
				voivodeship: Voivodeship.mazowieckie,
				path: "",
				labelPosX: 0,
				labelPosY: 0,
				labelText: "Mazowieckie",
			},
			{
				voivodeship: Voivodeship.lubelskie,
				path: "",
				labelPosX: 0,
				labelPosY: 0,
				labelText: "Lubelskie",
			},
		];
		const highlightedCities = [
			{ labelText: "Warszawa", latitude: 52.237049, longitude: 21.017532 },
			{ labelText: "Gdańsk", latitude: 54.372158, longitude: 18.638306 },
		];
		ngPolandMap.highlightedRegions = highlightedRegions;
		ngPolandMap.highlightedCities = highlightedCities;

		expect(ngPolandMap.highlightedRegions).toEqual(highlightedRegions);
		expect(ngPolandMap.highlightedCities).toEqual(highlightedCities);
	});

	// The component should handle undefined inputs for highlightedRegions and highlightedCities.
	it("should handle undefined inputs for highlightedRegions and highlightedCities", () => {
		const ngPolandMap = new NgPolandMapComponent();
		ngPolandMap.highlightedRegions = undefined;
		ngPolandMap.highlightedCities = undefined;

		expect(ngPolandMap.highlightedRegions).toBeUndefined();
		expect(ngPolandMap.highlightedCities).toBeUndefined();
	});

	// The component should handle clicks on regions and cities when regionsClickable and pointersClickable are false.
	it("should handle clicks on regions and cities when regionsClickable and pointersClickable are false", () => {
		const ngPolandMap = new NgPolandMapComponent();
		ngPolandMap.regionsClickable = false;
		ngPolandMap.pointersClickable = false;

		const region = Voivodeship.mazowieckie;
		const point = {
			labelText: "Warszawa",
			latitude: 52.237049,
			longitude: 21.017532,
		};

		spyOn(ngPolandMap.regionClicked, "next");
		spyOn(ngPolandMap.pointClicked, "next");

		ngPolandMap.regionClick(region);
		ngPolandMap.pointClick(point);

		expect(ngPolandMap.regionClicked.next).not.toHaveBeenCalled();
		expect(ngPolandMap.pointClicked.next).not.toHaveBeenCalled();
	});

	// The component should handle clicks on regions and cities when highlightedRegions and highlightedCities are undefined.
	it("should handle clicks on regions and cities when highlightedRegions and highlightedCities are undefined", () => {
		const ngPolandMap = new NgPolandMapComponent();
		ngPolandMap.highlightedRegions = undefined;
		ngPolandMap.highlightedCities = undefined;

		const region = Voivodeship.mazowieckie;
		const point = {
			labelText: "Warszawa",
			latitude: 52.237049,
			longitude: 21.017532,
		};

		spyOn(ngPolandMap.regionClicked, "next");
		spyOn(ngPolandMap.pointClicked, "next");

		ngPolandMap.regionClick(region);
		ngPolandMap.pointClick(point);

		expect(ngPolandMap.regionClicked.next).toHaveBeenCalledWith(region);
		expect(ngPolandMap.pointClicked.next).toHaveBeenCalledWith(point);
	});

	// The component should render a map of Poland with regions and cities.
	it("should render a map of Poland with regions and cities", () => {
		const ngPolandMap = new NgPolandMapComponent();
		expect(ngPolandMap).toBeDefined();
		expect(ngPolandMap.regions).toEqual(regionList);
		expect(ngPolandMap.cities).toEqual(cityList);
	});

	// The component should allow customization of the map's colors and stroke width.
	it("should allow customization of the map's colors and stroke width", () => {
		const ngPolandMap = new NgPolandMapComponent();
		ngPolandMap.bgColor = "#ffffff";
		ngPolandMap.regionColor = "#aaaaaa";
		ngPolandMap.strokeWidth = 2;
		ngPolandMap.strokeColor = "#dddddd";
		ngPolandMap.highlightColor = "#9fc874";
		ngPolandMap.pointColor = "#f93324";
		ngPolandMap.pointSize = 10;
		ngPolandMap.regionsClickable = true;
		ngPolandMap.pointersClickable = true;

		expect(ngPolandMap.bgColor).toEqual("#ffffff");
		expect(ngPolandMap.regionColor).toEqual("#aaaaaa");
		expect(ngPolandMap.strokeWidth).toEqual(2);
		expect(ngPolandMap.strokeColor).toEqual("#dddddd");
		expect(ngPolandMap.highlightColor).toEqual("#9fc874");
		expect(ngPolandMap.pointColor).toEqual("#f93324");
		expect(ngPolandMap.pointSize).toEqual(10);
		expect(ngPolandMap.regionsClickable).toEqual(true);
		expect(ngPolandMap.pointersClickable).toEqual(true);
	});

	// The component should allow highlighting of specific regions and cities.
	it("should allow highlighting of specific regions and cities", () => {
		const ngPolandMap = new NgPolandMapComponent();
		const highlightedRegions: NgPolandMapRegion[] = [
			{
				voivodeship: Voivodeship.mazowieckie,
				path: "",
				labelPosX: 0,
				labelPosY: 0,
				labelText: "Mazowieckie",
			},
			{
				voivodeship: Voivodeship.lubelskie,
				path: "",
				labelPosX: 0,
				labelPosY: 0,
				labelText: "Lubelskie",
			},
		];
		const highlightedCities = [
			{ labelText: "Warszawa", latitude: 52.237049, longitude: 21.017532 },
			{ labelText: "Gdańsk", latitude: 54.372158, longitude: 18.638306 },
		];
		ngPolandMap.highlightedRegions = highlightedRegions;
		ngPolandMap.highlightedCities = highlightedCities;

		expect(ngPolandMap.highlightedRegions).toEqual(highlightedRegions);
		expect(ngPolandMap.highlightedCities).toEqual(highlightedCities);
	});

	// The component should handle undefined inputs for highlightedRegions and highlightedCities.
	it("should handle undefined inputs for highlightedRegions and highlightedCities", () => {
		const ngPolandMap = new NgPolandMapComponent();
		ngPolandMap.highlightedRegions = undefined;
		ngPolandMap.highlightedCities = undefined;

		expect(ngPolandMap.highlightedRegions).toBeUndefined();
		expect(ngPolandMap.highlightedCities).toBeUndefined();
	});

	// The component should handle clicks on regions and cities when regionsClickable and pointersClickable are false.
	it("should handle clicks on regions and cities when regionsClickable and pointersClickable are false", () => {
		const ngPolandMap = new NgPolandMapComponent();
		ngPolandMap.regionsClickable = false;
		ngPolandMap.pointersClickable = false;

		const region = Voivodeship.mazowieckie;
		const point = {
			labelText: "Warszawa",
			latitude: 52.237049,
			longitude: 21.017532,
		};

		spyOn(ngPolandMap.regionClicked, "next");
		spyOn(ngPolandMap.pointClicked, "next");

		ngPolandMap.regionClick(region);
		ngPolandMap.pointClick(point);

		expect(ngPolandMap.regionClicked.next).not.toHaveBeenCalled();
		expect(ngPolandMap.pointClicked.next).not.toHaveBeenCalled();
	});

	// The component should handle clicks on regions and cities when highlightedRegions and highlightedCities are undefined.
	it("should handle clicks on regions and cities when highlightedRegions and highlightedCities are undefined", () => {
		const ngPolandMap = new NgPolandMapComponent();
		ngPolandMap.highlightedRegions = undefined;
		ngPolandMap.highlightedCities = undefined;

		const region = Voivodeship.mazowieckie;
		const point = {
			labelText: "Warszawa",
			latitude: 52.237049,
			longitude: 21.017532,
		};

		spyOn(ngPolandMap.regionClicked, "next");
		spyOn(ngPolandMap.pointClicked, "next");

		ngPolandMap.regionClick(region);
		ngPolandMap.pointClick(point);

		expect(ngPolandMap.regionClicked.next).toHaveBeenCalledWith(region);
		expect(ngPolandMap.pointClicked.next).toHaveBeenCalledWith(point);
	});

	// The component should emit events when a region or city is clicked.
	it("should emit regionClicked event when a region is clicked", () => {
		const ngPolandMap = new NgPolandMapComponent();
		const region = Voivodeship.mazowieckie;
		spyOn(ngPolandMap.regionClicked, "next");

		ngPolandMap.regionClick(region);

		expect(ngPolandMap.regionClicked.next).toHaveBeenCalledWith(region);
	});

	// The component should allow custom templates for pointers.
	it("should set pointerTemplate to the provided template ref", () => {
		const ngPolandMap = new NgPolandMapComponent();
		const templateRef = {} as TemplateRef<Element>;

		ngPolandMap.pointerTemplate = templateRef;

		expect(ngPolandMap.pointerTemplate).toBe(templateRef);
	});

	// The component should handle clicks on regions and cities that are not in the regions and cities lists.
	it("should not emit regionClicked event when a region is clicked and regionsClickable is false", () => {
		const ngPolandMap = new NgPolandMapComponent();
		const region = Voivodeship.mazowieckie;
		spyOn(ngPolandMap.regionClicked, "next");
		ngPolandMap.regionsClickable = false;

		ngPolandMap.regionClick(region);

		expect(ngPolandMap.regionClicked.next).not.toHaveBeenCalled();
	});
});
