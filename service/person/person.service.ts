import MovieRepository from "../../infrastructure/repository/movie/movie.repository";
import MovieRoleRepository from "../../infrastructure/repository/movierole/movierole.repository";
import PersonRepository from "../../infrastructure/repository/person/person.repository";
import { PersonResponseDTO } from '../../dto/person/personresponse.dto';
import { PersonCreateRequestDTO } from '../../dto/person/personcreaterequest.dto';
import { PersonUpdateRequestDTO } from '../../dto/person/personupdaterequest.dto';

export default class PersonService {
    private personRepository : PersonRepository;
    private movieRoleRepository : MovieRoleRepository;

    constructor(personRepository:PersonRepository, movieRoleRepository: MovieRoleRepository){
      this.personRepository = personRepository;
      this.movieRoleRepository = movieRoleRepository;
    }

    async findAll() : Promise<PersonResponseDTO[]> {
        var persons = await this.personRepository.findAll();
        var responses = persons.map((person) => new PersonResponseDTO(person.id.toString(),person.name,person.birthDate.toISOString().split("T")[0],person.gender))
        return responses;
    }

    async findById(id:string) : Promise<PersonResponseDTO> {
        var person = await this.personRepository.findById(id);
        if (person == null) {
          throw "Person Not Found"
        }
        return new PersonResponseDTO(person.id.toString(),person.name,person.birthDate.toISOString().split("T")[0],person.gender)
    }

    async create(request : PersonCreateRequestDTO) : Promise<PersonResponseDTO>{
      var person = await this.personRepository.create(request);
      return new PersonResponseDTO(person!.id.toString(),person!.name,person!.birthDate.toISOString().split("T")[0],person!.gender);
    }

    async update(id : string,request : PersonUpdateRequestDTO) : Promise<PersonResponseDTO>{
      var person = await this.personRepository.findById(id);
      if (person == null) {
        throw "Person Not Found"
      }
      var updatedPerson = await this.personRepository.update(person,request);
      return new PersonResponseDTO(updatedPerson!.id.toString(),updatedPerson!.name,updatedPerson!.birthDate.toISOString().split("T")[0],updatedPerson!.gender);
    }

    async delete(id : string) : Promise<PersonResponseDTO>{
      var person = await this.personRepository.findById(id);
      if (person == null) {
        throw "Person Not Found"
      }
      var movieRole = await this.movieRoleRepository.findByMovieId(id);
      if (movieRole.length > 0){
        throw "Cannot delete person"
      }
      await this.personRepository.delete(person);
      return new PersonResponseDTO(person!.id.toString(),person!.name,person!.birthDate.toISOString().split("T")[0],person!.gender);
    }
}