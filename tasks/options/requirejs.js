module.exports = {
  dist: {
    options: {
      baseUrl: '<%= cfg.devDir %>/<%= cfg.jsDir %>',
      name: 'main',
      out: '<%= cfg.distDir %>/<%= cfg.jsDir %>/main.js',
      mainConfigFile: '<%= cfg.devDir %>/<%= cfg.jsDir %>/requireConfig.js',
      generateSourceMaps: false,
      optimize: 'uglify2',
      preserveLicenseComments: true
    }
  }
}
