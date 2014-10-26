var svgo = require('imagemin-svgo');

module.exports = {
  options: {
    svgoPlugins: [{ removeViewBox: false }],
    use: [svgo()]
  },
  dynamic: {
    files: [{
      expand: true,
      cwd: '<%= cfg.devDir %>/<%= cfg.imgDir %>',
      src: ['**/*.{png,jpg,gif,svg}'],
      dest: '<%= cfg.distDir %>/<%= cfg.imgDir %>'
    }]
  }
}
