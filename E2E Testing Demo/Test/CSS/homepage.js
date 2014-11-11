/*
	Require and initialise PhantomCSS module
	Paths are relative to CasperJs directory
*/
var phantomcss = require('./../phantomcss.js');

phantomcss.init({
    screenshotRoot: 'screenshots',
    failedComparisonsRoot: 'failures',
    comparisonResultRoot: 'results',
    /*cleanupComparisonImages: true,
    onFail: function (test) { console.log(test.filename, test.mismatch); },

    onPass: function (test) { console.log(test.filename); },
    onNewImage: function () { console.log(test.filename); },

    onTimeout: function () { console.log(test.filename); },

    onComplete: function (allTests, noOfFails, noOfErrors) {
        allTests.forEach(function (test) {
            if (test.fail) {
                console.log(test.filename, test.mismatch);
            }
        });
    },
    casper: specific_instance_of_casper,
	libraryRoot: '/phantomcss',
	fileNameGetter: function overide_file_naming(){},
	onPass: function passCallback(){},
	onFail: function failCallback(){},
	onTimeout: function timeoutCallback(){},
	onComplete: function completeCallback(){},
	hideElements: '#thing.selector',
	addLabelToFailedImage: true,
	outputSettings: {
		errorColor: {
			red: 255,
			green: 255,
			blue: 0
		},
		errorType: 'movement',
		transparency: 0.3
	}*/
});

/*
	The test scenario
*/

casper.test.begin('Go To local website', function (test) {
    casper.start("http://localhost/e2edemo/");

    casper.viewport(1024, 768);


    casper.then(function () {
        casper.waitForSelector(".testcss", function () {
            phantomcss.screenshot('.testcss', 2000, '', 'row-column');
        });
    });

    casper.then(function () {
        casper.waitForSelector(".jumbotron", function () {
            phantomcss.screenshot('.jumbotron', 2000, '', 'page header');
        });
    });

    casper.then(function now_check_the_screenshots() {
        // compare screenshots
        phantomcss.compareAll();
    });

    casper.run(function () {
        test.done();
    });

    /*
    Casper runs tests
    */
    casper.run(function () {
        console.log('\nTHE END.');
        phantom.exit(phantomcss.getExitStatus());
    });

});