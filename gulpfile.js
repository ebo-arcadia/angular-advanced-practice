const gulp = require("gulp")

gulp.task("copy-dist-files-to-ready-to-deploy-folder", () => {
    return gulp.src("./dist/advanced-concept/**/*").pipe(gulp.dest("/Users/ebolee/repo/angular/advanced-concept/read-to-deploy"))
});

gulp.task("default", () => {
    gulp.watch("./dist/advanced-concept", gulp.series("copy-dist-files-to-ready-to-deploy-folder"));
});