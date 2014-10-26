module.exports = {
  less: {
    files: '<%= cfg.devDir %>/<%= cfg.lessDir %>/**/*.less',
    tasks: ['less:development']
  },
  js: {
    files: ['<%= cfg.devDir %>/<%= cfg.jsDir %>/**/*.js'],
    tasks: ['jshint']
  }
}
