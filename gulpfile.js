'use strict';

var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var karma = require('gulp-karma');
var del = require('del');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var libFile = 'angular-nutritionix-api.js';

var server = {
    host: 'localhost',
    port: '8001'
};

gulp.task('test', function () {
    // Be sure to return the stream
    return gulp.src('-')
        .pipe(plumber())
        .pipe(karma({
            configFile: 'karma.conf.js',
            action:     'run'
        }))
        .on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});

gulp.task('ngdocs', [], function () {
    var gulpDocs = require('gulp-ngdocs');
    var options = {
        html5Mode: false,
        startPage: '/api/nix.api',
        titleLink: 'https://github.com/nutritionix/library-angular',
        title:     'Angular Nutritionix Api'
    };

    del.sync(['./docs/*']);

    return gulp.src(libFile)
        .pipe(gulpDocs.process(options))
        .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['test', 'ngdocs'], function () {

    return gulp.src(libFile)
        .pipe(ngAnnotate())
        .pipe(rename("angular-nutritionix-api.min.js"))
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', function () {
    gulp.src('-')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action:     'watch'
        }));
});

gulp.task('serve', ['build'], function () {
    gulp.watch(libFile, ['build']);

    gulp.src( '.' )
        .pipe(webserver({
            host:             server.host,
            port:             server.port,
            livereload:       false,
            directoryListing: true
        }));
});
