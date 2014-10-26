module.exports = {
  requirejs: {
    files: {
      '<%= cfg.distDir %>/<%= cfg.jsDir %>/require.min.js': ['bower_components/requirejs/require.js'],
      '<%= cfg.distDir %>/<%= cfg.jsDir %>/requireConfig.min.js': ['<%= cfg.devDir %>/<%= cfg.jsDir %>/requireConfig.js']
    }
  }
}
