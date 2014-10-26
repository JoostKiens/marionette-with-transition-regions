/* jshint unused:false */

var require = {
  paths: {
    'underscore': '../../bower_components/underscore/underscore',
    'jquery': '../../bower_components/jquery/dist/jquery',
    'backbone': '../../bower_components/backbone/backbone',
    'backbone.wreqr': '../../bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.babysitter': '../../bower_components/backbone.babysitter/lib/backbone.babysitter',
    'marionette': '../../bower_components/marionette/lib/core/backbone.marionette',
    'velocity': '../../bower_components/velocity/velocity',
    'velocityUi': '../../bower_components/velocity/velocity.ui',
    'tpl': '../../bower_components/tpl/tpl',
    'text': '../../bower_components/requirejs-text/text'
  },

  map: {
    '*': {
      '_': 'underscore',
      '$': 'jquery'
    }
  },

  shim:  {
    'backbone': {
      exports: 'Backbone',
      deps: ['$', '_']
    },

    'velocity': {
      deps: [ 'jquery' ]
    },

    'velocityUi': {
      deps: [ 'velocity' ]
    }
  },

  deps: ['backbone', 'marionette', 'velocity'],

  callback: function (Backbone, Marionette) {
    'use strict';

    // Velocity is added to the jquery/$ scope
    window.Backbone = Backbone;
    window.Marionette = Marionette;
  },

  'waitSeconds': 20
};
