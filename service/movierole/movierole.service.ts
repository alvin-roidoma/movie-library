import { MovieParticipantResponseDTO } from "../../dto/movierole/movieparticipantresponse.dto";
import MovieRepository from "../../infrastructure/repository/movie/movie.repository";
import MovieRoleRepository from "../../infrastructure/repository/movierole/movierole.repository";
import PersonRepository from "../../infrastructure/repository/person/person.repository";
import { MovieParticipantDetailResponseDTO } from '../../dto/movierole/movieparticipantdetailresponse.dto';
import { MovieParticipantCreateRequestDTO } from '../../dto/movierole/movieparticipantcreaterequest.dto';

export default class MovieRoleService {
    private movieRepository : MovieRepository;
    private movieRoleRepository : MovieRoleRepository;
    private personRepository : PersonRepository;
    
    constructor(movieRepository : MovieRepository, movieRoleRepository : MovieRoleRepository, personRepository:PersonRepository){
      this.movieRepository = movieRepository;
      this.movieRoleRepository = movieRoleRepository;
      this.personRepository = personRepository;
    }

    async findMovieParticipantById(id : string) : Promise<MovieParticipantResponseDTO[]> {
      var movie = await this.movieRepository.findById(id);
      if (movie == null) {
        throw "Movie Not Found"
      }
      var movieRole = await this.movieRoleRepository.findByMovieId(movie!.id.toString());
      var persons = await this.personRepository.findAll();
      var movieParticipant = movieRole.map((person) => {
        var participant = persons.find(x => x.id.toString() == `${person!.personId}`);
        return new MovieParticipantResponseDTO(participant!.id.toString(),participant!.name,participant!.birthDate.toISOString().split("T")[0],participant!.gender,person.role)
      })
      return movieParticipant;
    }

    async create(request : MovieParticipantCreateRequestDTO) : Promise<MovieParticipantDetailResponseDTO>{
      var movie = await this.movieRepository.findById(request.movieId);
      if (movie == null) {
        throw "Movie Not Found"
      }
      var person = await this.personRepository.findById(request.personId);
      if (person == null) {
        throw "Person Not Found"
      }
      var movieRole = await this.movieRoleRepository.create(request);
      return new MovieParticipantDetailResponseDTO(movieRole!.personId,person!.name,person!.birthDate.toISOString(),person!.gender,movieRole!.role,movie!.title);
    }

    async delete(movieId :string, personId :string) : Promise<MovieParticipantDetailResponseDTO>{
      var movie = await this.movieRepository.findById(movieId);
      if (movie == null) {
        throw "Movie Not Found"
      }
      var person = await this.personRepository.findById(personId);
      if (person == null) {
        throw "Person Not Found"
      }
      var movieRole = await this.movieRoleRepository.findByMovieIdAndPersonId(movieId,personId);
      if (movieRole == null) {
        throw "Movie Participant Not Found"
      }
      await this.movieRoleRepository.delete(movieRole!);
      return new MovieParticipantDetailResponseDTO(movieRole!.personId,person!.name,person!.birthDate.toISOString(),person!.gender,movieRole!.role,movie!.title);
    }
}