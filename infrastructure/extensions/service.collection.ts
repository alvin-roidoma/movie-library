import MovieService from '../../service/movie/movie.service';
import MovieRepository from '../repository/movie/movie.repository';
import MovieRoleRepository from '../repository/movierole/movierole.repository';
import PersonRepository from '../repository/person/person.repository';
import PersonService from '../../service/person/person.service';
import MovieRoleService from '../../service/movierole/movierole.service';

export class ServiceCollection{
    movieService : MovieService
    personService : PersonService
    movieRoleService : MovieRoleService

    constructor(){
        var movieRepository = new MovieRepository();
        var movieRoleRepository =  new MovieRoleRepository;
        var personRepository = new PersonRepository();
        this.movieService = new MovieService(movieRepository,movieRoleRepository,personRepository);
        this.personService = new PersonService(personRepository,movieRoleRepository)
        this.movieRoleService = new MovieRoleService(movieRepository,movieRoleRepository,personRepository);
    }
}