var typescript = require('rollup-plugin-typescript2');

var pkg = require('../package.json');

var version = pkg.version;

var banner = 
`/*!
 * ${pkg.name} ${version} (https://github.com/lerypapa/flat-local-storage)
 * API https://github.com/lerypapa/flat-local-storage/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} lerypapa. All Rights Reserved
 * Licensed under MIT (https://github.com/lerypapa/flat-local-storage/blob/master/LICENSE)
 */
`;

function getCompiler(opt) {
    opt = opt || {
        tsconfigOverride: { compilerOptions : { module: 'ES2015' } }
    }

    return typescript(opt);
}

exports.name = 'flat-local-storage';
exports.banner = banner;
exports.getCompiler = getCompiler;
