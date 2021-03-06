# Ontimize Web Dynamicform Builder

Ontimize Web Dynamicform Builder is a web form builder using the [Ontimize Web Dynamic Form](https://github.com/OntimizeWeb/ontimize-web-ngx-dynamicform).

* [Github repository](#github)
* [Installation](#installation)
* [Usage](#usage)
* [Example](#example)

## Github
Ontimize Web Dynamic Form Builder module is stored in [github](https://github.com/OntimizeWeb/ontimize-web-ngx-dynamicform-builder) where you can also see/add todos, bugs or feature requests in the [issues](https://github.com/OntimizeWeb/ontimize-web-ngx-dynamicform-builder/issues) section.


## Installation

```bash
  npm install ontimize-web-ngx-dynamicform-builder --save
```

## Usage

### Configure angular-cli.json dependencies

You must add the module styles definition in your '*.angular-cli.json*' file styles array:

```bash
...
"styles": [
  ...
  "../node_modules/ontimize-web-ngx-dynamicform-builder/styles.scss",
  ....
],
...
```

### Import in an application module

Include the DynamicFormBuilderModule into your app in the module where you want to use it.

```bash
...
import { DynamicFormBuilderModule } from 'ontimize-web-ngx-dynamicform-builder';
...

@NgModule({
  imports: [
    DynamicFormBuilderModule,
    /* other imports */
  ],
  declarations: ...
  providers: ...
})
export class ExampleModule { }
```

## Example

Run live demo <a href="https://ontimizeweb.github.io/ontimize-web-ngx-dynamicform-example/" target="_blank" title="live demo"> here</a>.