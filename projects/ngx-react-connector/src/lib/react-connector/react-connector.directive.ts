import { Directive, OnInit, OnChanges, SimpleChanges, Input, ViewContainerRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { get } from 'lodash';

import { ReactConnectorComponent } from './react-connector.component';

@Directive({
	selector: '[reactConnectorComponent]'
})
export class ReactConnectorDirective implements OnInit, OnChanges {

	@Input('reactConnectorComponent') reactConnectorComponent: any;

	@Input() reactProps: {[key: string]: any};

	@Input() reactEvents: {[key: string]: () => any};

	@Input() reactClassContainer: string;

	private _componentRef: ReactConnectorComponent;

	constructor(
		private _viewContainerRef: ViewContainerRef,
		private _componentFactoryResolver: ComponentFactoryResolver,
		private _injector: Injector
	) { }

	ngOnInit() {
		this.render();
	}

	ngOnChanges(changes: SimpleChanges) {
		const propChange = !get(changes, 'reactProps.firstChange', true);
		const eventsChange = !get(changes, 'reactEvents.firstChange', true);
		const classContainerChange = !get(changes, 'reactClassContainer.firstChange', true);
		if (propChange || eventsChange || classContainerChange) {
			this._updateComponent();
		}
	}

	render() {
		const isReactComponent = get(this.reactConnectorComponent, 'prototype.isReactComponent');
		if (isReactComponent && this._viewContainerRef) {
			this._viewContainerRef.clear();
			const componentFactory = this._componentFactoryResolver.resolveComponentFactory(ReactConnectorComponent);
			const componentComponentRef = componentFactory.create(this._injector);
			this._componentRef = componentComponentRef.instance;
			this._componentRef.reactComponentRef = this.reactConnectorComponent;
			this._componentRef.props = this.reactProps || undefined;
			this._componentRef.events = this.reactEvents || undefined;
			this._componentRef.classContainer = this.reactClassContainer || undefined;
			this._viewContainerRef.insert(componentComponentRef.hostView);
		} else {
			console.error('Invalid react component ref:', this.reactConnectorComponent);
		}
	}

	_updateComponent() {
		this._componentRef.props = this.reactProps || undefined;
		this._componentRef.events = this.reactEvents || undefined;
		this._componentRef.classContainer = this.reactClassContainer || undefined;
		this._componentRef.render();
	}

}
