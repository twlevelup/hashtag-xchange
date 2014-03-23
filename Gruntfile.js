"use strict";
module.exports = function(grunt) {
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
    }
  });
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-simple-mocha");
  grunt.registerTask("default", ["watch"]);
  return grunt.registerTask("test", ["simplemocha"]);
};