/* How to Run this Program

Just run 'npm test'.

To run this app for production, everything relevant in the 'public' folder is
moved by the various gulp tasks in 'gulp mini' to the 'dist'
folder. CSS, HTML and specific media files are simply moved, while the javascript
is bundled up using Browserify with gulp. Lastly, Javascript files are minified
using the 'gulp-uglify-es' package, and the comments are stripped, reducing
file sizes for ditribution.

However, when run locally for testing, a few things are done differently. For one,
watchify is used because it can continuously watch for file changes in the
JS file tree, allowing for a more comfortable development process. However,
because watchify isn't capable of moving ALL files to the 'dist' folder, adding and
relying on new media, css, or html files may break the build. In order to fix
this problem, run 'gulp mini' or, to get accurate error messages,
run 'gulp map', which adds a source map to the file.

The confusing part pertains to HOW you want to run the app locally. You
have two choices:
(1) Run from the dist folder.
(2) Run out of the public folder.

If you run from the public folder, you can't break the app by adding new media
or html that may not be moved to the dist folder. However, you cannot monitor the
health of the distribution process while you are developing, which will
probably need to be tinkered with at checkpoints along the way. Up to you!

Whichever one you pick, just make sure that the firebase.json file reflects the
folder you are using to serve the app. If you are sending the bundle.js file to the
dist folder, make sure it reads "public":"dist", whereas if you are sending the
bundle.js file to the public file, make sure it reads "public":"public". That's all.
*/


// Package.json scripts and what they do
"scripts": {
    // Notice that this command using watchify but writes the bundle to 'dist'. 
    "test": "gulp map; watchify --debug public/app.js -o dist/bundle.js & firebase emulators:start ",
    // This command writes to the 'public' folder, which won't work
    "rapidDev": "watchify --debug public/app.js -o public/bundle.js & firebase emulators:start ",
    // This one deploys the app, but with sourcemaps
    "map": "gulp map; firebase deploy",
    // This deploys a minified version of the app at 1/3rd of the size as the above function
    "mini": "gulp mini; firebase deploy"
},