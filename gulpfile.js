var gulp = require('gulp'),
    { series } = require('gulp'),
    del = require('del'),
    browserify = require('browserify'),
    gulp       = require('gulp'),
    buffer = require('vinyl-buffer'),
    source     = require('vinyl-source-stream'),
    uglify = require('gulp-uglify-es').default,
    strip = require('gulp-strip-comments');
 
var buildDirectory = 'dist/';
var sourceDirectory = 'public/'

// move HTML to dist
async function html(){
    gulp.src(sourceDirectory + '*.html', {allowEmpty: true})
    .pipe(gulp.dest(buildDirectory));
}

// move CSS to dist
async function css(){
    gulp.src(sourceDirectory + '*/*.css', {allowEmpty: true})
    .pipe(gulp.dest(buildDirectory));
}

// move favicon to dist
async function favicon(){
    gulp.src(sourceDirectory + 'favicon.png', {allowEmpty: true})
    .pipe(gulp.dest(buildDirectory));
}

// move gifs file to dist
async function gifs(){
    gulp.src(sourceDirectory + '*/*.gif', {allowEmpty: true})
    .pipe(gulp.dest(buildDirectory));
}

// Deletes Build Directory so we start fresh with each build
async function scrap(){
    return del(buildDirectory, {force:true});
};

// Bundles with sourcemaps, no minification
async function testing() {
    var b = browserify({
      entries: 'public/app.js',
      debug: true
    });

    return b.bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./dist/'));
};

// Bundles w/out sourcemaps, minifies, strips comments
async function production() {
    var b = browserify({
        entries: './public/app.js', // Only need initial file, browserify finds the deps
        debug: false        // Enable sourcemaps
    });
    
    return b.bundle()
        .pipe(source('bundle.js')) // destination file for browserify, relative to gulp.dest
        .pipe(buffer())
        .pipe(uglify())
        .pipe(strip())
        .pipe(gulp.dest('./dist'));
};

exports.scrap = scrap;
// gulp map is for testing, and includes sourcemaps
exports.map = series(scrap, html, css, favicon, gifs, testing);
// gulp mini is for distribution: minifies, omits sourcemaps, strips comments
exports.mini = series(scrap, html, css, favicon, gifs, production);