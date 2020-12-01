module.exports = function(grunt) {
    const sass = require('node-sass');

    grunt.initConfig({
        concat: {
            build: {
                src: ['js/nhlapi.js', 'js/pucko.js'],
                dest: 'js/pucko.min.js'
            }
        },
        sass: {
            options: {
                implementation: sass,
            },
            core: {
                src: 'css/sass/pucko.scss',
                dest: 'css/pucko.css'
            }
        },
        autoprefixer: {
            core: {
                src: 'css/pucko.css'
            }
        },
        cssmin: {
            core: {
                src: 'css/pucko.css',
                dest: 'css/pucko.min.css'
            },
            normalize: {
                src: 'css/normalize.css',
                dest: 'css/normalize.min.css'
            }
        },
        copy: {
            normalize: {
                src: 'node_modules/normalize.css/normalize.css',
                dest: 'css/normalize.css'
            },
            d3: {
                src: 'node_modules/d3/dist/d3.min.js',
                dest: 'js/d3.min.js'
            }
        },
        connect: {
            serve: {
                options: {
                    port: 8000,
                    base: '.',
                    livereload: true,
                    open: true,
                    useAvailablePort: true
                }
            }
        },
        watch: {
            sass: {
                files: [
                    'css/sass/pucko.scss',
                    'node_modules/normalize.css/normalize.css'
                ],
                tasks: 'css'
            },
            js: {
                files: ['Gruntfile.js', 'js/pucko.js', 'js/nhlapi.js'],
                tasks: 'js'
            },
            html: {
                files: 'index.html'
            },
            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('js', ['copy:d3', 'concat']);
    grunt.registerTask('css', ['sass', 'autoprefixer', 'copy:normalize', 'cssmin']);
    grunt.registerTask('serve', ['connect', 'watch']);
}
