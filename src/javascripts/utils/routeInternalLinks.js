define(function () {

  'use strict';

  var _$document = $(window.document);

  function _isCrossDomain(href, domain) {
    /* jshint scripturl:true */
    return ((domain !== window.document.location.hostname) && (domain !== '')) ||
      (href !== undefined && href.lastIndexOf('mailto:', 0) === 0) ||
      (href !== undefined && href.lastIndexOf('javascript:', 0) === 0);
  }

  function _isHashLink(href) {
    return href.indexOf('#') === 0;
  }

  function routeInternalLinks() {
    var openLinkInTab = false;

    _$document.keydown(function(e) {
      if (e.ctrlKey || e.keyCode === 91) {
        openLinkInTab = true;
      }
    });

    _$document.keyup(function(e) {
      if (e.ctrlKey || e.keyCode === 91) {
        openLinkInTab = false;
      }
    });

    _$document.on('click', 'a', function(e) {
      var $link = $(this);
      var href = $link.attr('href');
      var domain = $link.prop('hostname');

      if (!openLinkInTab && !_isCrossDomain(href, domain) && !_isHashLink(href)) {
        e.preventDefault();
        Backbone.history.navigate(href, true);
      }

      // On click the anchor receives an active state
      // By blurring the element, the outline will disappear
      $link.blur();
    });
  }

  return routeInternalLinks;
});
