// ==UserScript==
// @name Old Reddit Redirect
// @version      0.1.1
// @description  redirects you to old.reddit.com
// @author       github.com/richkmls
// @match *://*.reddit.com/*
// @exclude /^https?://[a-z]{2}\.reddit\.com/*
// @exclude *out.reddit.com/*
// @exclude *://*.reddit.com/gallery/*
// @exclude *://*.reddit.com/media*
// @run-at document-start
// @grant        none
// ==/UserScript==

// Enforce strict mode for better code quality
'use strict';

// Declare constant for current URL
const currentUrl = window.location.href;

// Declare constant for old reddit URL
const oldRedditUrl = 'https://old.reddit.com/';

// Check if the current URL does not include old.reddit.com
if (!currentUrl.includes("old.reddit.com")) {

  // Use regex literal and constant for new URL
  const newUrl = currentUrl.replace(/^https?:\/\/(www\.)?reddit.com\//, oldRedditUrl);

  // Redirect to new URL without history entry
  window.location.replace(newUrl);
}
