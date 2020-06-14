import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactConnectorComponent } from './react-connector/react-connector.component';
import { ReactConnectorDirective } from './react-connector/react-connector.directive';
import { ReactConnectorService } from './react-connector/react-connector.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ReactConnectorComponent,
		ReactConnectorDirective
	],
	providers: [
		ReactConnectorService
	],
	exports: [
		ReactConnectorDirective
	]
})
export class ReactConnectorModule {}
