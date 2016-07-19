"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Artiom on 29/06/2016.
 */
var core_1 = require('@angular/core');
var container_service_1 = require('./container.service');
var status_pipe_1 = require('../pipes/status.pipe');
var router_1 = require('@angular/router');
var LibreDeudaComponent = (function () {
    function LibreDeudaComponent(containerService) {
        this.containerService = containerService;
    }
    LibreDeudaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.containerService.getContainers()
            .subscribe(function (containers) {
            _this.containers = containers;
        }, function (error) { return console.log(error); });
    };
    ;
    LibreDeudaComponent.prototype.showDetail = function (container) {
        container.SHOW = !container.SHOW;
    };
    LibreDeudaComponent = __decorate([
        core_1.Component({
            selector: 'libreDeuda',
            templateUrl: 'app/libreDeuda/libreDeuda.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            pipes: [status_pipe_1.ContainerStatusPipe]
        }), 
        __metadata('design:paramtypes', [container_service_1.ContainerService])
    ], LibreDeudaComponent);
    return LibreDeudaComponent;
}());
exports.LibreDeudaComponent = LibreDeudaComponent;
//# sourceMappingURL=libreDeuda.component.js.map