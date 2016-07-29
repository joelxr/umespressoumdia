module.exports = function(grunt){
    grunt.config('uglify', {
        dist: {
            files: {
                'assets/js/jquery.js' : 'assets/vendor/jquery/dist/jquery.js',
                'assets/js/materialize.js' : 'assets/vendor/Materialize/dist/js/materialize.js',
                'assets/js/mapbox.js' : 'assets/vendor/mapbox.js/mapbox.js',
                'assets/js/leaflet.js' : 'assets/vendor/leaflet/dist/leaflet-src.js',
                'assets/js/leaflet.markercluster.js' : 'assets/vendor/leaflet.markercluster/dist/leaflet.markercluster-src.js',
                'assets/js/leaflet.awesome-markers.js' : 'assets/vendor/Leaflet.awesome-markers/dist/leaflet.awesome-markers.js',
            }
        },
        dev: {
            files: {
                '_site/assets/js/jquery.js' : 'assets/vendor/jquery/dist/jquery.js',
                '_site/assets/js/materialize.js' : 'assets/vendor/Materialize/dist/js/materialize.js',
                '_site/assets/js/mapbox.js' : 'assets/vendor/mapbox.js/mapbox.js',
                '_site/assets/js/leaflet.js' : 'assets/vendor/leaflet/dist/leaflet.js',
                '_site/assets/js/leaflet.markercluster.js' : 'assets/vendor/leaflet.markercluster/dist/leatlet.markercluster.js',
                '_site/assets/js/leaflet.awesome-markers.js' : 'assets/vendor/Leaflet.awesome-markers/dist/leaflet.awesome-markers.js',
            }
        }
    });
};
