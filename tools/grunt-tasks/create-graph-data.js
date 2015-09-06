module.exports = function (grunt, options) {
	grunt.config.merge({
		env : {
			"add-xsltproc-to-path" : {
				push: {
					PATH : "C:/Projects/pg/dependency-graph/tools/xsltproc"
				}
			}
		},
		xsltproc: {
			options: {
				stylesheet: "C:/Projects/pg/dependency-graph/src/pick-out-dependencies.xsl"
			},
			compile: {
				files: {
						'C:/Projects/pg/dependency-graph/output/graph-data.js': ['C:/Projects/pg/dependency-graph/src/pack-js.xml']
				}
			}
		}
	});
	grunt.registerTask("create-graph-data", ["env:add-xsltproc-to-path", "xsltproc:compile"]);
};