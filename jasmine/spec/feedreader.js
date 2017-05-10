/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
         //Answer: The feed dissappears and I get 1 spec 1 fail. "1 spec, 1 failureSpec List | Failures RSS Feeds are defined Expected 0 not to be 0."

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('URLs are defined and not empty', function() {
             for (feed = 0; feed < allFeeds.length; feed++) {
                 //This line goes through each feed in the allFeeds object and checks if the url is defined
                 expect(allFeeds[feed].url.length).toBeDefined();
                 //This line goes though each feed in the allFeeds object and checks whether the URL length is zero. If it were zero, the URL would be empty.
                 expect(allFeeds[feed].url.length).not.toBe(0);
             }
         });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('names are defined and not empty', function() {
             for (feed = 0; feed < allFeeds.length; feed++) {
                 //This line goes through each feed in the allFeeds object and checks if the name is defined
                 expect(allFeeds[feed].name.length).toBeDefined();
                 //This line goes though each feed in the allFeeds object and checks whether the name length is zero. If it were zero, the name would be empty.
                 expect(allFeeds[feed].name.length).not.toBe(0);
             }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* Test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('slide menu is hidden', function() {
             //Check if <body> class is "menu-hidden"
             expect(document.body.classList).toContain("menu-hidden");
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */



    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

});

}());
