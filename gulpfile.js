var gulp = require('gulp');
var sass = require('gulp-sass');

/*configuracion de las tareas*/

gulp.task('sass', function(){ //tarea para añadir los estilos al css
  return gulp.src('src/assets/style/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('src/assets/style'))
})

//tarea para copiar los archivos del area de trabajo al area de distribución solo si hay cambios en SASS
gulp.task('copy',['sass'], function(){
  gulp.src('src/**/*')
  .pipe(gulp.dest('dist/'))
})
