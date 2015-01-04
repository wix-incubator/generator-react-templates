'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        eslint: {
            all: {
                src: [
                    'src/**/*.js',
                    '!src/**/*.rt.js'
                    ]
            }
        },
        clean: {
            main: {
                src: ['src/**/*.rt.js']
            }
        },
        watch: {
            rt: {
                files: [
                    'src/**/*.rt'
                ],
                tasks: ['rt'],
                options: {
                    spawn: false
                }
            }
        },
        reactTemplates: {
            modules: '<%= modules %>',
            format: 'stylish',
            src: ['src/**/*.rt']
        }
    });

    grunt.loadNpmTasks('grunt-react-templates');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('rt', ['react-templates']);
    grunt.registerTask('default', ['rt', 'eslint']);
    grunt.registerTask('test', []);

    grunt.registerTask('all', ['default', 'test']);
};
