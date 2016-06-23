module.exports = function(grunt){
    grunt.registerTask('build', [
            'copy:dist',
            'sass:dist',
            'uglify:dist',
            'jekyll:build'
    ]);
};
