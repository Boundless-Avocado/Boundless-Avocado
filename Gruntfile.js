module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
<<<<<<< HEAD
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server/server.js'
      }
    },

    jshint: {
      files: [
        'Gruntfile.js',
        'client/**/*.js',
        'server/**/*.js'
      ],
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
          'client/lib/**/*.js'
        ]
      }
    },

    // cssmin: {
    // },

    // watch: {
    //   scripts: {
    //     files: [
    //       'client/**/*.js',
    //       'server/**/*.js',
    //     ],
    //     tasks: [
    //     ]
    //   },
    //   css: {
    //     files: 'public/*.css',
    //     tasks: ['cssmin']
    //   }
    // },

    shell: {
      prodServer: {
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
=======
      options:{
        seperator:';'
      },
      dist: {
          src: [
              'public/client/*.js'
          ],
          dest: 'public/dist/production.js'
      }
    },

    // mochaTest: {
    //   test: {
    //     options: {
    //       reporter: 'spec'
    //     },
    //     src: ['test/**/*.js']
    //   }
    // },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    uglify: {
      build: {
          src: 'public/dist/production.js',
          dest: 'public/dist/production.min.js'
      }
    },

    // jshint: {
    //   files: [
    //     'public/dist/production.js'
    //     // Add filespec list here
    //   ],
    //   options: {
    //     force: 'true',
    //     jshintrc: '.jshintrc',
    //     ignores: [
    //       'public/lib/**/*.js',
    //       'public/dist/**/*.js'
    //     ]
    //   }
    // },

    cssmin: {
      target: {
        files: {
          'dist/style.min.css': ['public/style.css']
        }
      }
    },

    watch: {
      scripts: {
        files: [
          'public/client/**/*.js',
          'public/lib/**/*.js',
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'public/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      scale: {
        command: 'azure site scale mode standard shortlymd'
      },
      push: {
        command: 'git push azure master'
      },
      // logOutput: {
      //   command: 'azure site log tail shortlymd'
      // },
      scaleDown: {
        command: 'azure site scale mode free shortlymd'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
>>>>>>> b3decd9835702557c431d48bbbc32548e6202a61
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

<<<<<<< HEAD
  //   grunt.task.run([ 'watch' ]);
  // });
=======
    grunt.task.run([ 'watch' ]);
  });
>>>>>>> b3decd9835702557c431d48bbbc32548e6202a61

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
<<<<<<< HEAD
    'jshint',
    'mochaTest'
  ]);

  grunt.registerTask('build', [
=======
    'mochaTest', 'jshint'
  ]);

  grunt.registerTask('build', [
    'concat', 'uglify'
>>>>>>> b3decd9835702557c431d48bbbc32548e6202a61
  ]);

  grunt.registerTask('upload', function(n) {
    if(grunt.option('prod')) {
<<<<<<< HEAD
=======
      grunt.task.run([
        'shell:scale',
        'shell:push',
        'shell:logOutput',
        'shell:scaleDown'
      ])
>>>>>>> b3decd9835702557c431d48bbbc32548e6202a61
      // add your production server task here
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', [
    'test',
    'build',
    'upload'
<<<<<<< HEAD
  ]);


};
=======
    // add your deploy tasks here
  ]);

  grunt.registerTask('default', [
    'concat', 'uglify'
    // add your deploy tasks here
  ]);

};
>>>>>>> b3decd9835702557c431d48bbbc32548e6202a61
