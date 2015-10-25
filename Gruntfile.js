module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      build: {
        src: 'assets/javascript/home.js',
        dest: 'assets/javascript/home.min.js'
      }
    },
    
    watch: {
      scripts: {
        files: ['assets/javascript/home.js'],
        tasks: ['uglify']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['uglify']);
  
};