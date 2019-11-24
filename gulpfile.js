const gulp = require('gulp');
const useref = require('gulp-useref');
gulp.task('default' , function(done) {
	buildForWeb("build/stochsd-web/");
	buildForDesktop("build/package.nw/");

	// https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async
	done();
});

function buildForDesktop(rootFolder) {
	// License
	gulp.src('LICENSE.txt')
	.pipe(gulp.dest(rootFolder));

	// Launcher
	gulp.src('index.html')
	.pipe(gulp.dest(rootFolder));

	// index.js
	gulp.src('index.js')
	.pipe(gulp.dest(rootFolder));

	// OpenSystemDynamics
	gulp.src('OpenSystemDynamics/**')
	.pipe(gulp.dest(rootFolder+'OpenSystemDynamics'));
	
	// package.json
	gulp.src('package.json')
	.pipe(gulp.dest(rootFolder));

	// icons 
	gulp.src('icons/**')
	.pipe(gulp.dest(rootFolder+'icons'));

	// MultiSimulationAnalyser
	gulp.src('MultiSimulationAnalyser/**')
	.pipe(gulp.dest(rootFolder+'MultiSimulationAnalyser'));
}

function buildForWeb(rootFolder) {
	// Launcher
	gulp.src('index.html')
	.pipe(gulp.dest(rootFolder));

	// OpenSystemDynamics
	gulp.src('OpenSystemDynamics/src/index.html')
	.pipe(useref())
	.pipe(gulp.dest(rootFolder+'OpenSystemDynamics/src'));
	
	gulp.src('OpenSystemDynamics/src/third-party-licenses.html')
	.pipe(gulp.dest(rootFolder+'OpenSystemDynamics/src'));

	gulp.src('OpenSystemDynamics/src/graphics/**')
	.pipe(gulp.dest(rootFolder+'OpenSystemDynamics/src/graphics'));

	gulp.src('OpenSystemDynamics/src/jquery-ui-1.12.1/images/**')
	.pipe(gulp.dest(rootFolder+'OpenSystemDynamics/src/images'));

	// MultiSimulationAnalyser
	gulp.src('MultiSimulationAnalyser/index.html')
	.pipe(useref())
	.pipe(gulp.dest(rootFolder+'MultiSimulationAnalyser'));

	gulp.src('MultiSimulationAnalyser/img/**')
	.pipe(gulp.dest(rootFolder+'MultiSimulationAnalyser/img'));

	gulp.src('MultiSimulationAnalyser/images/**')
	.pipe(gulp.dest(rootFolder+'MultiSimulationAnalyser/images'));

	gulp.src('MultiSimulationAnalyser/icons/**')
	.pipe(gulp.dest(rootFolder+'MultiSimulationAnalyser/icons'));

	gulp.src('MultiSimulationAnalyser/im_img/**')
	.pipe(gulp.dest(rootFolder+'MultiSimulationAnalyser/im_img'));
}
