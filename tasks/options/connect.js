module.exports = {

  rules: [
    {from: '^/(stylesheets/.*)$', to: '/<%= cfg.devDir %>/$1'},
    {from: '^/(images/.*)$', to: '/<%= cfg.devDir %>/$1'},
    {from: '^/(fonts/.*)$', to: '/<%= cfg.devDir %>/$1'},
    {from: '^/(javascripts/.*)$', to: '/<%= cfg.devDir %>/$1'},
    {from: '^/(bower_components/.*)$', to: '/$1'},
    {from: '^/(.*)$', to: '/<%= cfg.devDir %>/index.html'}
  ],

  server: {
    options: {
      useAvailablePort: true,
      appName: 'open', // name of the app that opens, ie: open, start, xdg-open,
      middleware: function (connect, options) {
        if (!Array.isArray(options.base)) {
          options.base = [options.base];
        }

        // Setup the proxy
        var middlewares = [
          //require('grunt-connect-proxy/lib/utils').proxyRequest,
          require('grunt-connect-rewrite/lib/utils').rewriteRequest
        ];


        // Serve static files
        options.base.forEach(function(base) {
         middlewares.push(connect.static(base));
        });

        // Make directory browse-able
        var directory = options.directory || options.base[options.base.length - 1];
        middlewares.push(connect.directory(directory));

        return middlewares;
      }
    }
  }

  /*
  server: {
    options: {
      port: 9000,
      base: ['<%= cfg.devDir %>', '.']
    }
  }
  */
}
