export class MovieUpdateRequestDTO {
    public title : string;
    public releaseDate : string;
    public summary : string;
    public speechLanguage : string;

    constructor(title : string, releaseDate : string, summary : string, speechLanguage:string){
        this.title = title;
        this.releaseDate = releaseDate;
        this.summary = summary;
        this.speechLanguage = speechLanguage;
    }
}