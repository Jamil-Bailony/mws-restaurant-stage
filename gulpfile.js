const gulp = require('gulp');
const responsive = require('gulp-responsive');
const del = require('del');
const runSequence = require('run-sequence');

// Create responsive images for jpg files
gulp.task('jpg-images', function() {
  return gulp.src('images/**/*.jpg')
    .pipe(responsive({
      // Resize all jpg images to three different sizes: 300, 600 and 800
      '**/*.jpg': [{
        width: 800,
        quality: 70,
        rename: { suffix: '-large-800w'}
      }, {
        width: 600,
        quality: 50,
        rename: { suffix: '-medium-600w'}
      }, {
        width: 300,
        quality: 40,
        rename: { suffix: '-small-300w'}
      }]
    },))
    .pipe(gulp.dest('img/'));
});

// Just copy any other images to img folder
gulp.task('other-images', function() {
  return gulp.src(['!images/**/*.jpg', 'images/**/*.*'])
    .pipe(gulp.dest('img/'));
});

// clean img folder
gulp.task('clean', function(done) {
  return del(['img/'], done);
});

// Run this task for your images.
gulp.task("images", function(done) {
  runSequence(
    'clean',
    ['jpg-images','other-images'],
    done
  );
});
