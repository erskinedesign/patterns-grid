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





    /**
     * Depending on number of columns attached to the pseudo element, create divs with columns.
     */


    
    /* Add the overlay */
    body.innerHTML+= overlay;
    overlay = document.querySelector('.grid--overlay');

    grid__container = overlay.children[0].children[0];
    






    /* Find the number of columns from the body, build them and append to grid container */

    var columns_count = getComputedStyle(body, ':after').content;
    yourstring = columns_count.replace(/'/g, "");


    for (i= 1; i <= yourstring; i++) {
        
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

