export class PersonCreateRequestDTO {
    public name : string;
    public birthDate : string;
    public gender : string;

    constructor(name : string, birthDate : string, gender:string){
        this.name = name;
        this.birthDate = birthDate;
        this.gender = gender;
    }
}