module.exports = function(grunt){
    grunt.config('sass', {
        dist: {
            options: {
                style: 'compressed'
            },
            files: {
                'assets/css/style.css': 'assets/sass/style.scss'
            }
        },
        dev: {
            options: {
                style: 'expanded'
            },
            files: {
                '_site/assets/css/style.css': 'assets/sass/style.sass'
            }
        }
    });
};
