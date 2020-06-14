import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxReactConnectorComponent } from './ngx-react-connector.component';

describe('NgxReactConnectorComponent', () => {
	let component: NgxReactConnectorComponent;
	let fixture: ComponentFixture<NgxReactConnectorComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
				declarations: [NgxReactConnectorComponent]
			})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxReactConnectorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
