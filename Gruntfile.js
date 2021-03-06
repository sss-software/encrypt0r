/* eslint-disable @typescript-eslint/no-var-requires */
(function () {
  'use strict';

  module.exports = function (grunt) {
    const sass = require('node-sass');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      sass: {
        options: {
          implementation: sass,
          style: 'compressed',
        },
        dist: {
          files: {
            'dist/ui/css/app.css': 'scss/app.scss',
          },
        },
      },
      cssmin: {
        options: {
          sourceMap: true,
        },
        target: {
          files: {
            'dist/ui/css/app.min.css': ['dist/ui/css/app.css'],
          },
        },
      },
      watch: {
        options: {
          nospawn: true,
        },
        css: {
          files: 'scss/**/*.scss',
          tasks: ['sass', 'cssmin'],
        },
      },
    });

    grunt.registerTask('build', ['sass', 'cssmin']);
  };
})();
