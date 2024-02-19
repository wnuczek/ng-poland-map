import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NgPolandMapPoint, defaultConfig } from "../config";
import { NgPolandMapPointerComponent } from "./pointer.component";

describe("NgPolandMapRegionComponent", () => {
	let component: NgPolandMapPointerComponent;
	let fixture: ComponentFixture<NgPolandMapPointerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NgPolandMapPointerComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(NgPolandMapPointerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	// Should correctly set default values for fill, pointSize, and clickable
	it("should set default values for fill, pointSize, and clickable", () => {
		const component = new NgPolandMapPointerComponent();
		expect(component.fill).toEqual(defaultConfig.pointColor);
		expect(component.pointSize).toEqual(defaultConfig.pointSize);
		expect(component.clickable).toEqual(defaultConfig.pointersClickable);
	});

	// Should correctly emit a clicked event when point is clicked
	it("should emit a clicked event when point is clicked", () => {
		const component = new NgPolandMapPointerComponent();
		component.clickable = true;
		const point: NgPolandMapPoint = {
			latitude: 52.2297,
			longitude: 21.0122,
			labelText: "Warsaw",
		};
		let emittedPoint: NgPolandMapPoint | undefined;
		component.clicked.subscribe((p) => {
			emittedPoint = p;
		});
		component.pointClicked(point);
		expect(emittedPoint).toEqual(point);
	});

	// Should correctly convert longitude to SVG X coordinate
	it("should convert longitude to SVG X coordinate", () => {
		const component = new NgPolandMapPointerComponent();
		const longitude = 19.0402;
		const expectedX =
			component.svgWidth *
			Math.abs(Math.abs(longitude - component.eastLong) / component.eastToWest);
		const x = component.longitudeToSvgX(longitude);
		expect(x).toEqual(expectedX);
	});

	// Should handle undefined point input
	it("should handle undefined point input", () => {
		const component = new NgPolandMapPointerComponent();
		component.point = undefined;
		expect(() => {
			component.pointClicked(component.point);
		}).not.toThrow();
	});

	// Should return undefined on longitude outside borders
	it("should return undefined on longitude outside borders", () => {
		const component = new NgPolandMapPointerComponent();

		const longitude = 45;
		let x: number | undefined = 0;
		try {
			x = component.longitudeToSvgX(longitude);
		} catch (e) {
		} finally {
			expect(x).toBeUndefined();
		}
	});

	// Should handle undefined pointerTemplate input
	it("should handle undefined pointerTemplate input", () => {
		const component = new NgPolandMapPointerComponent();
		component.pointerTemplate = undefined;
		expect(() => {
			component.pointClicked(component.point);
		}).not.toThrow();
	});

	describe("pointClicked", () => {
		// Emits a 'clicked' event with the clicked point as argument
		it("should emit a 'clicked' event with the clicked point as argument", () => {
			const component = new NgPolandMapPointerComponent();
			const point: NgPolandMapPoint = {
				latitude: 52.2297,
				longitude: 21.0122,
				labelText: "Warsaw",
			};
			const emittedPoint: NgPolandMapPoint = {
				latitude: 52.2297,
				longitude: 21.0122,
				labelText: "Warsaw",
			};
			component.clicked.subscribe((emitted: NgPolandMapPoint) => {
				expect(emitted).toEqual(emittedPoint);
			});
			component.pointClicked(point);
		});

		// Works correctly when 'point' input is defined
		it("should work correctly when 'point' input is defined", () => {
			const component = new NgPolandMapPointerComponent();
			const point: NgPolandMapPoint = {
				latitude: 52.2297,
				longitude: 21.0122,
				labelText: "Warsaw",
			};
			spyOn(component.clicked, "next");

			component.point = point;
			component.clickable = true;
			component.pointClicked(point);
			expect(component.clicked.next).toHaveBeenCalled();
		});

		// Works correctly when 'point' input is defined
		it("should not emit if clickable set to false", () => {
			const component = new NgPolandMapPointerComponent();
			const point: NgPolandMapPoint = {
				latitude: 52.2297,
				longitude: 21.0122,
				labelText: "Warsaw",
			};
			spyOn(component.clicked, "next");

			component.point = point;
			component.clickable = false;
			component.pointClicked(point);
			expect(component.clicked.next).not.toHaveBeenCalled();
		});

		// Emits event with correct point data when 'point' input is undefined
		it("should emit event with correct point data when 'point' input is undefined", () => {
			const component = new NgPolandMapPointerComponent();
			const emittedPoint: NgPolandMapPoint = {
				latitude: 52.2297,
				longitude: 21.0122,
				labelText: "Warsaw",
			};
			component.clicked.subscribe((emitted: NgPolandMapPoint) => {
				expect(emitted).toEqual(emittedPoint);
			});
			component.pointClicked(undefined);
		});

		// Does not emit event when 'clicked' output is not subscribed to
		it("should not emit event when 'clicked' output is not subscribed to", () => {
			const component = new NgPolandMapPointerComponent();
			const point: NgPolandMapPoint = {
				latitude: 52.2297,
				longitude: 21.0122,
				labelText: "Warsaw",
			};
			component.pointClicked(point);
			expect(component.clicked.observers.length).toBe(0);
		});

		// Handles click event with correct point data
		it("should handle click event with correct point data", () => {
			const component = new NgPolandMapPointerComponent();
			const point: NgPolandMapPoint = {
				latitude: 52.2297,
				longitude: 21.0122,
				labelText: "Warsaw",
			};
			const emittedPoint: NgPolandMapPoint = {
				latitude: 52.2297,
				longitude: 21.0122,
				labelText: "Warsaw",
			};
			component.clicked.subscribe((emitted: NgPolandMapPoint) => {
				expect(emitted).toEqual(emittedPoint);
			});
			component.pointClicked(point);
		});
	});
});
