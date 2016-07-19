/**
 * Created by Artiom on 29/06/2016.
 */
import { Component, OnInit } from '@angular/core';

import { ContainerService } from './container.service';
import { Container } from '../class/container';

import { ContainerStatusPipe } from '../pipes/status.pipe';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'libreDeuda',
    templateUrl: 'app/libreDeuda/libreDeuda.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [ContainerStatusPipe]
})

export class LibreDeudaComponent implements OnInit{

    public containers: Container[];

    constructor(
        private containerService: ContainerService
    ){}

    ngOnInit(){
        this.containerService.getContainers()
            .subscribe(
                containers => {
                    this.containers = containers;
                },
                error => console.log(error));
    };

    showDetail(container){
        container.SHOW = !container.SHOW;
    }

}
