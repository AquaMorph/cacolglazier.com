var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function() {
    var connection = ftp.create({
        host: args.url,
        user: args.user,
        password: args.password,
        log: gutil.log
    });

    var output = '';

    return gulp.src('public/**')
        .pipe(connection.newer('/'))
        .pipe(connection.dest('/'));
});