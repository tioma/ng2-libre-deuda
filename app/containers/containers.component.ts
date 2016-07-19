/**
 * Created by kolesnikov-a on 07/07/2016.
 */
import { Component } from '@angular/core';
import { NgForm } from '@angular/common';
import { Container } from '../class/container';

@Component({
    selector: 'containers',
    templateUrl: 'app/containers/containers.component.html',
})

export class ContainerComponent {

    public container:Container = new Container();
    public terminales = ['TRP', 'BACTSSA', 'TERMINAL4'];

    saveContainer(){

    }

    eraseField(field: string, subField?: string){
        if (subField){
            this.container[subField][0][field] = ''
        } else {
            this.container[field] = '';
        }
    }

    onChange(value, field, subField?){
        if (subField){
            this.container[subField][0][field] = value.toUpperCase();
        } else {
            this.container[field] = value.toUpperCase();
        }
    }

    goBack() {
        window.history.back();
    }
}
