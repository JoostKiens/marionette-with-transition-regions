define(function () {
  'use strict';

  // See:
  // http://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/
  function AppView (region) {
    this.showView = function (view) {
          /*
      if (this.currentView) {
      //  this.currentView.destroy();
      }
      */
      this.currentView = view;
      //this.currentView.render();

      //region.$el.html(this.currentView.el);
      region.show(this.currentView);
    };

    // Add methods for transitions
  }

  return AppView;
});
