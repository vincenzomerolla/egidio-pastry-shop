/*
  This is an EXAMPLE gulpfile.js
  You'll want to change it to match your project.
  Find plugins at https://npmjs.org/browse/keyword/gulpplugin
*/
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
//var minifyHTML = require('gulp-minify-html');
var autoprefixer = require('gulp-autoprefixer');
//var imagemin = require('gulp-imagemin');
//var pngcrush = require('imagemin-pngcrush');
var rename = require('gulp-rename');


gulp.task('scripts', function () {
  // Minify and copy all JavaScript (except vendor scripts)

  gulp.src([
    'public/bower_components/jquery/dist/jquery.js',
    'public/bower_components/jquery.scrollTo/jquery.scrollTo.js',
    'public/bower_components/FitText.js/jquery.fittext.js',
    'public/bower_components/FlexSlider/jquery.flexslider-min.js',
    'public/bower_components/blueimp-gallery/js/jquery.blueimp-gallery.min.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/scripts/build/'));


  gulp.src('public/scripts/main.js')
    //.pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/scripts/build/'));

});



gulp.task('sass', function () {
  gulp.src('public/styles/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('public/styles/main.css'));
});



// The default task (called when you run `gulp`)
gulp.task('default', function () {
  gulp.run('scripts', 'sass', 'partials');

  // Watch files and run tasks if they change
  gulp.watch('public/scripts/**', ['scripts']);

  gulp.watch('public/styles/**', ['sass']);

});