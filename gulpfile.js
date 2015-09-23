var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('styles', function () {
    gulp.src('./scss/*.scss')
            .pipe(sass()
            .on('error', function (err) {
                notify().write(err);
                this.emit('end');
            }))
        .pipe(gulp.dest('./css'))
        .pipe(notify('It worked!'));
});
gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['styles']);
});