<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->
# Cordova-fetch Release Notes

### 1.3.0 (Dec 14, 2017)
* [CB-13055](https://issues.apache.org/jira/browse/CB-13055): added workaround for when `jsonDiff` has more than one different key. 
* Support git shortlink package references

### 1.2.1 (Oct 27, 2017)
* [CB-13504](https://issues.apache.org/jira/browse/CB-13504) updating `package.json` versions for cordova-fetch 1.2.1 release
* [CB-13501](https://issues.apache.org/jira/browse/CB-13501) : added support for node 8
* [CB-13492](https://issues.apache.org/jira/browse/CB-13492) : updating opts.save and including a tests for no-save
* [CB-13380](https://issues.apache.org/jira/browse/CB-13380) Incremented package version to -dev

### 1.2.0 (Oct 04, 2017)
* [CB-13353](https://issues.apache.org/jira/browse/CB-13353) added `saveexact` as an option and updated fetch test
* [CB-13308](https://issues.apache.org/jira/browse/CB-13308), [CB-13252](https://issues.apache.org/jira/browse/CB-13252) fix issue with plugins turning into symlinks on restore
* [CB-13303](https://issues.apache.org/jira/browse/CB-13303) setting production flag to true by default during npm install
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) setting up `eslint` and removing `jshint`
* [CB-13010](https://issues.apache.org/jira/browse/CB-13010) Improve logic for searching packages which being installed from `git url`
* [CB-11980](https://issues.apache.org/jira/browse/CB-11980) fixed incorrect `appveyor` image
* [CB-12786](https://issues.apache.org/jira/browse/CB-12786) Improve logic for searching plugin id in case of module already exists in `node_modules`
* [CB-12762](https://issues.apache.org/jira/browse/CB-12762) updated `packageJson` to github mirrors
* [CB-12787](https://issues.apache.org/jira/browse/CB-12787) Fix plugin installation with `--link` option
* [CB-12738](https://issues.apache.org/jira/browse/CB-12738) Cordova ignores plugin dependency version on **windows** platform

### 1.1.0 (May 02, 2017)
* [CB-12665](https://issues.apache.org/jira/browse/CB-12665): removed `enginestrict` since it is deprecated
* added support for dealing with local path targets

### 1.0.2 (Jan 17, 2017)
* [CB-12358](https://issues.apache.org/jira/browse/cb-12358) updated cordova-common dep for cordova-fetch to 2.0.0

### 1.0.0 (May 12, 2016)
* [CB-9858](https://issues.apache.org/jira/browse/CB-9858) Added jasmine tests
* [CB-9858](https://issues.apache.org/jira/browse/CB-9858) Added `npm uninstall` method to cordova-fetch
* [CB-9858](https://issues.apache.org/jira/browse/CB-9858) Initial implementation of `cordova-fetch` module
