
casper.test.begin('Go To localhost without Wait', function suite(test) {
    casper.start("http://localhost/e2edemo", function () {
        casper.waitForSelector("div[class=jumbotron]", function () {
            test.assertTitle("Home Page - My ASP.NET Application", "Login Title is OK!");
            test.assertExists('a[id=loginLink]', "We have the login link");

            this.click('a[id=loginLink]');


        });
    });

    casper.then(function login() {

        casper.waitForSelector("section[id=loginForm]", function () {
            casper.waitForSelector("form.js-loginForm", function () {
                this.fillSelectors('form.js-loginForm', {
                    'input[name=Email]': 'admin@admin.com',
                    'input[name=Password]': '!QAZ2wsx'
                }, true);
            })
        });

    });

    casper.then(function checkLogin() {

        casper.waitForSelector("a[id=logoutLink]", function () {
            test.assertExists('a[id=logoutLink]', "We have loggedin!");
        })
    });

    casper.run(function () {
        test.done();
    });
});
