/**
 * Settings
 * Turn on/off build features
 */

var settings = {
  clean: true,
  scripts: false,
  polyfills: true,
  styles: true,
  svgs: true,
  copy: true,
  reload: true,
};

/**
 * Paths to project folders
 */

var paths = {
  input: 'src/',
  output: 'dist/',
  scripts: {
    input: 'src/js/*',
    polyfills: '.polyfill.js',
    output: 'dist/js/',
  },
  styles: {
    input: 'src/scss/**/*.{scss,sass}',
    output: 'dist/css/',
  },
  copyScss: {
    input: 'src/scss/**/*.{scss,sass}',
    output: 'dist/scss/',
  },
  svgs: {
    input: 'src/svg/*.svg',
    output: 'dist/svg/',
  },
  copy: {
    input: 'src/copy/**/*',
    output: 'dist/',
  },
  version: {
    input: '{README.md,src/**/*.*}',
    output: './',
  },
  reload: './dist/',
};

/**
 * Template for banner to add to file headers
 */

var banner = {
  main:
    '/*!\n' +
    ' * <%= package.name %> v<%= package.version %> (<%= package.homepage %>)\n' +
    ' * Copyright ' +
    new Date().getFullYear() +
    ' <%= package.author.name %>\n' +
    ' * Licensed under <%= package.license %>\n' +
    ' * <%= package.repository.url %>' +
    ' */\n' +
    '/* stylelint-disable */\n',
};

/**
 * Gulp Packages
 */

// General
var { src, dest, watch, series, parallel } = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var header = require('gulp-header');
var replace = require('gulp-replace');
var package = require('./package.json');

// Styles
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var prefix = require('autoprefixer');
var minify = require('cssnano');

// SVGs
var svgmin = require('gulp-svgmin');

// BrowserSync
var browserSync = require('browser-sync');

// Version regexp
const packageVersionRegExp = /keyboard-css@([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?/g;

/**
 * Gulp Tasks
 */

// Remove pre-existing content from output folders
var cleanDist = function (done) {
  // Make sure this feature is activated before running
  if (!settings.clean) return done();

  // Clean the dist folder
  del.sync([paths.output]);

  // Signal completion
  return done();
};

// Process, lint, and minify Sass files
var buildStyles = function (done) {
  // Make sure this feature is activated before running
  if (!settings.styles) return done();

  // Run tasks on all Sass files
  return src(paths.styles.input)
    .pipe(
      sass({
        outputStyle: 'expanded',
        sourceComments: true,
      })
    )
    .pipe(
      postcss([
        prefix({
          cascade: true,
          remove: true,
        }),
      ])
    )
    .pipe(header(banner.main, { package: package }))
    .pipe(dest(paths.styles.output))
    .pipe(rename({ suffix: '.min' }))
    .pipe(
      postcss([
        minify({
          discardComments: {
            removeAll: true,
          },
        }),
      ])
    )
    .pipe(dest(paths.styles.output));
};

// Optimize SVG files
var buildSVGs = function (done) {
  // Make sure this feature is activated before running
  if (!settings.svgs) return done();

  // Optimize SVG files
  return src(paths.svgs.input).pipe(svgmin()).pipe(dest(paths.svgs.output));
};

// Copy static files into output folder
var copyFiles = function (done) {
  // Make sure this feature is activated before running
  if (!settings.copy) return done();

  // Copy static files
  return src(paths.copy.input)
    .pipe(replace(packageVersionRegExp, `${package.name}@${package.version}`))
    .pipe(dest(paths.copy.output));
};

// Copy static files into output folder
var copyScss = function (done) {
  // Make sure this feature is activated before running
  if (!settings.copy) return done();

  // Copy static files
  return src(paths.copyScss.input).pipe(dest(paths.copyScss.output));
};

// Update version in files
var updateVersion = function (done) {
  // Make sure this feature is activated before running
  if (!settings.copy) return done();

  // Copy static files
  return src(paths.version.input)
    .pipe(replace(packageVersionRegExp, `${package.name}@${package.version}`))
    .pipe(dest(paths.version.output));
};

// Watch for changes to the src directory
var startServer = function (done) {
  // Make sure this feature is activated before running
  if (!settings.reload) return done();

  // Initialize BrowserSync
  browserSync.init({
    server: {
      baseDir: paths.reload,
    },
  });

  // Signal completion
  done();
};

// Reload the browser when files change
var reloadBrowser = function (done) {
  if (!settings.reload) return done();
  browserSync.reload();
  done();
};

// Watch for changes
var watchSource = function (done) {
  watch(paths.input, series(exports.default, reloadBrowser));
  done();
};

/**
 * Export Tasks
 */

// Default task
// gulp
exports.default = series(
  cleanDist,
  parallel(buildStyles, buildSVGs, updateVersion, copyFiles, copyScss)
);

// Watch and reload
// gulp watch
exports.watch = series(exports.default, startServer, watchSource);
