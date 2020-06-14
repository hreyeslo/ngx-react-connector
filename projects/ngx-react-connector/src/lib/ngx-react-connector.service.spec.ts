import { TestBed } from '@angular/core/testing';

import { NgxReactConnectorService } from './ngx-react-connector.service';

describe('NgxReactConnectorService', () => {
	let service: NgxReactConnectorService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(NgxReactConnectorService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
