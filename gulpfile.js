var gulp = require('gulp'),
    { series } = require('gulp'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    uglifyify = require('uglifyify'),
    pipeline = require('readable-stream').pipeline,
    babelify     = require('babelify'),
    browserify = require('browserify'),
    gulp       = require('gulp'),
    source     = require('vinyl-source-stream');
 
var buildDirectory = 'dist/';
var sourceDirectory = 'public/'
    
// Moves all top-level html files from source directory to build directory
// If I ever put html into folder it won't move them, but I don't plan on doing that
async function html(){
    gulp.src(sourceDirectory + '*.html', {allowEmpty: true})
    .pipe(gulp.dest(buildDirectory));
}

// Moves all CSS files from source directory to build directory
async function css(){
    gulp.src(sourceDirectory + '*/*.css', {allowEmpty: true})
    .pipe(gulp.dest(buildDirectory));
}

// Deletes Build Directory so we can start fresh with each build
async function scrap(){
    return del(buildDirectory, {force:true});
};

// Runs browserify to bundle the JS and save the bundle in build directory
async function bundle(){
    return browserify(sourceDirectory + 'app.js')
        .transform(babelify, {presets: ["@babel/preset-env"]})
        .transform('uglifyify', { global: true  })
        .bundle()                    //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))  // Start piping stream to tasks! Other stuff can go here
        .pipe(gulp.dest(buildDirectory));
};

// Runs browserify to bundle the JS and save the bundle in build directory, + includes sourcemaps
async function bundleAndMap(){
    return browserify({
        entries: sourceDirectory + 'app.js',
        debug: true
    })
        .transform(babelify, {presets: ["@babel/preset-env"]})
        .transform('uglifyify', { global: true  })
        .bundle()                    //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))  // Start piping stream to tasks! Other stuff can go here
        .pipe(gulp.dest(buildDirectory));
};

// Minfies the bundle.js. Makes it tiny.
async function minify(){
    return pipeline(
        gulp.src(buildDirectory + 'bundle.js', {allowEmpty: true}),
        uglify(),
        gulp.dest(buildDirectory)
  );
}

exports.dist = series(scrap, html, css, bundle, minify);
exports.distTest = series(scrap, html, css, bundleAndMap, minify);


// Unused gulp modules
//buffer     = require('vinyl-buffer'),
//gutil      = require('gulp-util'),
//livereload = require('gulp-livereload'),
//merge      = require('merge'),
//rename     = require('gulp-rename'),
//sourceMaps = require('gulp-sourcemaps');
//watchify   = require('watchify');