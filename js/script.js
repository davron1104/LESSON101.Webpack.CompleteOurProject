"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider'),
        timer = require('./modules/timer'),
        calc = require('./modules/calc'),
        cards = require('./modules/cards');

    tabs();
    modal();
    forms();
    slider();
    timer();
    calc();
    cards();
});