var gulp = require('gulp');
var saas = require('gulp-sass');

gulp.task('saas',function(){
    gulp.src('./saas/**/*.scss')
        .pipe(saas())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch',function(){
    gulp.watch('saas/**/*.sccs',[saas]);
});

gulp.task('default',['saas']);
