// ==UserScript==
// @name         UnistreetsMiningActivator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Activates Every Mine Without Reloads
// @author       SomeDude
// @match        https://www.unistreets.com/mining.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.addEventListener("load", mineEverything, false);

    function mineEverything()
    {
        var cookieMonster = document.cookie;
        var numItems = $('.evens').length + $('.odds').length;

        if (!$("table").hasClass("table-gang")) {
            for (var i = 1; i < numItems; i++) {
                fetch("https://www.unistreets.com/mining.php?action=start&MID=" + i, {
                    "headers": {
                        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                        "accept-language": "en-US,en;q=0.9",
                        "cache-control": "max-age=0",
                        "content-type": "application/x-www-form-urlencoded",
                        "sec-fetch-dest": "document",
                        "sec-fetch-mode": "navigate",
                        "sec-fetch-site": "same-origin",
                        "sec-fetch-user": "?1",
                        "upgrade-insecure-requests": "1",
                        "cookie": cookieMonster
                    },
                    "referrer": "https://www.unistreets.com/mining.php",
                    "referrerPolicy": "no-referrer-when-downgrade",
                    "body": "Start=Start",
                    "method": "POST",
                    "mode": "cors"
                });
            
            }
        }
    }
})();