module.exports = function (grunt){

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    options: {
      devRoot: 'dev',
      webRoot: 'www'
    },

    connect: {
      server: {
        options: {
          livereload: true,
          hostname: '127.0.0.1',
          port: 9000,
          base: '<%= options.webRoot %>/'
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      jade: {
        files: ['<%= options.devRoot %>/jade/**/*.jade'],
        tasks: ['jade']
      },
      js: {
        files: ['<%= options.devRoot %>/js/**/*.js'],
        tasks: ['concat']
      },
      sass: {
        files: ['<%= options.devRoot %>/sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    },


    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: [{
          cwd: '<%= options.devRoot %>/jade',
          src: '*.jade',
          dest: '<%= options.webRoot %>',
          ext: '.html',
          expand: true
        }]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          '<%= options.webRoot %>/css/bundle.min.css': '<%= options.devRoot %>/sass/main.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        expand: true,
        flatten: true,
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      all: {
        '<%= options.webRoot %>/css/bundle.min.css': '<%= options.webRoot %>/css/bundle.min.css'
      }
    },

    concat: {
      js: {
        src: ['<%= options.devRoot %>/js/libs/**/*.js', '<%= options.devRoot %>/js/src/**/*.js', '<%= options.devRoot %>/js/*.js'],
        dest: '<%= options.webRoot %>/js/app.js'
      }
    },

    uglify: {
      js: {
        files: {
          '<%= options.webRoot %>/js/app.min.js': ['<%= options.devRoot %>/js/libs/**/*.js', '<%= options.devRoot %>/js/src/**/*.js']
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('build', ['sass', 'autoprefixer', 'uglify']);
}