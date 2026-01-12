// ==UserScript==
// @name         Google OAuth Devam Et Otomasyonu
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Google OAuth ekranında otomatik "Devam Et" tıklaması yapar
// @match        https://accounts.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const clickDevamEt = () => {
        const button = Array.from(document.querySelectorAll('button'))
            .find(btn => btn.innerText.trim() === 'Devam Et');
        if (button) {
            button.click();
            console.log('✅ Devam Et butonuna tıklandı.');
        }
    };

    const observer = new MutationObserver(() => clickDevamEt());
    observer.observe(document.body, { childList: true, subtree: true });

    // Sayfa yüklenince de kontrol et
    window.addEventListener('load', clickDevamEt);
})();
