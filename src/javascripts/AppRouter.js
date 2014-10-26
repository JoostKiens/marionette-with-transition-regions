define([
  './AppView',
  './modules/Home/Home',
  './modules/Flap/Flap'
], function (
  AppView,
  Home,
  Flap
) {
  'use strict';

  var AppRouter = Backbone.Router.extend({

    routes: {
      '': 'home',
      'flap': 'flap'
    },

    initialize: function (){
      this.appView = new AppView(App.regionMainContent);
    },

    home: function () {
      var homeView = new Home();
      this.appView.showView(homeView);
    },

    flap: function () {
      var flapView = new Flap();
      this.appView.showView(flapView);
    }

  });

  return AppRouter;
});
