module.exports = function(grunt){
    grunt.config('uglify', {
        dist: {
            files: {
                'assets/js/jquery.js' : 'assets/vendor/jquery/dist/jquery.js',
                'assets/js/materialize.js' : 'assets/vendor/Materialize/dist/js/materialize.js',
                'assets/js/angular.js' : 'assets/vendor/angular/angular.js',
            }
        },
        dev: {
            files: {
                '_site/assets/js/jquery.js' : 'assets/vendor/jquery/dist/jquery.js',
                '_site/assets/js/materialize.js' : 'assets/vendor/Materialize/dist/js/materialize.js',
                '_site/assets/js/angular.js' : 'assets/vendor/angular/angular.js',
            }
        }
    });
};
