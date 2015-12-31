var gulp = require('gulp'),
    ftp = require('vinyl-ftp'),
    gutil = require('gulp-util')

gulp.task('deploy', function() {
    var connection = ftp.create({
        host: process.env.FTP_URL,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD,
        log: gutil.log
    });

    var output = 'public/**';

    return gulp.src(output, {
        base: './public',
        buffer: false
    })
        .pipe(connection.newer('/'))
        .pipe(connection.dest('/'));
});