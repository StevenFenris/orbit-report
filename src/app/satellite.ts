export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(currentname: string, currenttype: string, currentlaunchDate: string, currentorbitType: string, currentoperational: boolean){
        this.name = currentname;
        this.type = currenttype;
        this.launchDate = currentlaunchDate;
        this.orbitType = currentorbitType;
        this.operational = currentoperational;
    }
}


