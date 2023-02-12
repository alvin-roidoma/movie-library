import { PersonResponseDTO } from '../person/personresponse.dto';
export class MovieDetailResponseDTO {
    public id: string;
    public title : string;
    public releaseDate : string;
    public summary : string;
    public speechLanguage : string;
    public author : PersonResponseDTO;
    public actorList : PersonResponseDTO[];

    constructor(id : string, title : string, releaseDate : string, summary : string, speechLanguage:string, author : PersonResponseDTO, actorList : PersonResponseDTO[]){
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this.summary = summary;
        this.speechLanguage = speechLanguage;
        this.author = author;
        this.actorList = actorList;
    }
}