module.exports = function(grunt) {

    'use strict';

    var config = {
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: false,
                outputStyle: 'compressed'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dev/scss',
                    src: ['*.scss'],
                    dest: 'dist/assets/css',
                    ext: '.css'
                }]
            }
        },
        processhtml: {
            dist: {
                options: {
                    process: true,
                },
                files: [{
                    expand: true,
                    cwd: 'dev/',
                    src: ['*.html'],
                    dest: 'dist/',
                    ext: '.html'
                }]
            }
        },
        watch: {
            css: {
                files: ['dev/scss/*.scss'],
                tasks: ['newer:sass:dist'],
                options: {
                    spawn: false
                }
            },
            processhtml: {
                files: ['dev/*.html', 'dev/template/*.html'],
                tasks: ['processhtml'],
                options: {
                    spawn: false
                }
            }
        }
    };

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-processhtml');

    // Register tasks
    grunt.initConfig(config);

    grunt.registerTask('default', ['sass', 'processhtml', 'cssbeautifier']);

    grunt.registerTask('dev', ['watch']);

};
