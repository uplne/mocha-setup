define([
    'chai',
    'sinon',
    'jquery',
    '../../js/test'
], function (chai, sinon, $, Test) {
    'use strict';

    var expect   = chai.expect,
        sandbox;

    describe("Test", function() {

        beforeEach(function() {
            sandbox = sinon.sandbox.create();
        });

        afterEach(function() {
            sandbox.restore();
        });

        describe("Initialization", function() {

            it("should intialize", function() {

            });
        });
    });
});
