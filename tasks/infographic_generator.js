/*
 * grunt-infographic-generator
 * https://github.com/wusley/grunt-infographic-generator
 *
 * Copyright (c) 2014 Wesley Lima
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var fs = require('fs'),
        pathBase = process.env.PWD;

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('infographic_generator', 'Criação estrutura básica para novo infográfico', function( infoName ) {
    
    var options = {
      file: {
        encoding: 'utf8',
        force: true
      },
      folder: {
        mode: 0700
      }
    };

    // // create infographic scss file
    // grunt.file.copy(pathBase + '/app/styles/infographics/_info-base.scss', pathBase + '/app/styles/infographics/_info-' + infoName + '.scss', options.copy);

    grunt.file.mkdir(pathBase + '/app/images/info-sprite/' + infoName, options.folder);
    // create infographic sprites folder
    grunt.file.copy(pathBase + '/app/images/info-sprite/base', pathBase + '/app/images/info-sprite/' + infoName, options.copy);

  //   grunt.file.copy(pathBase + '/app/images/info-sprite/base/', pathBase + '/app/images/info-sprite/' + infoName + '/sprite/', options);
  });
};