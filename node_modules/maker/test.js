var maker = require("./maker").createMaker(),
	clone = require('clone');

maker.loadTemplateDir( "./templates", function( templates ) {
	// Grab the templates we want to use. We clone and create 
	// two copies of the function template, so that 
	// we can setup two functions 
	var functionT = maker.getTemplate( "function" ),
		secondFunctionT = maker.getTemplate( "function" ),
		thirdFunctionT = maker.getTemplate( "function" ),
		constructorT = maker.getTemplate( "constructor" ),
		writeFile = maker.getTemplate( "writeFile" );

	// Some constants
	var className = "TestClass";

	// Fill out our templates
	constructorT.comment = "This is a test constructor";
	constructorT.className = className;
	constructorT.arguments = "woah, dude, sweet";
	constructorT.contents = "this.log = console.log;";

	functionT.comment = "This is a test function";
	functionT.className = className;
	functionT.arguments = "arg1, arg2, arg3, arg4";
	functionT.functionName = "test";
	functionT.functionBody = "this.log('So much win.');";

	secondFunctionT.comment = "This is another test function!!";
	secondFunctionT.className = className;
	secondFunctionT.arguments = "yup, itWorks";
	secondFunctionT.functionName = "bestFunction";
	secondFunctionT.functionBody = "this.log('This is a generated class');";

	thirdFunctionT.comment = "Write da file";
	thirdFunctionT.className = className;
	thirdFunctionT.arguments = "path, fileContents";
	thirdFunctionT.functionName = "writeFile";
	thirdFunctionT.functionBody = writeFile;

	// Create an array of templates in the order that we want them to appear in the file
	fileTemplates = [];
	fileTemplates.push( constructorT );
	fileTemplates.push( functionT );
	fileTemplates.push( secondFunctionT );
	fileTemplates.push( thirdFunctionT );

	// Write the file
	maker.makeFile( "./testOutput.js", fileTemplates );
});