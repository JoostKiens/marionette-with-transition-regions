define(['App', './templates'], function (App, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.flap,

    tagName: 'section',

    className: 'page page-flap',

    initialize: function () {
      console.log('flap');
    },

    transitionInCss: {
      position: 'absolute',
      left: 500,
    },

   // Do some jQuery stuff, then, once you're done, trigger 'animateIn' to let the region
    // know that you're done
    animateIn: function() {
      this.$el.velocity(
        { left: 0 },
        1000,
        _.bind(this.trigger, this, 'animateIn')
      );
    },

    // Same as above, except this time we trigger 'animateOut'
    animateOut: function() {
      this.$el.velocity(
        { left: -500 },
        1000,
        _.bind(this.trigger, this, 'animateOut')
      );
    }
  });
});
