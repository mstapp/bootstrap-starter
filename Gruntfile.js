module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        copy: {
            // only do when need to copy from node_modules or bower_components -> libs
            unpack: {
                files: [
                    // Copy libs from bower_components & node_modules to libs/ dir.
                    // Do this BEFORE copying libs/** to dist/libs
                    {expand: true, cwd: 'bower_components/bootstrap/dist/fonts', src: ['**'], dest: 'fonts'},
                    {expand: true, cwd: 'bower_components/bootstrap/dist/js', src: ['bootstrap.*'], dest: 'libs'},
                    {expand: true, cwd: 'bower_components/bootstrap/less', src: ['**'], dest: 'less/bootstrap'},
                    {expand: true, cwd: 'node_modules/jquery/dist', src: ['jquery.*'], dest: 'libs'},
                ]
            },
            main: {
                files: [
                    {expand: true, src: ['index.html'], dest: 'dist/'},
                    {expand: true, cwd: 'fonts', src: ['**'], dest: 'dist/fonts/'},
                    {expand: true, cwd: 'libs', src: ['**'], dest: 'dist/libs/'},
                ]
            },
        },

        less: {
            main: {
                files: {
                    // our compiled app.css includes bootstrap via our less/app.less
                    'dist/css/app.css': 'less/app.less',
                },
            },
        },

        watch: {
            configFiles: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true
                }
            },
            less: {
                files: 'less/**/*.less',
                tasks: ['less'],
            },
            staticFiles: {
                files: ['index.html'],
                tasks: ['copy:main'],
            },
        },
    });

    grunt.registerTask('default', ['full']);
    grunt.registerTask('unpack', ['copy:unpack']);
    grunt.registerTask('full', ['copy:main','less']);
};
