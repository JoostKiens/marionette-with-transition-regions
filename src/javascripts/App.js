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
      el: '#js-region-main-content'
    });

    App.addInitializer(function () {
      App.router = new AppRouter({ 'region': App.regionMainContent });
      Backbone.history.start({ pushState: true });
      routeInternalLinks();
    });

    App.addInitializer(function () {
      // These "live" throughout the entire application's lifecycle
      // so no need to unbind events
      App.regionMainNav.show(new MainNav());
    });

    return App;
  };
});
