module.exports = function(grunt){
  grunt.registerTask('run', [
    'build',
    'browserSync',
    'watch'
  ]);
};
