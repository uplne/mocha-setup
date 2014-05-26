/**
 * Vivamusica GruntFile
 * @version 0.0.1
 */
module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        /**
        * Read package.json
        */
        pkg: grunt.file.readJSON('package.json'),

        dir: {
            js: 'static/js',
            testsclient: 'tests/client'
        },

        /**
        * JSHint
        * @github.com/gruntjs/grunt-contrib-jshint
        */
        jshint: {
            all: [
                '<%= dir.js %>/server/*.js',
                'Grunfile.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Client tests with requirejs
        mocha_phantomjs: {
            all: ['tests/client/**/*.html']
        },

        // The watch command watches a given set of files and runs a task when one of them changes.
        watch: {
            testsclient: {
                files: ['<%= dir.testsclient %>/**/*_spec.js'],
                tasks: ['mocha_phantomjs']
            },

            /**
             * If any system files changes reload browser.
             * Requires webkit browser extension.
             */
            livereload: {
                files: [
                    '<%= dir.js %>/**/*.js'
                ],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('test-client', ['watch:testsclient']);
};
