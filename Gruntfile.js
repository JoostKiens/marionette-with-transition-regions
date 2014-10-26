module.exports = function(grunt) {

  function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });

    return object;
  }

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    cfg: grunt.file.readJSON('./tasks/config.json'),
    env: process.env
  };

  grunt.util._.extend(config, loadConfig('./tasks/options/'));
  grunt.initConfig(config);

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask(
    'default',
    'Keeps running while developing, providing a server & various watch tasks',
    ['less:development', 'configureRewriteRules:server', 'connect:server', 'watch']);

  grunt.registerTask(
    'dist',
    'Compiles, copies, optimizes files to be deployed',
    ['clean', 'copy', 'uglify', 'requirejs:dist', 'less:dist', 'imagemin']);
};
