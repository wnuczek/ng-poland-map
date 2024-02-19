import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NgPolandMapRegion, Voivodeship } from "../config";
import { NgPolandMapRegionComponent } from "./region.component";

describe("NgPolandMapRegionComponent", () => {
	let component: NgPolandMapRegionComponent;
	let fixture: ComponentFixture<NgPolandMapRegionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NgPolandMapRegionComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(NgPolandMapRegionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	// Component renders with default values
	it("should render component with default values", () => {
		const component = new NgPolandMapRegionComponent();
		expect(component.region).toBeUndefined();
		expect(component.bgColor).toEqual("#aaaaaa");
		expect(component.strokeWidth).toEqual(2);
		expect(component.strokeColor).toEqual("#dddddd");
		expect(component.clickable).toEqual(false);
		expect(component.highlightColor).toEqual("#aaaaaa");
		expect(component.labelText).toBeUndefined();
		expect(component.labelColor).toEqual("#000000");
		expect(component.labelPosX).toBeUndefined();
		expect(component.labelPosY).toBeUndefined();
		expect(component.labelFont).toBeUndefined();
		expect(component.labelFontSize).toBeUndefined();
	});

	// Component renders with custom values
	it("should render component with custom values", () => {
		const region: NgPolandMapRegion = {
			path: "path",
			labelPosX: 10,
			labelPosY: 20,
			labelText: "Label",
			voivodeship: Voivodeship.dolnośląskie,
		};
		const bgColor = "#ffffff";
		const strokeWidth = 3;
		const strokeColor = "#ff0000";
		const clickable = false;
		const highlightColor = "#00ff00";
		const labelText = "Custom Label";
		const labelColor = "#ffffff";
		const labelPosX = 30;
		const labelPosY = 40;
		const labelFont = "Arial";
		const labelFontSize = "12px";

		const component = new NgPolandMapRegionComponent();
		component.region = region;
		component.bgColor = bgColor;
		component.strokeWidth = strokeWidth;
		component.strokeColor = strokeColor;
		component.clickable = clickable;
		component.highlightColor = highlightColor;
		component.labelText = labelText;
		component.labelColor = labelColor;
		component.labelPosX = labelPosX;
		component.labelPosY = labelPosY;
		component.labelFont = labelFont;
		component.labelFontSize = labelFontSize;

		expect(component.region).toEqual(region);
		expect(component.bgColor).toEqual(bgColor);
		expect(component.strokeWidth).toEqual(strokeWidth);
		expect(component.strokeColor).toEqual(strokeColor);
		expect(component.clickable).toEqual(clickable);
		expect(component.highlightColor).toEqual(highlightColor);
		expect(component.labelText).toEqual(labelText);
		expect(component.labelColor).toEqual(labelColor);
		expect(component.labelPosX).toEqual(labelPosX);
		expect(component.labelPosY).toEqual(labelPosY);
		expect(component.labelFont).toEqual(labelFont);
		expect(component.labelFontSize).toEqual(labelFontSize);
	});

	// Clicking on region emits 'clicked' event with correct voivodeship
	it("should emit 'clicked' event with correct voivodeship when region is clicked", () => {
		const component = new NgPolandMapRegionComponent();
		component.clickable = true;
		const voivodeship = Voivodeship.dolnośląskie;
		component.region = {
			path: "path",
			labelPosX: 10,
			labelPosY: 20,
			labelText: "Label",
			voivodeship: voivodeship,
		};
		let clickedVoivodeship: Voivodeship | undefined;
		component.clicked.subscribe((v: Voivodeship) => (clickedVoivodeship = v));

		component.regionClicked(voivodeship);

		expect(clickedVoivodeship).toEqual(voivodeship);
	});

	// Region is undefined
	it("should have undefined region when region is not provided", () => {
		const component = new NgPolandMapRegionComponent();
		expect(component.region).toBeUndefined();
	});

	// Label text is undefined
	it("should have undefined label text when label text is not provided", () => {
		const component = new NgPolandMapRegionComponent();
		expect(component.labelText).toBeUndefined();
	});

	// Label position is undefined
	it("should have undefined label position when label position is not provided", () => {
		const component = new NgPolandMapRegionComponent();
		expect(component.labelPosX).toBeUndefined();
		expect(component.labelPosY).toBeUndefined();
	});

	// Label renders with default values
	it("should render component with default label values", () => {
		const component = new NgPolandMapRegionComponent();
		expect(component.labelText).toBeUndefined();
		expect(component.labelColor).toEqual("#000000");
		expect(component.labelPosX).toBeUndefined();
		expect(component.labelPosY).toBeUndefined();
		expect(component.labelFont).toBeUndefined();
		expect(component.labelFontSize).toBeUndefined();
	});

	// Label renders with custom values
	it("should render component with custom label values", () => {
		const component = new NgPolandMapRegionComponent();
		component.labelText = "Custom Label";
		component.labelColor = "#ff0000";
		component.labelPosX = 10;
		component.labelPosY = 20;
		component.labelFont = "Arial";
		component.labelFontSize = "12px";
		expect(component.labelText).toEqual("Custom Label");
		expect(component.labelColor).toEqual("#ff0000");
		expect(component.labelPosX).toEqual(10);
		expect(component.labelPosY).toEqual(20);
		expect(component.labelFont).toEqual("Arial");
		expect(component.labelFontSize).toEqual("12px");
	});

	// Label font size is undefined
	it("should render component with undefined label font size", () => {
		const component = new NgPolandMapRegionComponent();
		expect(component.labelFontSize).toBeUndefined();
	});
});
