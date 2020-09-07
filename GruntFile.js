module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            files: ['css/*.css'],
            tasks: ['css']
        },
        browserStnc: {
            dev: {
                bsFiles: { //browser files
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default',['browserSync'])
}