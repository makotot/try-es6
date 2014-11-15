var gulp = require('gulp'),
  to5 = require('gulp-6to5'),
  connect = require('gulp-connect'),
  sourcemap = require('gulp-sourcemaps'),
  del = require('del'),
  concat = require('gulp-concat'),
  traceur = require('gulp-traceur'),
  runSequence = require('run-sequence');


gulp.task('clean', del.bind(null, ['./build']));

gulp.task('compile-to5', function () {
  return gulp.src('./src/js/*.js')
    .pipe(sourcemap.init())
    .pipe(to5())
    .pipe(concat('to5-app.js'))
    .pipe(sourcemap.write())
    .pipe(gulp.dest('./build/js'))
    .pipe(connect.reload());
});

gulp.task('compile-traceur', function () {
  return gulp.src('./src/js/*.js')
    .pipe(sourcemap.init())
    .pipe(traceur())
    .pipe(concat('traceur-app.js'))
    .pipe(sourcemap.write())
    .pipe(gulp.dest('./build/js'))
    .pipe(connect.reload());
});

gulp.task('copy', function () {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

gulp.task('connect', function () {
  connect.server({
    root: './build',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['copy']);
  gulp.watch(['./src/**/*.js'], ['compile-to5', 'compile-traceur']);
});


gulp.task('compile', function (done) {
  runSequence('clean', [
    'compile-to5',
    'compile-traceur',
    'copy'
  ]);
});

gulp.task('default', ['compile']);
gulp.task('serve', ['compile', 'connect', 'watch']);
