const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

// by cli
gulp.task('default', function () {
  return (
    gulp
      // .src('src/**/*.scss')
      .src(['src/**/*.scss', '!src/**/_index.scss'])
      .pipe(sourcemaps.init())
      .pipe(concat('index.scss'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/'))
  );
});
