var maker = require("../maker").createMaker();

var testSourcePath = __dirname + "/test_module.js",
	testDestFolderPath = __dirname + "/output",	
	testFolderPath = __dirname + "/test_template_dir";

describe('#maker', function() {

	it('should templatize a file', function(done) {		
		var templateObj = maker.makeTemplate( testSourcePath );
		maker.makeFile( __dirname + "/output/output.js", [templateObj], function(err) {
			done(err);
		});
	});


	it('should templatize a file', function(done) {		
		var replacementMap = {
			testWord: "TestWord"
		};

		var contents = {
			testWord: "YAY"
		};

		maker.makeTemplatesFromDir( testFolderPath, testDestFolderPath, replacementMap, replacementMap, [], contents, function() {
			try { 
				var output = require( testDestFolderPath + "/replaceTest.js" );
			} catch( err ) {
				done(err);
			}

			if( output.first() != contents.testWord )
				done( "Failed to templatize raw string" );
			if( output.second() != "~" + contents.testWord )
				done( "Failed to templatize string with separation string before it" );
			if( output.third() != contents.testWord + "~" )
				done( "Failed to templatize string with separation string after it" );

			var shouldBe = "~" + contents.testWord + "~";

			if( output.fourth() != shouldBe )
				done( "Failed to templatize string with separation string on either side" );

			done();
		});
	});

});