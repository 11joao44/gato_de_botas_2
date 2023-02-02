// -- Importando Plugins -- //

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

//-------------------------------------------------------//

// -- Fuções dos Plugins -- //

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

//-------------------------------------------------------//

// -- Importando os arquivos e observando as alterações em paralelo -- //

exports.default = gulp.parallel(styles, images) 

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}

//-------------------------------------------------------//