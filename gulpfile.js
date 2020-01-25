const gulp = require('gulp');
const sass = require('gulp-sass');


function defaultTask(task) {
    task();
}

gulp.task('sass', () => {
    gulp.src('./src/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./src/css'));
});

defaultTask(gulp.task('sass'));

exports.default = defaultTask
