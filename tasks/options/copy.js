module.exports = {
  html: {
    src: '<%= cfg.devDir %>/index.html',
    dest: '<%= cfg.distDir %>/index.html',
    options: {
      process: function (content, srcpath) {
        return content
          .replace(/requireConfig\.js/gi, "javascripts/requireConfig.min.js")
          .replace(/bower_components\/requirejs\/require.\js/gi, "javascripts/require.min.js");
      }
    }
  }
}
