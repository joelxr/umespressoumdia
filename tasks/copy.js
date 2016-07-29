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
            {
                src: 'assets/vendor/mapbox.js/mapbox.css',
                dest: 'assets/css/mapbox.css',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'assets/vendor/mapbox.js/images/',
                src: '**',
                dest: 'assets/css/images/',
                filter: 'isFile'
            },
            {
                src: 'assets/vendor/leaflet/dist/leaflet.css',
                dest: 'assets/css/leaflet.css',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'assets/vendor/leaflet/dist/images/',
                src: '**',
                dest: 'assets/css/images/',
                filter: 'isFile'
            },
            {
                src: 'assets/vendor/leaflet.markercluster/dist/MarkerCluster.css',
                dest: 'assets/css/leaflet.markercluster.css',
                filter: 'isFile'
            },
           {
                src: 'assets/vendor/leaflet.markercluster/dist/MarkerCluster.Default.css',
                dest: 'assets/css/leaflet.markercluster.default.css',
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
            {
                src: 'assets/vendor/mapbox.js/mapbox.css',
                dest: '_site/assets/css/mapbox.css',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'assets/vendor/mapbox.js/images/',
                src: '**',
                dest: '_site/assets/css/images/',
                filter: 'isFile'
            },
            {
                src: 'assets/vendor/leaflet/dist/leaflet.css',
                dest: '_site/assets/css/leaflet.css',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: 'assets/vendor/leaflet/dist/images/',
                src: '**',
                dest: '_site/assets/css/images/',
                filter: 'isFile'
            },
            {
                src: 'assets/vendor/leaflet.markercluster/dist/MarkerCluster.css',
                dest: '_site/assets/css/leaflet.markercluster.css',
                filter: 'isFile'
            },
            {
                src: 'assets/vendor/leaflet.markercluster/dist/MarkerCluster.Default.css',
                dest: '_site/assets/css/leaflet.markercluster.default.css',
                filter: 'isFile'
            },

            ]
        }
    });
};
