const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefix = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
// const banner = require('gulp-banner');

gulp.task('default', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefix({
      cascade: false
    }))
    .pipe(cssnano())
    // .pipe(banner('@charset "utf-8";'))
    .pipe(gulp.dest('./css'));
});
