import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    addUser(user) {
        return this.http.post(`${environment.gatewayurl}/user/api/v1/create`, user);
    }
    findUser(username) {
        return this.http.get(`${environment.gatewayurl}/user/api/v1/query?username=${username}`);
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map