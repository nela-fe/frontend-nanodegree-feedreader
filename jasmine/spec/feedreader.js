$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
    });

    describe('The feed', function(){
        it('has a URL', function(){
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
                // console.log(feed.url);
            });
        });

        it('has a name', function(){
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
                // console.log(feed.name);
            });
        });
    });

    describe('The menu', function() {
        const pageBody = document.querySelector('body');

        it('is hidden by default', function() {
            expect(pageBody.classList.contains('menu-hidden')).toBe(true);
        });

        it('changes visibility when the menu icon is clicked', function() {
            let menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(pageBody.classList.contains('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(pageBody.classList.contains('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {  // like this?
                done()
            });
        });

        /*
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        /*
        when I check for a .entry element within the .feed container,
        the test will always turn true, as the .entry element is
        hard-coded in the html-file.
        So I wanted to check the length of the p-element instead,
        because I thought this would only be filled when a feed
        element is loaded.
        But even if I comment out the code between <p></p>, entries
        still contains "[object Object]", so this test also always
        turns out true. Seems there is no way to make the test fail.
         */


        it('has at least one entry', function() {
            let entries = $('.feed .entry p');
            // console.log("entries: "+entries);
            // console.log(entries.lenght);
            expect(entries.length > 0).toBe(true);
        });
    });

        describe('New Feed Selection', function() {
            let oldFeed;
            let newFeed;

            beforeEach(function(done) {
                loadFeed(0, function(){
                    oldFeed = document.querySelector('div.feed').innerHTML;
                    loadFeed(1, function(){
                        newFeed = document.querySelector('div.feed').innerHTML;
                        done();
                    });
                });
            });

            it('changes content when new feed is loaded', function() {
                expect(oldFeed).not.toBe(newFeed);
            });
        });
}());
