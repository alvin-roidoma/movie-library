import { PersonResponseDTO } from "../person/personresponse.dto";

export class MovieParticipantResponseDTO extends PersonResponseDTO {
    public role : string;
    constructor(id : string, name : string, birthDate : string, gender:string, role : string){
        super(id,name,birthDate,gender)
        this.role = role;
    }
}