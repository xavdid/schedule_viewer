var paths = {
  js: ['public/js/*.js'],
  scss: ['source/*.scss'],
  haml: ['source/*.haml', '!source/index.haml'],
  haml_index: ['source/index.haml']
};

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var wiredep = require('wiredep').stream;

gulp.task('bower', function () {
  gulp.src('./public/index.html')
    .pipe(wiredep({
      
    }))
    .pipe(gulp.dest('./public'));
});

// lint js
gulp.task('lint', function() {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// compile sass
gulp.task('sass', function () {
  gulp.src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest('./public/css'));
});

// gulp.task('haml', function () {
//   gulp.src(paths.haml)
//     .pipe(haml({compiler: 'visionmedia'}))
//     .pipe(gulp.dest('./public/views'));
// });

// gulp.task('haml_index', function () {
//   gulp.src(paths.haml_index)
//     .pipe(haml({compiler: 'visionmedia'}))
//     .pipe(gulp.dest('./public'));
// });

// 
gulp.task('watch', function(){
  gulp.watch(paths.js, ['lint']);
  gulp.watch(paths.scss, ['sass']);
  // gulp.watch('source/*.haml', ['haml', 'haml_index']);
});
