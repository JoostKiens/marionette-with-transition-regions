define(['./templates'], function (templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.mainNavItem,

    tagName: 'li',

    className: 'main-nav-item'
  });
});
