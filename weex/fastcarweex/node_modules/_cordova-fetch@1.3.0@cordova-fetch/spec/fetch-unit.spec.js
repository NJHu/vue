/**
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

/* eslint-env jasmine */
var fetch = require('../index.js');
var shell = require('shelljs');
var fs = require('fs');
var Q = require('q');
var superspawn = require('cordova-common').superspawn;

describe('unit tests for index.js', function () {
    beforeEach(function () {
        spyOn(superspawn, 'spawn').and.returnValue(true);
        spyOn(shell, 'mkdir').and.returnValue(true);
        spyOn(shell, 'which').and.returnValue(Q());
        spyOn(fetch, 'isNpmInstalled').and.returnValue(Q());
        spyOn(fetch, 'getPath').and.returnValue('some/path');
        spyOn(fs, 'existsSync').and.returnValue(false);
    });

    it('npm install should be called with production flag (default)', function (done) {
        var opts = { cwd: 'some/path', production: true, save: true};
        fetch('platform', 'tmpDir', opts)
            .then(function (result) {
                expect(superspawn.spawn).toHaveBeenCalledWith('npm', jasmine.stringMatching(/production/), jasmine.any(Object));
            })
            .fail(function (err) {
                console.error(err);
                expect(err).toBeUndefined();
            })
            .fin(done);
    });

    it('save-exact should be true if passed in', function (done) {
        var opts = { cwd: 'some/path', save_exact: true };
        fetch('platform', 'tmpDir', opts)
            .then(function (result) {
                expect(superspawn.spawn).toHaveBeenCalledWith('npm', jasmine.stringMatching(/save-exact/), jasmine.any(Object));
            })
            .fail(function (err) {
                console.error(err);
                expect(err).toBeUndefined();
            })
            .fin(done);
    });

    it('noprod should turn production off', function (done) {
        var opts = { cwd: 'some/path', production: false};
        fetch('platform', 'tmpDir', opts)
            .then(function (result) {
                expect(superspawn.spawn).not.toHaveBeenCalledWith('npm', jasmine.stringMatching(/production/), jasmine.any(Object));
            })
            .fail(function (err) {
                console.error(err);
                expect(err).toBeUndefined();
            })
            .fin(done);
    });

    it('when save is false, no-save flag should be passed through', function (done) {
        var opts = { cwd: 'some/path', production: true, save: false};
        fetch('platform', 'tmpDir', opts)
            .then(function (result) {
                expect(superspawn.spawn).toHaveBeenCalledWith('npm', jasmine.stringMatching(/--no-save/), jasmine.any(Object));
            })
            .fail(function (err) {
                console.error(err);
                expect(err).toBeUndefined();
            })
            .fin(done);
    });
});
