// ==UserScript==
// @name         Auto Profile Boop
// @namespace    https://github.com/FoldMorePaper/Monkey-Userscripts
// @version      0.1
// @license      MIT
// @author       foldmorepaper
// @description  auto-boop (blog pages)!
// @match        https://*.tumblr.com/*
// @exclude      https://www.tumblr.com/dashboard
// @grant        none
// ==/UserScript==

(() => {
    function boop(selector){
        selector.click(); //start boop
        setTimeout(() => {
            document.querySelector("button[aria-label=boop]").click(); //confirm boop after waiting 2000ms
        }, "2000");
    }
    function contains(selector, text) {
        var elements = document.querySelectorAll(selector);
        return Array.prototype.filter.call(elements, function(element){
            return RegExp(text).test(element.textContent);
        });
    }
    (function fn(){
        var boopButton = contains('span.EvhBA', /^Boop$/)[0];
        boop(boopButton);
        console.log("boop!");
        setTimeout(fn, 3000)
    })()
})();
