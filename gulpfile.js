var gulp = require('gulp');
var { series } = require('gulp')
var uglify = require('gulp-uglify');
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
 

async function transfer(){
    gulp.src('public/*.html')
    .pipe(gulp.dest('dist/'));
}

async function compress(){
    return pipeline(
        gulp.src('public/bundle.js'),
        uglify(),
        gulp.dest('dist/')
  );
}

/*
async function bundle(bundle){
    // first make babel transform using etry point
    bundle
    // then do the browserify shit with the same entry point
    .pipe(buffer())  
    .pipe(source('./public/app.js'))
    .pipe(buffer())                              // Convert to gulp pipeline
    .pipe(rename('bundle.js'))                   // rename to bundle.js
    .pipe(sourceMaps.init({ loadMaps : true }))  // Strip inline source maps
    .pipe(sourceMaps.write('./maps'))            // Save source maps to their own directory
    .pipe(gulp.dest('./dist'))                  // Save 'bundle' to dist folder/
    //.pipe(gulp.dest(config.js.outputDir))      // Save 'bundle' to build/
}

async function applyBundle(){
    var bundler = browserify('./public/app.js')
    .transform(babelify, {presets : ['es2015']})
    bundle(bundler);
}
*/

// this does the bundle just like the CLI
// But where is the output?
// Good question
//var bundle = browserify('.public/app.js').bundle()

gulp.task('browserify', function() {
    return browserify('./public/app.js')
        .transform(babelify, {presets: ["@babel/preset-env"]})
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        // so I guess other stuff can go here
        .pipe(gulp.dest('./dist/'));
});

exports.transfer = transfer;
exports.compress = compress;
exports.production = series(transfer, compress);