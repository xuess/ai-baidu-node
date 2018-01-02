'use strict';
/**
 * Copyright (c) 2016 Baidu.com, Inc. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * @file AipFace
 * @author baiduAip
 */
const BaseClient = require('./client/baseClient');

const RequestInfo = require('./client/requestInfo');

const objectTools = require('./util/objectTools');

const HttpClient = require('./http/httpClient');

const EventPromise = require('./util/eventPromise');

const METHOD_POST = 'POST';

const PATH_FACE_DETECT = '/rest/2.0/face/v1/detect';
const PATH_FACE_MATCH = '/rest/2.0/face/v2/match';

const PATH_FACEFIND_ADD = '/rest/2.0/face/v2/faceset/user/add';
const PATH_FACEFIND_DELETE = '/rest/2.0/face/v2/faceset/user/delete';
const PATH_FACEFIND_UPDATE = '/rest/2.0/face/v2/faceset/user/update';
const PATH_FACEFIND_VERIFY = '/rest/2.0/face/v2/verify';
const PATH_FACEFIND_IDENTIFY = '/rest/2.0/face/v2/identify';
const PATH_FACEFIND_GETUSER = '/rest/2.0/face/v2/faceset/user/get';
const PATH_FACEFIND_GETGROUPLIST = '/rest/2.0/face/v2/faceset/group/getlist';
const PATH_FACEFIND_GETGROUPUSER = '/rest/2.0/face/v2/faceset/group/getusers';
const PATH_FACEFIND_GROUPADDUSER = '/rest/2.0/face/v2/faceset/group/adduser';
const PATH_FACEFIND_GROUPDELTEUSER = '/rest/2.0/face/v2/faceset/group/deleteuser';


const scope = require('./const/devScope').DEFAULT;


