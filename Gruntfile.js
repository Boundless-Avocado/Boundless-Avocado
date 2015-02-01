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
        src: ['test/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server/server.js'
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
>>>>>>> 0be5af1d61d99759d82b9ec2b3feedfa19a69a09
      }
    },

    jshint: {
      files: [
<<<<<<< HEAD
        'Gruntfile.js',
=======
>>>>>>> 0be5af1d61d99759d82b9ec2b3feedfa19a69a09
        'client/**/*.js',
        'server/**/*.js'
      ],
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
          'client/lib/**/*.js',
<<<<<<< HEAD
=======
          'Gruntfile.js',
>>>>>>> 0be5af1d61d99759d82b9ec2b3feedfa19a69a09
        ]
      }
    },

<<<<<<< HEAD
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
    //     files: 
    //     tasks: []
    //   }
    // },

    // shell: {
    //   prodServer: {
    //     command: 'git push azure master',
    //     options: {
    //       stdout: true,
    //       stderr: true,
    //       failOnError: true
    //     }
    //   }
    // },

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-casperjs');

=======
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

    grunt.task.run([ 'watch' ]);
  });
>>>>>>> 0be5af1d61d99759d82b9ec2b3feedfa19a69a09

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
<<<<<<< HEAD
    'jshint',
    'mochaTest'
  ]);

  // grunt.registerTask('upload', [
  //   grunt.task.run([ 'shell:prodServer' ])
  // ]);


  grunt.registerTask('deploy', [
    'test'
    // 'upload'
  ]);

=======
    'jshint'
  ]);

  grunt.registerTask('build', [
    'concat', 'uglify'
  ]);

  grunt.registerTask('upload', function(n) {
    if(grunt.option('prod')) {
      grunt.task.run([
        'shell:scale',
        'shell:push',
        'shell:logOutput',
        'shell:scaleDown'
      ])
      // add your production server task here
    } else {
      grunt.task.run([ 'server-dev' ]);
    }
  });

  grunt.registerTask('deploy', [
    'test',
    'build',
    'upload'
    // add your deploy tasks here
  ]);

  grunt.registerTask('default', [
    'concat', 'uglify'
    // add your deploy tasks here
  ]);
>>>>>>> 0be5af1d61d99759d82b9ec2b3feedfa19a69a09

};