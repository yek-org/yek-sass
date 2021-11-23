const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

// by cli
gulp.task('default', function () {
  return (
    gulp
      // .src('src/**/*.scss')
      // .src(['src/**/*.scss', '!src/**/_index.scss'])
      .src([
        'src/_at_the_head.scss',
        'src/_dependencies.scss',
        'src/utils/string/_length.scss',
        'src/utils/string/_split.scss',
        'src/utils/_units.scss',
        'src/mixins/_flex.scss',
        'src/mixins/_size.scss',
        'src/mixins/_position.scss',
        'src/mixins/_breakpoints.scss',
        'src/mixins/_mixins.scss',
        'src/mixins/_transform.scss',
        'src/mixins/_style.scss',
      ])
      .pipe(sourcemaps.init())
      .pipe(concat('index.scss'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/'))
  );
});
