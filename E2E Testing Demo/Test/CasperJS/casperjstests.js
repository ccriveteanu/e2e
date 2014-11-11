
casper.test.begin('Go To localhost without Wait', 2, function suite(test) {
    casper.start("https://www.boardprospects.com/login", function () {
        casper.waitForSelector("div[class=login-form-main]", function () {
            test.assertTitle("Login | BoardProspects", "Login Title is OK!");
            test.assertExists('div[class=login-form-main]', "We have the login form");

            this.fillSelectors('form.banner-login-panel-main', {
                'input[name="email"]': 'catalin.criveteanu@equilobe.com',
                'input[name="password"]': '!QAZ2wsx'
            }, true);
        });
    });

    casper.run(function () {
        test.done();
    });
});
