var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('default', ['lint', 'test'] );

gulp.task('lint', function() {
  return gulp.src([
    'app/**/*.js',
    'generators/**/*.js',
    '!generators/templates/**/*',
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
  return gulp.src([
    'test/**/*.js',
    '!test/temp/**'
  ], {read: false})
    .pipe(mocha());
});
