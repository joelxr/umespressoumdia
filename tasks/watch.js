module.exports = function(grunt){
  grunt.config('watch', {

    styles: {
      files: ['assets/sass/**/*.sass'],
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
