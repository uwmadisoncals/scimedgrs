module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['js/jquery-1.11.1.js','js/jquery.ui.js','js/jquery-ui-1.10.4.custom.min.js','js/jquery.iosslider.js','js/jquery.isotope.min.js','js/jquery-css-transform.js','js/jquery-rotate.js','js/browserdetect.js','js/mainactions.js','js/min/gsapi.min.js','js/blurobjs.js','library/scripts/vallenato.js','js/soilsextension_custom.js'],
        dest: 'js/min/master.min.js'
      }
    },
  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'compressed'
      },
      files: [{
          expand:true,
          cwd:'stylesheets/sass/',
          src:['*.scss'],
          dest:'stylesheets/css',
          ext:'.css'                         // Dictionary of files
      }]
    }
  },
  /*concat: {
    options: {
      separator: ' ',
    },
    dist: {
      src: ['main-child.css', 'mobile-child.css'],
      dest: 'master-child.css',
    },
  },*/
  watch: {
    scripts: {
      files: ['js/*.js'],
      tasks: ['uglify','concat:notMiny'],
      options: {
        livereload: true,
      },
    },
    css: {
      files: '**/*.scss',
      tasks: ['sass'],
    options: {
        livereload: true,
      },
      
    }
  },
  
  imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'images/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/'                  // Destination path prefix
        }]
      }
    }
    
  });
  grunt.event.on('watch', function(action, filepath, target) {
  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('default', ['concat']);
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('default', ['imagemin']);
  
 

};