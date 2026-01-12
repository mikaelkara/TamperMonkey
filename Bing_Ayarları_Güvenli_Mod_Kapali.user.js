// ==UserScript==
// @name         Bing Settings Enforcer (EN-US + SafeSearch Off)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Forces Bing search to use English, US region, and disables SafeSearch
// @match        https://www.bing.com/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const enforceSettings = () => {
        const url = new URL(window.location.href);
        let changed = false;

        // Dil: İngilizce
        if (url.searchParams.get('setlang') !== 'en') {
            url.searchParams.set('setlang', 'en');
            changed = true;
        }

        // Ülke: ABD
        if (url.searchParams.get('cc') !== 'US') {
            url.searchParams.set('cc', 'US');
            changed = true;
        }

        // Güvenli Arama: Kapalı
        if (url.searchParams.get('safeSearch') !== 'off') {
            url.searchParams.set('safeSearch', 'off');
            changed = true;
        }

        if (changed) {
            window.location.href = url.toString();
        }
    };

    window.addEventListener('load', enforceSettings);
})();
