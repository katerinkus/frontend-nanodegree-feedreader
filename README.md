Description
==
About
--
This project loads RSS feeds using Google API.

Tests
--
This project contains 7 tests using `Jasmine` library in the `feedreader.js file`

1. Existing: check if RSS feeds are defined.
2. Check if `url` contain links: defined and not empty.
3. Check if `names` contain content: defined and not empty.
4. Check whether the `slider-menu` is hidden by default on load. If so, the <body> will have `menu-hidden` class.
5. Check if click events trigger `slider-menu` to appear. `icon-list` is the button triggering the toggle event.
6. Check whether one entry was loaded. This was done asynchronously because of Ajax requests. This test checks if the content length (`.entry`) inside the feed is greater then zero.
7. Check if the feed is changed after the `loadFeed()` runs. This test is also asynchronous. It checks if headers of first articles from different feeds match. If so, the feed has not been changed.

Installation
--

Clone the repository and run `index.html`. Tests will appear at the bottom.
