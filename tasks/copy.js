/** Copiar recursos necessários para o projeto (geralmente: fontes, imagens, páginas) */

module.exports = function(grunt){
    grunt.config('copy', {
        dist: {
            files: [
            {
                expand: true,
                cwd: 'assets/vendor/font-awesome/fonts/',
                src: '**',
                dest: 'assets/fonts/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'assets/vendor/font-abel/font/',
                src: '**',
                dest: 'assets/font/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'assets/vendor/Materialize/dist/font/material-design-icons/',
                src: '**',
                dest: 'assets/font/material-design-icons/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'assets/vendor/Materialize/dist/font/roboto/',
                src: '**',
                dest: 'assets/font/roboto/',
                filter: 'isFile'
            },
            ]
        },
        dev: {
            files: [
            {
                expand: true,
                cwd: 'assets/vendor/font-awesome/fonts/',
                src: '**',
                dest: '_site/assets/fonts/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'assets/vendor/font-abel/font/',
                src: '**',
                dest: '_site/assets/font/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'assets/vendor/Materialize/dist/font/material-design-icons/',
                src: '**',
                dest: '_site/assets/font/material-design-icons/',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'assets/vendor/Materialize/dist/font/roboto/',
                src: '**',
                dest: '_site/assets/font/roboto/',
                filter: 'isFile'
            },
            ]
        }
    });
};
