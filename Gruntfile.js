// Gruntfile.js for tennisform
module.exports = function(grunt) { // the general grunt function that is run
	
	// the require.js compile options
	var compileOptions = {
		baseUrl: 'src/js',
		mainConfigFile: 'src/js/app-config.js',
		include: ['vendor/almond', 'main'],
		out: 'assets/js/app.min.js',
		removeCombined: false,
		findNestedDependencies: true,
		optimize: 'uglify2',
		uglify2: {
			mangle: false
		}
	};
	
	grunt.initConfig({ // here we setup our config object with package.json and all the tasks
	
		pkg: grunt.file.readJSON('package.json'),
		
		// Sass tasks: compile and compress to our finished assets/css directory
		sass: { // sass tasks
			dist: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'assets/css/app.min.css': 'src/css/sass/app.scss' // this is our main scss file
				}
			}
		},
		
		requirejs: {
			compile: {
				options: compileOptions
			}
		}, 
		
		// copy our finished files elsewhere so all this develop stuff can remain outside the rest of the project
		copy: {
			css: {
				files: [
					{
						src: 'assets/css/app.min.css', 
						dest: '/some/other/assets/directory/css/app.min.css'
					}
				]
			},
			js: {
				files: [
					{
						src: 'assets/js/app.min.js',
						dest: '/some/assets/other/directory/js/app.min.js'
					}
				]
			}
		}
		
		// look for changes in either the Sass/css files or any of the js or template files
		watch: { // watch task for general work
			sass: {
				files: ['src/css/sass/**/*.scss']
				tasks: ['sass'] // add copy:css if desired
			},
			requirejs: {
				files: ['src/js/**/*.js', 'src/js/**/*.tpl'],
				tasks: ['requirejs'] // add copy:js if desired
			}
		},
		
		
	});
	
	// all the plugins that is needed for above tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	// registering the default task that we're going to use along with watch
	grunt.registerTask('default', ['watch']);
	// compile everything "manually"
	grunt.registerTask('compile', ['sass', 'requirejs']);
	// just the css
	grunt.registerTask('compilecss', ['sass']);
	// or the js
	grunt.registerTask('compilejs', 'requirejs');
	

};