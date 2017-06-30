module.exports = function (grunt) {
  // Project configuration.
grunt.initConfig({
  concat: {
    js: {
      src: ['js/main.js', 'js/theme.js'],
      dest: 'build/js/built.js',
    }
    /*css: {
      src: ['css/main.css', 'css/theme.css'],
      dest: 'build/css/main.css',
    },*/
    },
    less: {
      build: {
        src: 'css/*.less',
        dest: 'build/css/main.css'
      }
    },
    /*cliqueui_clean_less: {
    options: {
        // Task-specific options go here.
      },
      build: {
      dest: 'build/css/main.css'
      },
    },*/
    autoprefixer: {
      options: {
          browsers: ["chrome > 10", "firefox > 10", "ie > 7", "android > 2", "ios > 5"],
            dest: 'css/main.less'
        },
        dist: {
                src: 'build/css/*.css'
            }
   },

});
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-cliqueui-clean-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['concat','less','autoprefixer']);
};
