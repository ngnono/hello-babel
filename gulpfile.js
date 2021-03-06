var path = require('path');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var excludeGitignore = require('gulp-exclude-gitignore');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var nsp = require('gulp-nsp');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var del = require('del');
var isparta = require('isparta');
var webpack = require('gulp-webpack');

// Initialize the babel transpiler so ES2015 files gets compiled
// when they're loaded
require('babel-register');

gulp.task('server-static', function () {
  return gulp.src(['src/**/*.js','!src/client/**'])
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('nsp', function (cb) {
  nsp({package: path.resolve('package.json')}, cb);
});

gulp.task('pre-server-test', function () {
  return gulp.src(['src/**/*.js','!src/client/**'])
    .pipe(excludeGitignore())
    .pipe(istanbul({
      includeUntested: true,
      instrumenter: isparta.Instrumenter
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-server-test'], function (cb) {
  var mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function (err) {
      mochaErr = err;
    })
    .pipe(istanbul.writeReports())
    .on('end', function () {
      return cb && cb(mochaErr);
    });
});

gulp.task('watch', function () {
  gulp.watch(['lib/**/*.js', 'test/**'], ['test']);
});

gulp.task('babel', ['copyConfig'], function () {
  return gulp.src(['src/**/*.js','!src/client/**'])
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('clean', function () {
  return del('lib/');
});

gulp.task('copyConfig', ['clean'], function () {
  return gulp.src('src/**/*.yml')
    .pipe(excludeGitignore())
    .pipe(gulp.dest('lib'));
});

gulp.task('webpackClean', function () {
  return del('dist/');
});

gulp.task('webpack',[ 'webpackClean'],function() {
  return gulp.src(['src/client/index.js','src/client/show.js'])
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});


//https://github.com/sindresorhus/gulp-mocha/issues/1
gulp.doneCallback = function (err) {
  process.exit(err ? 1 : 0);
};

gulp.task('prepublish', ['nsp', 'babel']);
gulp.task('default', ['server-static', 'test']);
