module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      build: {
        src: 'assets/javascript/src/home.js',
        dest: 'assets/javascript/src/home.min.js'
      }
    },
    
    concat: {
      js: {
        src: ['assets/javascript/src/home.min.js', 'assets/javascript/libs/jquery.scrollTo.min.js'],
        dest: 'assets/javascript/prod.min.js'
      }
    },
    
    watch: {
      js: {
        files: ['assets/javascript/src/home.js'],
        tasks: ['uglify', 'concat']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['uglify', 'concat']);
  
};