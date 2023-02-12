export class MovieParticipantCreateRequestDTO {
    public movieId : string;
    public personId : string;
    public role : string;

    constructor(movieId : string, personId : string, role : string){
        this.movieId = movieId;
        this.personId = personId;
        this.role = role;
    }
}