var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-cssmin');

gulp.task('sass', function() {
	gulp.src('./src/sass/*.scss')
		.pipe(plumber(function(err) {
			console.log(err.message);
			this.emit('end');
		}))
		.pipe(sass())
		.pipe(cssmin())
		.pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function() {
	gulp.watch('./src/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
