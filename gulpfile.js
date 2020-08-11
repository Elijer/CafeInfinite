var gulp = require('gulp');
var { series } = require('gulp')
var uglify = require('gulp-uglify');
//var uglifyify = require('uglifyify')
var pipeline = require('readable-stream').pipeline;

var    babelify     = require('babelify'),
        browserify = require('browserify'),
        buffer     = require('vinyl-buffer'),
        gulp       = require('gulp'),
        gutil      = require('gulp-util'),
        //livereload = require('gulp-livereload'),
        merge      = require('merge'),
        rename     = require('gulp-rename'),
        source     = require('vinyl-source-stream'),
        sourceMaps = require('gulp-sourcemaps'),
        watchify   = require('watchify');
 

async function html(){
    gulp.src('public/*.html')
    .pipe(gulp.dest('dist/'));
}

async function css(){
    gulp.src('public/*.css')
    .pipe(gulp.dest('dist/'));
}


async function minify(){
    return pipeline(
        gulp.src('dist/bundle.js'),
        uglify(),
        gulp.dest('dist/')
  );
}

gulp.task('browserify', function() {
    return browserify('./public/app.js')
        .transform(babelify, {presets: ["@babel/preset-env"]})
        //.transform('uglifyify', { global: true  })
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks! Other stuff can go here
        .pipe(gulp.dest('./dist/'));
});

//exports.browserify = browserify;
exports.html = html;
exports.css = css;
exports.minify = minify;
exports.production = series(html, browserify, minify);