Why angular?
- Its a framework [browser/mobile]

- It is a modular framework
	- what is modular:
		- divide or slice your prog
		- pick only the slice you need
		
- Performance

- Component architecture
	- Web component development is bundle of below 3 layers:
		- HTML
		- CSS
		- Javascript
	
- Extending the vocab of HTML

- You can build a SPA(Single page application) in angular

- Rich built in data binding capabilities which includes
	- One way
		- [Source to destination]/[Destination to source]
	- Two way

- Built in directives
	- directive is nothing but custom attributes for html tags (directives
	- angular also provides built in custom elements
	
- Data transformation
	- dynamic data transformation eg: if I select India as country then it should show currency in INR, etc
	- Pipes : this is used for data transformation
	
- Forms
	- template forms (simple forms where validation are done on UI)
	- reactive forms (forms where validation are done on model)
	
- Dynamic/JIT(just in time) compilation and AoT compilation
	- Do the changes in development and the compilation happens at client side then its Dynamic compilation (preferred in development mode, as compilation is done while dev simultaneously)
	- Do the changes, build a package, test it and deploy then it is called AoT (ahead of time) compilation (also called as pre compilation of application and is prefered in prod) --> performance is more better as it is tested

- HTPP module

- Rich animations

- Eager loading vs Lazy loading

- Routing

- Language support for angular application development
	- you can develope angular using 4 different languages
		- ES5
		- ECMA2015
		- Typescript
		- Dart

- Test ready code: Karma (test runner by google) / Jasmine (framework)
	- Jasmine functions:
		- Describe It

- Changes Detection cycle - is a process which is uni-directional

- Guidelines for Angular are available and Angular tells you what and why a particular thing is to be used. Refer : https://angular.io/guide/styleguide#style-guide

- Di capabilities (Dependency injection)

****************************************************************Day 1**********************************************************

Angular Notes:
Angular starts with :
1. ngModule: (container)
	- Manifest
	- Root module
	- contains lots of things
	- list initially is empty, hence we need to register the components and modules
		
		
Demo project: commands (angular version log -- google)
- npm init
- npm install --save ---> required for production
- npm install --save-dev ---> required for production

***Local Setup of modules/polyfills
npm install --save @angular/common@5.2.10 @angular/compiler@5.2.10 @angular/core@5.2.10 @angular/platform-browser@5.2.10 @angular/platform-browser-dynamic@5.2.10 rxjs@5.5.2 core-js zone.js

dev modules
npm install --save-dev @types/node angular-router-loader angular2-template-loader awesome-typescript-loader@3.3.0 css-loader extract-text-webpack-plugin@3.0.2 file-loader html-loader html-webpack-plugin@2.30.1 null-loader raw-loader rimraf style-loader to-string-loader typescript webpack@3.8.1 webpack-dev-server@2.9.4 webpack-merge@4.1.1

npm install --save jquery bootstrap popper.js

https://jsonplaceholder.typicode.com/

https://docs.emmet.io/cheat-sheet/

************assignment**********
- Create a model in events feature (refer camera image)
- create 2 components
	- events list 
	- event details
	(create a parent child relationship and display the event details on the click of the show details button show event details for 4 members:
		code, name, startdate & fees)
		
9665622460 : Pravin

****************************************************************Day 3**********************************************************
MongoDB: 
1. testing the port of the mongo DB : cmd "mongod"
2. https://getbootstrap.com : to get the animations etc.

PIPES:
1. user defined
2. inbuilt
