"use strict";

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin'),
    minifyCss = require('gulp-minify-css');

//local server
gulp.task('connect', function() {
  connect.server({
    root: './',
    // port: 8001,
    livereload: true
  });
});

//IMAGES
gulp.task('images', function() {
    gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./img-min'))
});

//CSS
gulp.task('sass', function() {
    gulp.src('css/style.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 6 versions'],
            cascade: false
        }))
        //.pipe(minifyCss())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

//HTML
gulp.task('jade', function() {
    gulp.src('index.jade')
        .pipe(jade({ pretty: true }))
            .on('error', console.log) // Если есть ошибки, выводим и продолжаем
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

//JS
gulp.task('js', function() {
    gulp.src('js/*')
        .pipe(connect.reload());
});

//WATCH
gulp.task('watch', function() {
    gulp.watch('css/*', ['sass'])
    gulp.watch('index.jade', ['jade'])
    gulp.watch('js/*', ['js'])
})


gulp.task('default', ['connect', 'jade', 'sass', 'watch', 'js']);
