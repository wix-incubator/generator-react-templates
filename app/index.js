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
            this._fsCopy('_package.json', 'package.json');
            this._fsCopy('_bower.json', 'bower.json');
            this._fsCopy(this.modules + '/src/hello.js', 'src/hello.js');
            this._fsCopy(this.modules + '/src/hello.rt', 'src/hello.rt');
            this._fsCopy(this.modules + '/src/index.html', 'src/index.html');
            if (this.modules === 'amd' || this.modules === 'commonjs') {
                this._fsCopy(this.modules + '/src/main.js', 'src/main.js');
            }

            //this.gruntfile.insertConfig("compass", "{ watch: { watch: true } }");
            //this.gruntfile.registerTask('build', 'compass');
            //this.gruntfile.registerTask('build', ['compass', 'uglify']);
        },

        projectfiles: function () {
            this._fsCopy('editorconfig', '.editorconfig');
            this._fsCopy('jshintrc', '.jshintrc');
            this._fsCopy('_package.json', 'package.json');
            if (this.modules === 'none') {
                var fs = require('fs');
                var eslintText = fs.readFileSync(this.templatePath('eslintrc'));
                var eslint = JSON.parse(eslintText);
                eslint.globals.React = true;
                eslint.globals._ = true;
                fs.writeFileSync(this.destinationPath('.eslintrc'), JSON.stringify(eslint, undefined, 2));
            } else {
                this._fsCopy('eslintrc', '.eslintrc');
            }

            this._fsCopy('gitignore', '.gitignore');

            this.fs.copyTpl(
                this.templatePath('Gruntfile.js'),
                this.destinationPath('Gruntfile.js'),
                {modules: this.modules}
            );

            this._fsCopy('README.md', 'README.md');
        }
    },

    _fsCopy: function (src, dest) {
        this.fs.copy(this.templatePath(src), this.destinationPath(dest));
    },

    install: function () {
        //this.npmInstall(['grunt', 'grunt-contrib-clean', 'grunt-contrib-watch', 'grunt-react-templates', 'grunt-eslint'], {saveDev: true});
        //this.installDependencies({
        //    skipInstall: this.options['skip-install']
        //});
    }
});
