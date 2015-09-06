module.exports = function (grunt, options) {
	grunt.config.merge({
		"copy": {
			src: {
				files: [{
					expand: true,
					cwd: options.srcDir,
					src: "**/*.*",
					dest: options.outputDir
				}]
			}
		}
	});
	grunt.registerTask("build", ["copy:src"]);
};