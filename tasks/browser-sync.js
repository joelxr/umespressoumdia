module.exports = function(grunt){
  grunt.config('browserSync', {

    dev: {
      bsFiles: {
        src : [
          './',
          '_site',
        ]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: '_site'
        }
      }
    }

  });
};
