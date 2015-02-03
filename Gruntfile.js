module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
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

    jshint: {
      files: [
        'client/**/*.js',
        'server/**/*.js'
      ],
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
          'client/lib/**/*.js',
          'Gruntfile.js',
        ]
      }
    },

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
          'client/**/*.js',
          'server/**/*.js',
        ],
        tasks: [
          
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

      bowerInstall: {
        command: 'bower install'
      },

      bowerGlobal: {
        command: 'sudo npm install -g bower'
      },

      // logOutput: {
      //   command: 'azure site log tail shortlymd'
      // },
      scaleDown: {
        command: 'azure site scale mode free shortlymd'
      }
    },

    simplemocha: {
      backend: {
         src: 'test/serverSpec.js'
      }
    },
        
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-karma');

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

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'simplemocha', 'karma'
  ]);

  grunt.registerTask('build', [
    'concat', 'uglify'
  ]);

  grunt.registerTask('upload', function(n) {
      grunt.task.run([
        'shell:push'
      ])
      // add your production server task here
    
  });

  grunt.registerTask('deploy', [
    'upload'
    // add your deploy tasks here
  ]);

  grunt.registerTask('default', [
    'shell:bowerGlobal',
    'shell:bowerInstall',
    'nodemon'
    // add your deploy tasks here
  ]);

};