/**
 * AipFace类，构造调用色情识别对象
 *
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
class AipFace extends BaseClient {
    constructor(appId, ak, sk) {
        super(appId, ak, sk);
    }
    detect(image, options) {
        let param = {image: image};
        let promise = this.registTask(this.detectImpl, objectTools.merge(param, options));
        return promise;
    }
    detectImpl(param) {
        let promise = new EventPromise();
        let httpClient = new HttpClient();
        let requestInfo = new RequestInfo(PATH_FACE_DETECT,
            scope, param, METHOD_POST);
        if (this.preRequest(requestInfo)) {
            httpClient.postWithInfo(requestInfo).on(HttpClient.EVENT_DATA, function (data) {
                promise.resolve(data);
            }.bind(this)).bindErrorEvent(promise);
        } else {
            return this.registTask(this.detectImpl, param);
        }
        return promise;
    }
    match(imageArray, options) {
        let param = {images: imageArray.join(',')};
        let promise = this.registTask(this.matchImpl, objectTools.merge(param, options));
        return promise;
    }
    matchImpl(param) {
        let promise = new EventPromise();
        let httpClient = new HttpClient();
        let requestInfo = new RequestInfo(PATH_FACE_MATCH,
            scope, param, METHOD_POST);
        if (this.preRequest(requestInfo)) {
            httpClient.postWithInfo(requestInfo).on(HttpClient.EVENT_DATA, function (data) {
                promise.resolve(data);
            }.bind(this)).bindErrorEvent(promise);
        } else {
            return this.registTask(this.matchImpl, param);
        }
        return promise;
    }
    addUser(uid, userInfo, groupId, image, options) {
        let param = {
            uid: uid,
            user_info: userInfo,
            group_id: objectTools.ensureArray(groupId).join(','),
            image: image
        };
        let promise = this.registTask(this.addUserImpl, objectTools.merge(param, options));
        return promise;
    }
    addUserImpl(param) {
        let promise = new EventPromise();
        let httpClient = new HttpClient();
        let requestInfo = new RequestInfo(PATH_FACEFIND_ADD,
            scope, param, METHOD_POST);
        if (this.preRequest(requestInfo)) {
            httpClient.postWithInfo(requestInfo).on(HttpClient.EVENT_DATA, function (data) {
                promise.resolve(data);
            }.bind(this)).bindErrorEvent(promise);
        } else {
            return this.registTask(this.addUserImpl, param);
        }
        return promise;
    }
    deleteUser(uid, options) {
        let param = {
            uid: uid
        };
        let promise = this.registTask(this.deleteUserImpl, objectTools.merge(param, options));
        return promise;
    }
    deleteUserImpl(param) {
        let promise = new EventPromise();
        let httpClient = new HttpClient();
        let requestInfo = new RequestInfo(PATH_FACEFIND_DELETE,
            scope, param, METHOD_POST);
        if (this.preRequest(requestInfo)) {
            httpClient.postWithInfo(requestInfo).on(HttpClient.EVENT_DATA, function (data) {
                promise.resolve(data);
            }.bind(this)).bindErrorEvent(promise);
        } else {
            return this.registTask(this.deleteUserImpl, param);
        }
        return promise;
    }
    updateUser(uid, userInfo, groupId, image, options) {
        let param = {
            uid: uid,
            user_info: userInfo,
            group_id: groupId,
            image: image
        };
        let promise = this.registTask(this.updateUserImpl, objectTools.merge(param, options));
        return promise;
    }
    updateUserImpl(param) {
        let promise = new EventPromise();
        let httpClient = new HttpClient();
        let requestInfo = new RequestInfo(PATH_FACEFIND_UPDATE,
            scope, param, METHOD_POST);
        if (this.preRequest(requestInfo)) {
            httpClient.postWithInfo(requestInfo).on(HttpClient.EVENT_DATA, function (data) {
                promise.resolve(data);
            }.bind(this)).bindErrorEvent(promise);
        } else {
            return this.registTask(this.updateUserImpl, param);
        }
        return promise;
    }
    verifyUser(uid, groupId, image, options) {
        let param = {
            uid: uid,
            group_id: objectTools.ensureArray(groupId).join(','),
            image: image
        };
        let promise = this.registTask(this.verifyUserImpl, objectTools.merge(param, options));
        return promise;
    }
    verifyUserImpl(param) {
        let promise = new EventPromise();
        let httpClient = new HttpClient();
        let requestInfo = new RequestInfo(PATH_FACEFIND_VERIFY,
            scope, param, METHOD_POST);
        if (this.preRequest(requestInfo)) {
            httpClient.postWithInfo(requestInfo).on(HttpClient.EVENT_DATA, function (data) {
                promise.resolve(data);
            }.bind(this)).bindErrorEvent(promise);
        } else {
            return this.registTask(this.verifyUserImpl, param);
        }
        return promise;
    }
    identifyUser(groupId, image, options) {
        let param = {
            group_id: objectTools.ensureArray(groupId).join(','),
            image: image
        };
        let promise = this.registTask(this.identifyUserImpl, objectTools.merge(param, options));
        return promise;
    }
    identifyUserImpl(param) {
        let promise = new EventPromise();
        let httpClient = new HttpClient();
        let requestInfo = new RequestInfo(PATH_FACEFIND_IDENTIFY,
            scope, param, METHOD_POST);
        if (this.preRequest(requestInfo)) {
            httpClient.postWithInfo(requestInfo).on(HttpClient.EVENT_DATA, function (data) {
                promise.resolve(data);
            }.bind(this)).bindErrorEvent(promise);
        } else {
            return this.registTask(this.identifyUserImpl, param);
        }
        return promise;
    }
    getUser(uid, options) {
        let param = {
            uid: uid
        };
        let promise = this.registTask(this.getUserImpl, objectTools.merge(param, options));
        return promise;
    }
    getUserImpl(param) {
        let promise = new EventPromise();
        let httpClient = new HttpClient();
        let requestInfo = new RequestInfo(PATH_FACEFIND_GETUSER,
            scope, param, METHOD_POST);
        if (this.preRequest(requestInfo)) {
            httpClient.postWithInfo(requestInfo).on(HttpClient.EVENT_DATA, function (data) {
                promise.resolve(data);
            }.bind(this)).bindErrorEvent(promise);
        } else {
            return this.registTask(this.getUserImpl, param);
        }
        return promise;
    }
    getGrouplist(options) {
        let param = {};
        let promise = this.registTask(this.getGrouplistImpl, objectTools.merge(param, options));
        return promise;
    }
    getGrouplistImpl(param) {
        let promise = new EventPromise();
        let httpClient = new HttpClient();
        let requestInfo = new RequestInfo(PATH_FACEFIND_GETGROUPLIST,
            scope, param, METHOD_POST);
        if (this.preRequest(requestInfo)) {
            httpClient.postWithInfo(requestInfo).on(HttpClient.EVENT_DATA, function (data) {
                promise.resolve(data);
            }.bind(this)).bindErrorEvent(promise);
        } else {
            return this.registTask(this.getGrouplistImpl, param);
        }
        return promise;
    }
    getGroupUsers(groupId, options) {
        let param = {
            group_id: groupId
        };
        let promise = this.registTask(this.getGroupUsersImpl, objectTools.merge(param, options));
        return promise;
    }
    getGroupUsersImpl(param) {
        let promise = new EventPromise();
        let httpClient = new HttpClient();
        let requestInfo = new RequestInfo(PATH_FACEFIND_GETGROUPUSER,
            scope, param, METHOD_POST);
        if (this.preRequest(requestInfo)) {
            httpClient.postWithInfo(requestInfo).on(HttpClient.EVENT_DATA, function (data) {
                promise.resolve(data);
            }.bind(this)).bindErrorEvent(promise);
        } else {
            return this.registTask(this.getGroupUsersImpl, param);
        }
        return promise;
    }
    addGroupUsers(srcGroupId, groupId, uid) {
        let promise = this.registTask(this.addGroupUsersImpl, {
            group_id: objectTools.ensureArray(groupId).join(','),
            src_group_id: srcGroupId,
            uid: uid
        });
        return promise;
    }
    addGroupUsersImpl(param) {
        let promise = new EventPromise();
        let httpClient = new HttpClient();
        let requestInfo = new RequestInfo(PATH_FACEFIND_GROUPADDUSER,
            scope, param, METHOD_POST);
        if (this.preRequest(requestInfo)) {
            httpClient.postWithInfo(requestInfo).on(HttpClient.EVENT_DATA, function (data) {
                promise.resolve(data);
            }.bind(this)).bindErrorEvent(promise);
        } else {
            return this.registTask(this.addGroupUsersImpl, param);
        }
        return promise;
    }
    deleteGroupUsers(groupId, uid) {
        let promise = this.registTask(this.deleteGroupUsersImpl, {
            group_id: objectTools.ensureArray(groupId).join(','),
            uid: uid
        });
        return promise;
    }
    deleteGroupUsersImpl(param) {
        let promise = new EventPromise();
        let httpClient = new HttpClient();
        let requestInfo = new RequestInfo(PATH_FACEFIND_GROUPDELTEUSER,
            scope, param, METHOD_POST);
        if (this.preRequest(requestInfo)) {
            httpClient.postWithInfo(requestInfo).on(HttpClient.EVENT_DATA, function (data) {
                promise.resolve(data);
            }.bind(this)).bindErrorEvent(promise);
        } else {
            return this.registTask(this.deleteGroupUsersImpl, param);
        }
        return promise;
    }

}

module.exports = AipFace;