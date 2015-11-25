'use strict';

var searchBox = document.getElementById('search');

searchBox.onkeyup = debounce(function(event) {
    console.log('searching .. ' + searchBox.value);
  },
  1000
);
