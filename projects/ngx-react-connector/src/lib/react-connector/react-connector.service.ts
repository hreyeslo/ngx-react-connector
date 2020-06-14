import { Injectable } from '@angular/core';
import { merge } from 'lodash';

@Injectable()
export class ReactConnectorService {

	updateProps<T>(currentProps: object, newProps: object): T {
		return merge({}, currentProps, newProps) as T;
	}

	updateEvents<T>(currentEvents: object, newEvents: object): T {
		return merge({}, currentEvents, newEvents) as T;
	}

}
