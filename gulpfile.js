var gulp = require('gulp'),
    ftp = require('vinyl-ftp'),
    gutil = require('gulp-util')

gulp.task('deploy', function() {
    var connection = ftp.create({
        host: process.env.FTP_URL,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD,
        parallel: 2,
        log: gutil.log
    });

    var output = '.';

    return gulp.src(output, {
        base: '.',
        buffer: false
    })
      .pipe(connection.newer('/'))
      .pipe(connection.dest('/'));
})