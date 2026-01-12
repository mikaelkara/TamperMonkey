// ==UserScript==
// @name         Apple OAuth Auto Continue
// @namespace    https://appleid.apple.com/
// @version      1.0
// @description  Apple OAuth ekranında otomatik Continue / Devam Et tıklaması
// @match        https://appleid.apple.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const clickContinue = () => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const target = buttons.find(btn =>
            btn.innerText.trim().toLowerCase().includes('continue') ||
            btn.innerText.trim().toLowerCase().includes('devam')
        );

        if (target && !target.dataset.clicked) {
            target.dataset.clicked = 'true';
            target.click();
            console.log('🍎 Apple OAuth: Continue tıklandı');
        }
    };

    const observer = new MutationObserver(clickContinue);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('load', clickContinue);
})();
