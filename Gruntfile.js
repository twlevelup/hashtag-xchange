"use strict";
module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    watch: {
      test: {
        files: ["lib/**/*.js", "test/**/*.js"],
        tasks: ["test"]
      }
    },
    simplemocha: {
      all: {
        src: ['test/**/*_test.js'],
        options: {
          timeout: 3000,
          ignoreLeaks: false,
          ui: 'bdd',
        }
      }
    },
    jshint: {
      options: pkg.jshintConfig,
      all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
    }
  });
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-simple-mocha");
  grunt.registerTask("default", ["watch"]);
  return grunt.registerTask("test", ["jshint","simplemocha"]);
};
