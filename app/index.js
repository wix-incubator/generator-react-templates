'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the mind-blowing' + chalk.red('ReactTemplates') + ' generator!'
        ));

        var prompts = [{
                           type: 'input',
                           name: 'name',
                           message: 'Your project name',
                           default: this.appname // Default to current folder name
                       },
                       {
                           type: 'list',
                           name: 'modules',
                           message: 'Use modules system',
                           choices: ['amd', 'commonjs', 'none'],
                           default: 'amd'
                       }];

        this.prompt(prompts, function (props) {
            this.name = props.name;
            this.modules = props.modules;

            done();
        }.bind(this));
    },

    writing: {
        app: function () {
            this.fs.copy(
                this.templatePath('_package.json'),
                this.destinationPath('package.json')
            );
            this.fs.copy(
                this.templatePath('_bower.json'),
                this.destinationPath('bower.json')
            );

            this._fsCopy(this.modules + '/src/hello.js', 'src/hello.js');
            this._fsCopy(this.modules + '/src/hello.rt', 'src/hello.rt');
            this._fsCopy(this.modules + '/src/index.html', 'src/index.html');
            if (this.modules === 'amd' || this.modules === 'commonjs') {
                this._fsCopy(this.modules + '/src/main.js', 'src/main.js');
            }
        },

        projectfiles: function () {
            this.fs.copy(
                this.templatePath('editorconfig'),
                this.destinationPath('.editorconfig')
            );
            this.fs.copy(
                this.templatePath('jshintrc'),
                this.destinationPath('.jshintrc')
            );
            this._fsCopy('eslintrc', '.eslintrc');
            this._fsCopy('gitignore', '.gitignore');
            this._fsCopy('Gruntfile.js', 'Gruntfile.js');
            this._fsCopy('README.md', 'README.md');
        }
    },

    _fsCopy: function (src, dest) {
        this.fs.copy(this.templatePath(src), this.destinationPath(dest));
    },

    install: function () {
        this.npmInstall(['grunt', 'grunt-contrib-clean', 'grunt-contrib-watch', 'grunt-react-templates', 'grunt-eslint'], {saveDev: true});
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    }
});
