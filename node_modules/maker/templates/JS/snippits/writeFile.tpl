// Write the file to disk
	fs.writeFile( path, fileContents, function(err) {
	    if(err) {
	        console.log( err );
	    } else {
	        console.log( "The file was saved!" );
	    }
	}); 