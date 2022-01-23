# maker

maker is a general purpose text file templating engine. Use it to create text files programmatically.

Installation
```
npm install maker
```

maker scans a directory for a collection of templates, and allows you to select and fill out those templates as needed. 

Here's an example template, lets say we save it as 'myTemplate.tpl'
```JavaScript
//////////////////////////////////////////////////////////////////////////
// ~~comment~~
function ~~functionName~~( ~~arguments~~ ) {
	~~contents~~
} // end ~~functionName~~()
```
The template is a copy of the code you're trying to output with the variables and custom names replaced with template strings. The default separation string is ~~, but it can be changed to anything by using the optional argument to the maker constructor.

Here's a basic usage example
```JavaScript
var maker = require("maker").createMaker();

// Load all template files (.tpl) within some directory
maker.loadTemplateDir( "./templates", function( templates ) {

	// Grab a copy of the templates we want to use
	var myTemplate = maker.getTemplate( "myTemplate" ),
		myOtherTemplate = maker.getTemplate( "myOtherTemplate" );

	// Fill out our templates with contents
	myTemplate.comment = "comment stuff";
	myTemplate.functionName = "SomeFunction";
	myTemplate.arguments = "";
	myTemplate.contents = "console.log('test');";

	myOtherTemplate.someThing = "someOtherThing";

	// Create an array of templates in the order that 
	// we want them to appear in the file
	fileTemplates = [];
	fileTemplates.push( myTemplate );
	fileTemplates.push( templates["myOtherTemplate"] );

	// Write the file
	maker.makeFile( "./testOutput.js", fileTemplates );
}
```

Ignoring the unspecified template 'myOtherTemplate', This script would render myTemplate.tpl as the following

```JavaScript
//////////////////////////////////////////////////////////////////////////
// comment stuff
function SomeFunction() {
	console.log('test');
} // end SomeFunction()
```
