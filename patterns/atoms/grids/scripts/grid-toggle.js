/* ==========================================================================
   GRID-TOGGLE.JS
   ========================================================================== */
/**
 * A script for automatically showing the .grid--overlay and automatically 
 * generating the number of grid columns.
 *
 * No jQuery is necessary for this module to work properly.
 */


document.addEventListener("DOMContentLoaded", function(){
    
    var body= document.querySelector('body');
    var column = "<div class='grid__column grid__column--1 grid--overlay__column'><div class='cell grid--overlay__cell'></div></div>";
    var overlay = "<div class='grid--overlay'><div class='grid'><div class='grid__container'></div></div></div>";


    /**
     * JS Plugin: Check to see if an element has a certain class
     */
    function hasClass(elem, className){
        return new RegExp(' ' + className + '' ).test(' ' + elem.className + ' ');
    }

    /**
     * JS Plugin: Remove a class from an element
     */
    function removeClass(elem, className){
        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
        elem.className = elem.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g,"");
    }


    /* Append the overlay to the body element */
    body.innerHTML+= overlay;
    overlay = document.querySelector('.grid--overlay');
    grid__container = overlay.children[0].children[0];
    

    /*
     * You can’t use parseInt on a variable so we need to trick JS into thinking
     * this is a number instead of a string by using a regex and removing the quotes.
     * 
     * 1.For some reason Firefox encloses pseudo content with "" instead of '' so we have 
     * to use this function twice in order to replace both dumb and smart quotes. 
     */
    var columns_count = getComputedStyle(body, ':after').content;
    yourstring = columns_count.replace(/'/g, "");
    yourstring = yourstring.replace(/"/g, ""); /* [1] */
    

    /* Loop over the number of columns in body pseudo content and append columns to grid container */
    for (var i= 1; i <= yourstring; i++) {
        grid__container.insertAdjacentHTML('beforeend', column);
    }

    /**
     * Bind events to the G key so that when user clicks it the grid overlay becomes active
     */
    
    document.onkeydown = checkKey;

    function checkKey(e){
        e = e || window.event;

        /* Once the G key is toggled add the grid overlay */
        if (e.keyCode == '71' && hasClass(body, 'grid--overlay--active') == false) {
            body.classList.add('grid--overlay--active');
        } 
        /* If the G key has been pressed but the class is already attached, remove the class */
        else if (e.keyCode == '71' && hasClass(body, 'grid--overlay--active')) {
            body.classList.remove('grid--overlay--active');
        }
    }
}, false);

