define(['App', './templates'], function (App, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.flap,

    tagName: 'section',

    className: 'page page-flap',

    _animationDuration: 1000,

    initialize: function () {
      console.log('flap');
      this._vwWidth = this._getVwWidth();
      this.transitionInCss = this._getTransitionInCss();

      // St vwWitdh again on resize event, throttle it or something
    },


    _getTransitionInCss: function () {
      return {
        position: 'absolute',
        left: this._vwWidth,
      }
    },

   // Do some jQuery stuff, then, once you're done, trigger 'animateIn' to let the region
    // know that you're done
    animateIn: function() {
      this.$el.velocity(
        { left: 0 },
        this._animationDuration, this,
        _.bind(this.trigger, this, 'animateIn')
      );
    },

    // Same as above, except this time we trigger 'animateOut'
    animateOut: function() {
      this.$el.velocity(
        { left: -this._vwWidth },
        this._animationDuration,
        _.bind(this.trigger, this, 'animateOut')
      );
    },

    _getVwWidth: function () {
      return $( window ).width();
    }
  });
});
