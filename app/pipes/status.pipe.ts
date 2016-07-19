/**
 * Created by kolesnikov-a on 11/07/2016.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'containerStatus' })
export class ContainerStatusPipe implements PipeTransform{
    private statusData = {'0': {
        name: 'Liberado',
        className: 'status-free'
    }, '3': {
        name: 'Facturado',
        className: 'status-retired'
    }, '5': {
        name:'Retirado',
        className: 'status-retired'
    }, '9': {
        name:'Cancelado',
        className: 'status-canceled'
    }};

    transform(value: number, field: string): string {
        return this.statusData[value][field];
    }
}