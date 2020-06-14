import { Component, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy, HostBinding } from '@angular/core';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

@Component({
	selector: 'rc-render-container',
	template: `<div [ngClass]="classContainer" #container></div>`,
	styles: ['.react-connector { display:block; }']
})
export class ReactConnectorComponent implements AfterViewInit, OnDestroy {

	@HostBinding('class') class = 'react-connector';

	@ViewChild('container', {read: ElementRef}) private _containerRef: ElementRef;

	@Input() reactComponentRef: any;

	@Input() props: {[key: string]: any} | undefined;

	@Input() events: {[key: string]: () => any} | undefined;

	@Input() classContainer: string | undefined;

	constructor() { }

	ngAfterViewInit(): void {
		this.render();
	}

	render() {
		if (this.reactComponentRef && this._containerRef) {
			ReactDOM.render(React.createElement(this.reactComponentRef, {...this.props || {}, ...this.events || {}}), this._containerRef.nativeElement);
		}
	}

	ngOnDestroy() {
		ReactDOM.unmountComponentAtNode(this._containerRef.nativeElement);
	}

}
