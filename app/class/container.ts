/**
 * Created by kolesnikov-a on 05/07/2016.
 */
class Auditable {
    public AUD_TIME: Date = null;
    public AUD_USER: string = '';
}

export class ReturnTo extends Auditable{
    public DATE_TO: Date = null;
    public PLACE: string = '';
}

export class Client extends Auditable{
    public COMPANY: string = '';
    public CUIT: string = '';
}

export class Status extends Auditable{
    public STATUS: string = '';
}

export class Container {

    public TERMINAL: string = ''; //terminal
    public SHIP: string = ''; //buque
    public TRIP: string = ''; //viaje
    public CONTAINER: string = ''; //contenedor
    public BL: string = '';
    public RETURN_TO: ReturnTo[] = [new ReturnTo()];
    public CLIENT: Client[] = [new Client()];
    public STATUS: Status[] = [new Status()];
    public SHOW: boolean = false;

}