/*global $, jQuery */
 
(function ($) {
    "use strict";

    $.fn.accordionPlugin = function () {
        var accordionSections = $(".collapsible"), i;

        for (i = 0; i < accordionSections.length; i += 1) {
            accordionSections[i].onclick = function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            };
        }

    };
}(jQuery));