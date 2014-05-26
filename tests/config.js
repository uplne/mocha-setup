require.config({
    baseUrl: '.',
    urlArgs: 'bust=' + (new Date()).getTime(),
    paths: {
        'mocha': '../../node_modules/mocha/mocha',
        'chai': '../../node_modules/chai/chai',
        'sinon': '../../node_modules/sinon/pkg/sinon'
    },
    shim: {
        'mocha': {
            exports: 'mocha'
        },
        'sinon': {
            exports: 'sinon'
        },
        'chai': {
            exports: 'chai'
        }
    }
});

require(['require', 'mocha'], function (require, mocha) {
    'use strict';

    mocha.setup('bdd');

    require(['test_spec'], function () {
        (window.mochaPhantomJS || mocha).run();
    });
});
