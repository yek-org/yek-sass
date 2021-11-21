const gulp = require('gulp');
const concat = require('gulp-concat');

// by cli
gulp.task('default', function () {
  return gulp
    .src('src/**/*.scss')
    .pipe(concat('index.scss'))
    .pipe(gulp.dest('./dist/'));
});
