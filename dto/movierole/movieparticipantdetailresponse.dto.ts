import { PersonResponseDTO } from "../person/personresponse.dto";

export class MovieParticipantDetailResponseDTO extends PersonResponseDTO {
    public movieTitle : string;
    public role : string;
    constructor(id : string, name : string, birthDate : string, gender:string, role : string, movieTitle : string){
        super(id,name,birthDate,gender)
        this.role = role;
        this.movieTitle = movieTitle;
    }
}