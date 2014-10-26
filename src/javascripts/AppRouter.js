define([
  './modules/Home/Home',
  './modules/Flap/Flap'
], function (
  Home,
  Flap
) {
  'use strict';

  var AppRouter = Backbone.Router.extend({

    routes: {
      '': 'home',
      'flap': 'flap'
    },

    initialize: function (options) {
      this.region = options.region;
    },

    home: function () {
      var homeView = new Home();
      this.region.show(homeView);
    },

    flap: function () {
      var flapView = new Flap();
      this.region.show(flapView);
    }

  });

  return AppRouter;
});
