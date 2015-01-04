'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('react-templates:app', function () {
    describe('modules none', function () {
        before(function (done) {
            console.log('' + path.join(os.tmpdir(), './temp-test'));
            helpers.run(path.join(__dirname, '../app'))
                .inDir(path.join(os.tmpdir(), './temp-test'))
                .withOptions({'skip-install': true})
                .withPrompt({
                    modules: 'none'
                })
                .on('end', done);
        });

        it('creates files', function () {
            assert.file([
                'bower.json',
                'package.json',
                '.editorconfig',
                'Gruntfile.js',
                '.gitignore',
                '.eslintrc',
                '.jshintrc',
                'src/hello.js',
                'src/hello.rt',
                'src/index.html'
            ]);
            //assert.fileContent()
        });
    });

    describe('modules amd', function () {
        before(function (done) {
            console.log('' + path.join(os.tmpdir(), './temp-test'));
            helpers.run(path.join(__dirname, '../app'))
                .inDir(path.join(os.tmpdir(), './temp-test'))
                .withOptions({'skip-install': true})
                .withPrompt({
                    modules: 'amd'
                })
                .on('end', done);
        });

        it('creates files', function () {
            assert.file([
                'bower.json',
                'package.json',
                '.editorconfig',
                'Gruntfile.js',
                '.gitignore',
                '.eslintrc',
                '.jshintrc',
                'src/hello.js',
                'src/hello.rt',
                'src/main.js',
                'src/index.html'
            ]);
            //assert.fileContent()
        });
    });

    describe('modules commonjs', function () {
        before(function (done) {
            console.log('' + path.join(os.tmpdir(), './temp-test'));
            helpers.run(path.join(__dirname, '../app'))
                .inDir(path.join(os.tmpdir(), './temp-test'))
                .withOptions({'skip-install': true})
                .withPrompt({
                    modules: 'commonjs'
                })
                .on('end', done);
        });

        it('creates files', function () {
            assert.file([
                'bower.json',
                'package.json',
                '.editorconfig',
                'Gruntfile.js',
                '.gitignore',
                '.eslintrc',
                '.jshintrc',
                'src/hello.js',
                'src/hello.rt',
                'src/main.js',
                'src/index.html'
            ]);
            //assert.fileContent()
        });
    });
});
