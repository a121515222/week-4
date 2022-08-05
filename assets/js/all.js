"use strict";

var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('.js-nav');
var headerlink = document.querySelectorAll('.js-nav li a');
var pagenation = document.querySelectorAll('.pagenation li');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburgerActive');
  nav.classList.toggle('navActive');
});
pagenation.forEach(function (item, index) {
  item.addEventListener('click', function (e) {
    var _this = this;

    e.preventDefault();

    if (index === 0 || index === pagenation.length - 1) {
      return;
    } else {
      pagenation.forEach(function (j, k) {
        if (Number(_this.firstChild.innerText) === k) {
          _this.classList.add('pagenationFocus');

          console.log('move');
        } else {
          console.log('test');
          j.classList.remove('pagenationFocus');
        }
      });
    }
  });
});
//# sourceMappingURL=all.js.map
