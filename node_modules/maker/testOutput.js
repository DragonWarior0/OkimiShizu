//////////////////////////////////////////////////////////////////////////
// This is a test constructor
function TestClass( woah, dude, sweet ) {
	this.log = console.log;
} // end TestClass()


//////////////////////////////////////////////////////////////////////////
// This is a test function
TestClass.prototype.test( arg1, arg2, arg3, arg4 ) {
	this.log('So much win.');
} // end test()


//////////////////////////////////////////////////////////////////////////
// This is another test function!!
TestClass.prototype.bestFunction( yup, itWorks ) {
	this.log('This is a generated class');
} // end bestFunction()


//////////////////////////////////////////////////////////////////////////
// Write da file
TestClass.prototype.writeFile( path, fileContents ) {
	// Write the file to disk
	fs.writeFile( path, fileContents, function(err) {
	    if(err) {
	        console.log( err );
	    } else {
	        console.log( "The file was saved!" );
	    }
	}); 
} // end writeFile()


