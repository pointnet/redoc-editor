# redoc-editor

> Edit and share ReDoc settings/theme

![redoc-editor demo](https://raw.githubusercontent.com/pointnet/redoc-editor/master/.github/overview.png)

## [Live demo](http://pointnet.github.io/redoc-editor/)

This project was bootstrapped with
* [redoc](https://github.com/Redocly/redoc) - OpenAPI/Swagger-generated API Reference Documentation
* [create-react-app](https://github.com/facebook/create-react-app) - Set up a modern web app by running one command
* [material-ui](https://github.com/mui-org/material-ui) - React components for faster and easier web development
* [immer](https://github.com/immerjs/immer) - Create the next immutable state by mutating the current one
* [react-color](https://github.com/casesandberg/react-color) - Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter & more
* [react-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars) - React scrollbars component
* [react-highlight](https://github.com/akiran/react-highlight) - React component for syntax highlighting
* [react-router-dom](https://github.com/ReactTraining/react-router) - Declarative routing for React
* [yup](https://github.com/jquense/yup) - Dead simple Object schema validation

This project use a modified version of the [Petstore](https://redocly.github.io/redoc/openapi.yaml)
OpenAPI definition from [ReDoc](https://github.com/Redocly/redoc).

This was done to remove the `Authentication` block from the `info.description`
definition so we can see the effect of the `noAutoAuth` option.

## Todo

`fontFamily` picker, right now you can't edit
* `typography.fontFamily`
* `typography.headings.fontFamily`
* `typography.code.fontFamily`

## Contributing

We'd greatly appreciate any [contribution](/.github/CONTRIBUTING.md) you make.<br />
For bugs and feature requests, [please create an issue](../../issues/new).<br />
Pull requests and stars are always welcome. :)

## License

This project is licensed under the terms of the [MIT license](/LICENSE).