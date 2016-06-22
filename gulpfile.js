var gulp = require('gulp')
var esprima = require('esprima')
var ejs = require('gulp-ejs')

var root = 'static_modules'
var target = '.static_modules'

gulp.task('js', function() {
  var stream = gulp.src(['./static_modules/*.js'])
  .pipe(gulp.dest('./assets/mod/'))
  .pipe(uglify())
  .pipe(debug({title: 'unicorn:'}))
  .pipe(gulp.dest('./public/mod/'))
})
