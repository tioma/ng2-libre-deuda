"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by kolesnikov-a on 05/07/2016.
 */
var Auditable = (function () {
    function Auditable() {
        this.AUD_TIME = null;
        this.AUD_USER = '';
    }
    return Auditable;
}());
var ReturnTo = (function (_super) {
    __extends(ReturnTo, _super);
    function ReturnTo() {
        _super.apply(this, arguments);
        this.DATE_TO = null;
        this.PLACE = '';
    }
    return ReturnTo;
}(Auditable));
exports.ReturnTo = ReturnTo;
var Client = (function (_super) {
    __extends(Client, _super);
    function Client() {
        _super.apply(this, arguments);
        this.COMPANY = '';
        this.CUIT = '';
    }
    return Client;
}(Auditable));
exports.Client = Client;
var Status = (function (_super) {
    __extends(Status, _super);
    function Status() {
        _super.apply(this, arguments);
        this.STATUS = '';
    }
    return Status;
}(Auditable));
exports.Status = Status;
var Container = (function () {
    function Container() {
        this.TERMINAL = ''; //terminal
        this.SHIP = ''; //buque
        this.TRIP = ''; //viaje
        this.CONTAINER = ''; //contenedor
        this.BL = '';
        this.RETURN_TO = [new ReturnTo()];
        this.CLIENT = [new Client()];
        this.STATUS = [new Status()];
        this.SHOW = false;
    }
    return Container;
}());
exports.Container = Container;
//# sourceMappingURL=container.js.map