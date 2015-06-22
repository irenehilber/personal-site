module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: [ {
          cwd: "src/html",
          src: "**/*.jade",
          dest: "web/html",
          expand: true,
          ext: ".html"
        } ]
      }
    },
    sass: {
      files:
        {
            expand: true,
            cwd: 'src',
            src: ['**/*.scss'],
            dest: 'web',
            ext: '.css'
        }
    },
    copy: {
      main: {
        files: [
          {flatten: true, expand: true, src: ['src/**/*.js'], dest: 'web/js/'},
        ]
      }
    },
    watch: {
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['copy'],
        options: {
          spawn: false,
        }
      },
      html: {
        files: ['src/html/*.jade'],
        tasks: ['jade'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['src/css/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      }
    },
    browserSync: {
        bsFiles: {
          src : [
            'web/css/*.css',
            'web/html/*.html',
            'web/js/*.js'
          ]
        },
        options: {
          startPath: "/html/",
          watchTask: true,
          server: {
            baseDir: "./web/"
          }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['jade', 'sass', 'copy', 'browserSync', 'watch']);

};
