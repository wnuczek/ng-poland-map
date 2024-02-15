import { TestBed } from "@angular/core/testing";
import { cityList, regionList } from "ng-poland-map";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppComponent],
		}).compileComponents();
	});

	it("should create the app", () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have the 'ng-poland-map-demo' title`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual("ng-poland-map-demo");
	});

	// AppComponent should have a title property with the value "ng-poland-map-demo"
	it('should have a title property with the value "ng-poland-map-demo"', () => {
		const appComponent = new AppComponent();
		expect(appComponent.title).toBe("ng-poland-map-demo");
	});

	// AppComponent should have a voivodeships property with the value of regionList
	it("should have a voivodeships property with the value of regionList", () => {
		const appComponent = new AppComponent();
		expect(appComponent.voivodeships).toEqual(regionList);
	});

	// AppComponent should have a cities property with the value of cityList
	it("should have a cities property with the value of cityList", () => {
		const appComponent = new AppComponent();
		expect(appComponent.cities).toEqual(cityList);
	});

	// AppComponent should handle the case where the selected options in onRegionSelectionChange are null
	it("should handle the case where the selected options in onRegionSelectionChange are null", () => {
		const appComponent = new AppComponent();
		const event = {
			target: {
				options: null,
			},
		};
		appComponent.onRegionSelectionChange(event);
		expect(appComponent.selectedVoivodeships).toEqual([]);
	});

	// AppComponent should have a selectedVoivodeships property that is an empty array
	it("should have an empty selectedVoivodeships array", () => {
		const appComponent = new AppComponent();
		expect(appComponent.selectedVoivodeships).toEqual([]);
	});

	// AppComponent should have a selectedCites property that is an empty array
	it("should have an empty selectedCites array", () => {
		const appComponent = new AppComponent();
		expect(appComponent.selectedCites).toEqual([]);
	});
});
