module.exports = {
  development: {
    options: {
      sourceMap: true
    },
    files: {
      '<%= cfg.devDir %>/<%= cfg.cssDir %>/main.css': '<%= cfg.devDir %>/<%= cfg.lessDir %>/main.less'
    }
  },

  dist: {
    options: {
      compress: true,
      yuicompress: true,
      optimization: 2
    },
    files: {
      '<%= cfg.distDir %>/<%= cfg.cssDir %>/main.css': '<%= cfg.devDir %>/<%= cfg.lessDir %>/main.less'
    }
  }
}
