import { TestBed } from "@angular/core/testing";
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
		TestBed.runInInjectionContext(() => {
			const appComponent = new AppComponent();
			expect(appComponent.title).toBe("ng-poland-map-demo");
		});
	});
});
