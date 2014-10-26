define([
  './templates',
  './MainNavItem'
], function (
  templates,
  MainNavItem) {

  'use strict';

  var mainNavItems = new Backbone.Collection([
    { path: '', title: 'Home' },
    { path: 'flap', title: 'Flap' }
  ]);

  return Marionette.CollectionView.extend({
    tagName: 'ul',

    className: 'main-nav',

    collection: mainNavItems,

    childView: MainNavItem,

    initialize: function () {
      console.log('Navigation');
    }
  });
});
