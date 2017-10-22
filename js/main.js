'use strict';

/*After loaded whole document */

document.addEventListener("DOMContentLoaded", function () {
    addEventListeners();

});

/*Function | Add eventlistner to whole container - ul */

function addEventListeners() {
    var navItem = document.getElementById("nav-ul-menu");
    navItem.addEventListener('click', activateItem);
}


/* Function | Find and activate element clicked by user */

function activateItem(event) {

    var arrayOfNavItem = document.getElementById(event.target.id)
        .parentNode
        .parentNode
        .children;

    if (event.target.id === 'search') {
        if (document.getElementById('search-form-off')) {
            document.getElementById('search-form-off')
                .id = 'search-form-on';
        }


    }
    if (event.target.id === 'cross') {
        document.getElementById('search-form-on').id = 'search-form-off';
    } else {
        for (var i in arrayOfNavItem) {
            if (arrayOfNavItem[i].classList) {
                arrayOfNavItem[i]
                    .classList
                    .remove('active');
            }

        }

        document.getElementById(event.target.id)
            .parentNode
            .classList
            .add('active');
    }
}