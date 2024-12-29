// ==UserScript==
// @name        PCPP Sort by Price
// @namespace   Violentmonkey Scripts
// @match       https://pcpartpicker.com/*
// @grant       none
// @version     1.0
// @author      Vincent Zouras
// @description 12/28/2024
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function() { // execute on load
        const priceSortButton = document.querySelector('.th--sortable.th__price'); // locate "price" filter
        if (priceSortButton) {
            if (priceSortButton.classList.contains('th--unsorted')){ // only execute if unsorted, not sorted
				const mousedownEvent = new MouseEvent('mousedown', {bubbles: true});
                const mouseupEvent = new MouseEvent('mouseup', {bubbles: true});
                priceSortButton.dispatchEvent(mousedownEvent);
                priceSortButton.dispatchEvent(mouseupEvent);
            }
        }
    });
})(); // Immediately Invoked Function Expression (IIFE)
