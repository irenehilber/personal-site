module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: 'last 2 versions'})
        ]
      },
      dist: {
        src: 'web/css/main.css'
      }
    },
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
          {flatten: true, expand: true, src: ['src/assets/*'], dest: 'web/assets/'},
          {flatten: true, expand: true, src: ['bower_components/smooth-scroll/dist/js/*.js'], dest: 'web/js/', filter: 'isFile'},
          {flatten: true, expand: true, src: ['bower_components/jquery/dist/*.js'], dest: 'web/js/', filter: 'isFile'}
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
      assets: {
        files: ['src/assets/**'],
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
        tasks: ['sass', 'postcss'],
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
            'web/js/*.js',
            'web/assets/**'
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
  grunt.loadNpmTasks('grunt-postcss');

  // Default task(s).
  grunt.registerTask('default', ['jade', 'sass', 'postcss', 'copy', 'browserSync', 'watch']);
  grunt.registerTask('prod', ['jade', 'sass', 'postcss', 'copy']);

};
