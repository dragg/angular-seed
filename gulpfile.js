var gulp = require('gulp');
var concat = require('gulp-concat');
var paths = require('./gulp.config.json');
var watch = require('gulp-watch');

gulp.task('default', ['js', 'copyindex', 'copytemplates'],function() {

});

gulp.task('js', function() {
    return gulp.src([].concat(paths.js))
     .pipe(concat('app.js'))
     .pipe(gulp.dest('./public/build/js/'));
});

gulp.task('copyindex', function() {
    return gulp.src(paths.index)
        .pipe(gulp.dest(paths.build.index));
});

gulp.task('copytemplates', function() {
    return gulp.src([paths.templates, '!' + paths.index])
        .pipe(gulp.dest(paths.build.views));
});

gulp.task('watch', function() {
    gulp.watch([paths.templates, '!' + paths.index], ['copytemplates']);

    gulp.watch(paths.index, ['copyindex']);

    gulp.watch([].concat(paths.js), ['js']);
});
