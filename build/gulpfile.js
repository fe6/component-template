'use strict';

var gulp = require( 'gulp' );
var postcss = require( 'gulp-postcss' );
var cssmin = require( 'gulp-cssmin' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sass = require( 'gulp-sass' );
var salad = require( 'postcss-salad' )( require( './salad.config.json' ) );
var header = require('gulp-header');
var pkg = require( '../package.json' );
// 公共的 banner
const banner = require( './banner' )(true);

gulp.task( 'compile', function() {
  gulp.src( '../water/**/*.scss' )
      .pipe( sass.sync().on( 'error', sass.logError ) )
      .pipe( autoprefixer( { browsers: salad.browsers, cascade: false } ) )
      .pipe( postcss( [ salad ] ) ).pipe( cssmin() )
      .pipe(header( banner ))
      .pipe( gulp.dest( '../dist/' ) );
} );

// gulp.task( 'copysass', function() {
//   return gulp.src( '../src/styles/**' ).pipe( cssmin() ).pipe( gulp.dest( '../dist/static/sass' ) );
// } );
//
// gulp.task( 'copyfont', function() {
//   return gulp.src( '../src/styles/iconfont/fonts/**' ).pipe( cssmin() ).pipe( gulp.dest( '../dist/static/css/iconfont/fonts' ) );
// } );

gulp.task( 'default', [ 'compile' ] );
