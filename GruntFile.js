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
            js: 'js',
            tests: 'tests'
        },

        /**
        * JSHint
        * @github.com/gruntjs/grunt-contrib-jshint
        */
        jshint: {
            all: [
                '<%= dir.js %>/*.js',
                'Grunfile.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Client tests with requirejs
        mocha_phantomjs: {
            all: ['tests/**/*.html']
        },

        // The watch command watches a given set of files and runs a task when one of them changes.
        watch: {
            tests: {
                files: [
                    '<%= dir.tests %>/**/*_spec.js',
                    '<%= dir.js %>/**/*.js'
                ],
                tasks: ['mocha_phantomjs', 'jshint']
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

    grunt.registerTask('test', ['watch:tests']);
};
