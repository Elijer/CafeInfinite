var gulp = require('gulp'),
    { series } = require('gulp'),
    uglify = require('gulp-uglify'),
    uglifyify = require('uglifyify'),
    pipeline = require('readable-stream').pipeline,
    babelify     = require('babelify'),
    browserify = require('browserify'),
    gulp       = require('gulp'),
    source     = require('vinyl-source-stream');
 
    
async function html(){
    gulp.src('public/*.html')
    .pipe(gulp.dest('dist/'));
}

async function css(){
    gulp.src('public/*/*.css')
    .pipe(gulp.dest('dist/'));
}

async function bundle(){
    //gulp.task('browserify', function() {
    return browserify('./public/app.js')
        .transform(babelify, {presets: ["@babel/preset-env"]})
        .transform('uglifyify', { global: true  })
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks! Other stuff can go here
        .pipe(gulp.dest('./dist/'));
};


async function minify(){
    return pipeline(
        gulp.src('dist/bundle.js'),
        uglify(),
        gulp.dest('dist/')
  );
}

exports.dist = series(html, css, bundle, minify);


// Unused gulp modules
//buffer     = require('vinyl-buffer'),
//gutil      = require('gulp-util'),
//livereload = require('gulp-livereload'),
//merge      = require('merge'),
//rename     = require('gulp-rename'),
//sourceMaps = require('gulp-sourcemaps');
//watchify   = require('watchify');