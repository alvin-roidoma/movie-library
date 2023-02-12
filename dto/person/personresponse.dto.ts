export class PersonResponseDTO {
    public id: string;
    public name : string;
    public birthDate : string;
    public gender : string;

    constructor(id : string, name : string, birthDate : string, gender:string){
        this.id = id;
        this.name = name;
        this.birthDate = birthDate;
        this.gender = gender;
    }
}