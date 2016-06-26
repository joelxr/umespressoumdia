module.exports = function(grunt){
  grunt.config('watch', {

    styles: {
      files: ['assets/sass/*.scss'],
      tasks: ['sass:dev']
    },

    jekyll: {
      files: [
        '_posts/*.md',
        '_layouts/*.html',
        '_includes/*.html',
        '*.html'
      ],
      tasks: ['jekyll:build']
    }

  });
};
