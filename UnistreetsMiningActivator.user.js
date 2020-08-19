// ==UserScript==
// @name         UnistreetsMiningActivator
// @description  Activates Every Mine Without Reloads
// @version      0.5
// @license      MIT
// @author       SomeDude
// @grant        none
// @namespace    http://tampermonkey.net/
// @updateURL    https://openuserjs.org/meta/SomeDude/UnistreetsMiningActivator.meta.js
// @match        https://www.unistreets.com/mining.php
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener("load", mineEverything, false);

    function mineEverything()
    {
        if (!$("table").hasClass("table-gang")) {
            var cookieMonster = document.cookie;
            var numItems = $('.evens').length + $('.odds').length;

            for (var i = 1; i <= numItems; i++) {
                if (!$("b").is("#timer-" + i)) {
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
                        "body": "Start=Start",
                        "method": "POST",
                        "mode": "cors"
                    });
                }
            }
            $('.general_btn').remove();
        }
    }
})();