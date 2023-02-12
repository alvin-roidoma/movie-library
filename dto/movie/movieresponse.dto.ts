
export class MovieResponseDTO {
    public id: string;
    public title : string;
    public releaseDate : string;
    public summary : string;
    public speechLanguage : string;

    constructor(id : string, title : string, releaseDate : string, summary : string, speechLanguage:string){
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this.summary = summary;
        this.speechLanguage = speechLanguage;
    }
}