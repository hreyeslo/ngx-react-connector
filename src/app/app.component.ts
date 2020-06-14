import { ReactConnectorService } from 'ngx-react-connector';
import { Component } from '@angular/core';

import { PrimaryButton } from 'office-ui-fabric-react';

@Component({
	selector: 'rc-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	buttonText = 'Primary button';
	numberOfClicks = 0;

	reactComponent = PrimaryButton;
	reactClassContainer = 'example';
	reactProps = {text: this.buttonText};
	reactEvents = {onClick: this.buttonClick.bind(this)};

	constructor(private _rcService: ReactConnectorService) {}

	buttonClick() {
		this.numberOfClicks += 1;
	}

	updateText(text: string) {
		this.reactProps = this._rcService.updateProps(this.reactProps, {text});
	}

}

