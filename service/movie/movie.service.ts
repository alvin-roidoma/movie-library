import MovieRepository from '../../infrastructure/repository/movie/movie.repository';
import { MovieResponseDTO } from '../../dto/movie/movieresponse.dto';
import MovieRoleRepository from '../../infrastructure/repository/movierole/movierole.repository';
import { MovieDetailResponseDTO } from '../../dto/movie/moviedetailresponse.dto';
import PersonRepository from '../../infrastructure/repository/person/person.repository';
import { PersonResponseDTO } from '../../dto/person/personresponse.dto';
import { MovieParticipantResponseDTO } from '../../dto/movierole/movieparticipantresponse.dto';
import { MovieCreateRequestDTO } from '../../dto/movie/moviecreaterequest.dto';
import { MovieUpdateRequestDTO } from '../../dto/movie/movieupdaterequest.dto';
export default class MovieService {
  private movieRepository : MovieRepository;
  private movieRoleRepository : MovieRoleRepository;
  private personRepository : PersonRepository;
  constructor(movieRepository : MovieRepository, movieRoleRepository : MovieRoleRepository, personRepository:PersonRepository){
    this.movieRepository = movieRepository;
    this.movieRoleRepository = movieRoleRepository;
    this.personRepository = personRepository;
  }
  async findAll() : Promise<MovieResponseDTO[]> {
    var movies = await this.movieRepository.findAll();
    var responses = movies.map((val,index) => {
      return new MovieResponseDTO(val.id.toString(),val.title,val.releaseDate.toISOString().split("T")[0],val.summary,val.speechLanguage);
    })
    return responses;
  }

  async findById(id : string) : Promise<MovieDetailResponseDTO> {
    var movie = await this.movieRepository.findById(id);
    if (movie == null) {
      throw "Movie Not Found"
    }
    var movieRole = await this.movieRoleRepository.findByMovieId(movie!.id.toString());
    var persons = await this.personRepository.findAll();
    var authorRole = movieRole.find(p => p.role == 'AUTHOR');
    var author = persons.find(x => x.id.toString() == `${authorRole!.personId}`);
    var authorResponse = new PersonResponseDTO(author!.id.toString(),author!.name,author!.birthDate.toISOString().split("T")[0],author!.gender)
    var actorRole = movieRole.filter(p => p.role == 'ACTOR');
    var actorResponse = actorRole.map((val,index) => {
      var actor = persons.find(x => x.id.toString() == `${val!.personId}`);
      return new PersonResponseDTO(actor!.id.toString(),actor!.name,actor!.birthDate.toISOString().split("T")[0],actor!.gender)
    });
    return new MovieDetailResponseDTO(
      movie!.id.toString(),movie!.title,movie!.releaseDate.toISOString().split("T")[0],movie!.summary,movie!.speechLanguage, authorResponse  , actorResponse
    );
  }

  async create(request : MovieCreateRequestDTO) : Promise<MovieResponseDTO>{
    var movie = await this.movieRepository.create(request);
    return new MovieResponseDTO(movie.id.toString(),movie.title,movie.releaseDate.toISOString().split("T")[0],movie.summary,movie.speechLanguage);
  }

  async update(id : string,request : MovieUpdateRequestDTO) : Promise<MovieResponseDTO>{
    var movie = await this.movieRepository.findById(id);
    if (movie == null) {
      throw "Movie Not Found"
    }
    var updatedMovie = await this.movieRepository.update(movie,request);
    return new MovieResponseDTO(updatedMovie.id.toString(),updatedMovie.title,updatedMovie.releaseDate.toISOString().split("T")[0],updatedMovie.summary,updatedMovie.speechLanguage)
  }

  async delete(id : string) : Promise<MovieResponseDTO>{
    var movie = await this.movieRepository.findById(id);
    if (movie == null) {
      throw "Movie Not Found"
    }
    var movieRole = await this.movieRoleRepository.findByMovieId(id);
    if (movieRole.length > 0){
      throw "Cannot delete movie"
    }
    await this.movieRepository.delete(movie);
    return new MovieResponseDTO(movie.id.toString(),movie.title,movie.releaseDate.toISOString().split("T")[0],movie.summary,movie.speechLanguage);
  }
}