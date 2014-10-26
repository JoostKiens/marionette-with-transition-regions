require([
  './App'
], function (
  App) {

  'use strict';

  // See:
  // http://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/
  // Marionette views have the destroy method, which does all of this anywayz
  // Do we ever need this?
  Backbone.View.prototype.close = function () {
    this.remove();
    this.unbind();
    if (this.onClose){
      this.onClose();
    }
  };

  $(function () {
    /* jshint newcap:false */
    window.App = App();
    window.App.start();
  });
});
