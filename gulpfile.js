// -- Importando Plugins -- //

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//-------------------------------------------------------//

// -- Fuções dos Plugins -- //

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

//-------------------------------------------------------//

// -- Importando os arquivos e observando as alterações em paralelo -- //

exports.default = styles 

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}

//-------------------------------------------------------//