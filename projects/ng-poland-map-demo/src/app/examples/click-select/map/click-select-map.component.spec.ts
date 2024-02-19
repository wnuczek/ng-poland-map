import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ClickSelectMapComponent } from "./click-select-map.component";

describe("ClickSelectMapComponent", () => {
	let component: ClickSelectMapComponent;
	let fixture: ComponentFixture<ClickSelectMapComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ClickSelectMapComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ClickSelectMapComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
