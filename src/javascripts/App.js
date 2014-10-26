define([
  './utils/routeInternalLinks',
  './AppRouter',
  './modules/MainNav/MainNav',
  'lib/marionette.transition-region'
], function (
  routeInternalLinks,
  AppRouter,
  MainNav) {

  'use strict';

  return function () {
    var App = new Marionette.Application();

    App.addRegions({
      regionMainHeader: '#js-region-main-header',
      regionMainNav: '#js-region-main-nav',
      regionMainFooter: '#js-region-main-footer'
    });

    App.regionMainContent = new Marionette.TransitionRegion({
      el: '#js-region-main-content',
      concurrentTransition: true
    });

    App.addInitializer(function () {
      App.router = new AppRouter({ 'region': App.regionMainContent });
      Backbone.history.start({ pushState: true });
      routeInternalLinks();
    });

    App.addInitializer(function () {

      // Repeat for nav & footer, if necessary
      App.regionMainNav.show(new MainNav());
    });

    return App;
  };
});
