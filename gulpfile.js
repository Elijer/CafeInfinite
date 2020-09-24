var gulp = require('gulp'),
    { series } = require('gulp'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    uglifyify = require('uglifyify'),
    pipeline = require('readable-stream').pipeline,
    babelify     = require('babelify'),
    browserify = require('browserify'),
    gulp       = require('gulp'),
    buffer = require('vinyl-buffer'),
    source     = require('vinyl-source-stream'),
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

async function js(){
    gulp.src(sourceDirectory + 'bundle.js', {allowEmpty: true})
    .pipe(gulp.dest(buildDirectory));
}

// Deletes Build Directory so we can start fresh with each build
async function scrap(){
    return del(buildDirectory, {force:true});
};

async function bundle() {
    // set up the browserify instance on a task basis
    var b = browserify({
      entries: 'public/app.js',
      debug: false
    });
  
    return b.bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
          //.pipe(uglify())
      .pipe(gulp.dest('./dist/'));
  };

exports.scrap = scrap;
exports.dist = series(scrap, html, css, favicon, gifs, js);
exports.dist2 = series(scrap, html, css, favicon, gifs, bundle);
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