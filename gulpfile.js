var gulp = require('gulp'),
    { series } = require('gulp'),
    del = require('del'),
    browserify = require('browserify'),
    gulp       = require('gulp'),
    buffer = require('vinyl-buffer'),
    source     = require('vinyl-source-stream'),
    transform = require('vinyl-transform'),
    // unused
    //uglify = require('gulp-uglify'),
    uglify = require('gulp-uglify-es').default,
    uglifyify = require('uglifyify'),
    pipeline = require('readable-stream').pipeline,
    babelify     = require('babelify'),
    strip = require('gulp-strip-comments');
 
var buildDirectory = 'dist/';
var sourceDirectory = 'public/'

async function html(){
    gulp.src(sourceDirectory + '*.html', {allowEmpty: true})
    .pipe(gulp.dest(buildDirectory));
}


async function css(){
    gulp.src(sourceDirectory + '*/*.css', {allowEmpty: true})
    .pipe(gulp.dest(buildDirectory));
}

async function favicon(){
    gulp.src(sourceDirectory + 'favicon.png', {allowEmpty: true})
    .pipe(gulp.dest(buildDirectory));
}

async function gifs(){
    gulp.src(sourceDirectory + '*/*.gif', {allowEmpty: true})
    .pipe(gulp.dest(buildDirectory));
}

/* async function js(){
    gulp.src(sourceDirectory + 'bundle.js', {allowEmpty: true})
    .pipe(gulp.dest(buildDirectory));
} */

// Deletes Build Directory so we can start fresh with each build
async function scrap(){
    return del(buildDirectory, {force:true});
};

async function testing() {
    var b = browserify({
      entries: 'public/app.js',
      debug: true
    });

    return b.bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./dist/'));
};

async function minified() {
    var b = browserify({
        entries: './public/app.js', // Only need initial file, browserify finds the deps
        debug: false        // Enable sourcemaps
    });
    
    return b.bundle()
        .pipe(source('bundle.js')) // destination file for browserify, relative to gulp.dest
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
};

exports.scrap = scrap;
// gulp map is for testing, and includes sourcemaps
exports.map = series(scrap, html, css, favicon, gifs, testing);
// gulp mini is for distribution. It minifies bundle.js, does not include sourcemaps.
exports.mini = series(scrap, html, css, favicon, gifs, minified);
//exports.distTest = series(scrap, html, css, bundleAndMap, minify);


// Unused gulp modules
//buffer     = require('vinyl-buffer'),
//gutil      = require('gulp-util'),
//livereload = require('gulp-livereload'),
//merge      = require('merge'),
//rename     = require('gulp-rename'),
//sourceMaps = require('gulp-sourcemaps');
//watchify   = require('watchify');



/*
Defunct pieces of shit:

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
        debug: false
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
        gulp.src(sourceDirectory + 'bundle.js'),
        uglify(),
        gulp.dest(buildDirectory)
  );
*/