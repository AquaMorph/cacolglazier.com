var gulp = require('gulp'),
    ftp = require('vinyl-ftp'),
    gutil = require('gulp-util')
    minimist = require('minimist'),
    args = minimist(process.argv.slice(3));


gulp.task('deploy', function() {
    var connection = ftp.create({
        host: args.url,
        user: args.user,
        password: args.password,
        log: gutil.log
    });

    return gulp.src('public/**')
        .pipe(connection.newer('/'))
        .pipe(connection.dest('/'));
});