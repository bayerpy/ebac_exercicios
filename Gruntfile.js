module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css' : 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css' : 'src/styles/main.less'
                }
            }
        },
        uglify: {
            options: {
                compress: true,
            },
            target: {
                files: {
                    'dist/scripts/main.min.js' : 'src/scripts/*.js'
                }
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './dist/styles/main.min.css' 
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './dist/scripts/main.min.js' 
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            }
        }
    })

    
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-replace');



grunt.registerTask('default', ['less', 'uglify', 'replace']);
}
