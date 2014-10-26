define(['App', './templates'], function (App, templates) {

  'use strict';

  return Marionette.ItemView.extend({
    template: templates.home,

    tagName: 'section',

    className: 'page page-home',

    initialize: function () {
      console.log('home');
    },

    // Do some jQuery stuff, then, once you're done, trigger 'animateIn' to let the region
    // know that you're done
    animateIn: function() {
      this.$el.animate(
        { opacity: 1 },
        1000,
        _.bind(this.trigger, this, 'animateIn')
      );
    },

    // Same as above, except this time we trigger 'animateOut'
    animateOut: function() {
      this.$el.animate(
        { opacity: 1 },
        1000,
        _.bind(this.trigger, this, 'animateOut')
      );
    }
  });
});
