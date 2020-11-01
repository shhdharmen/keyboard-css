var argv = require( 'argv' );

argv.option([{ name: 'version', short: 'v', type: 'string' }]);

const args = argv.run();

const version = args.options.version;

console.log(version);