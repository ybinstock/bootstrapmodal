module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['/**/*.js'],
        dest: 'dist/built.js'
      }
    },
    concat_css: {
      options: {
        // Task-specific options go here.
      },
      all: {
        src: ["/**/*.css"],
        dest: "styles.css"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-concat-css');

};