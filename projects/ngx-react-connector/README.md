# NgxReactConnector

This library was generated for Angular 9+ apps.

This library is a connector that allows React components to be used in Angular applications easily.

## Demo

[Stackblitz](https://stackblitz.com/edit/ngx-react-connector)

## Installation instructions
Install `ngx-react-connector` from `npm`:
```bash
npm install ngx-react-connector

or

yarn add ngx-react-connector
```

Add needed package to NgModule imports:
```
import { ReactConnectorModule } from 'ngx-react-connector';

@NgModule({
  ...
  imports: [ReactConnectorModule,...]
  ...
})
```

## How to use
Use the directive in your template
```
<ng-container
    [reactConnectorComponent]="reactComponent"
    [reactProps]="reactProps"
    [reactEvents]="reactEvents"
    [reactClassContainer]="reactClassContainer">
</ng-container>
```

You can see this variables in the [Stackblitz](https://stackblitz.com/edit/ngx-react-connector) example.

## Extra elements
This module contains a service to easily update the properties. You can use like this:
```
import { ReactConnectorService } from 'ngx-react-connector';

export class AppComponent {
    ...
    reactProps = {text: 'Sample button'};

    constructor(private _rcService: ReactConnectorService) {}

    updateText(text: string) {
        this.reactProps = this._rcService.updateProps(this.reactProps, {text});
    }
    ...
}
```
