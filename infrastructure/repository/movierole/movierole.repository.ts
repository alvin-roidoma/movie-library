import { MovieRoleEntity } from '../../../model/movierole.entity';
import { MovieParticipantCreateRequestDTO } from '../../../dto/movierole/movieparticipantcreaterequest.dto';
export default class MovieRoleRepository {
  async findByPersonId(id : string) {
    return await MovieRoleEntity.findAll({where : {personId : id}});
  }

  async findByMovieId(id : string){
    return await MovieRoleEntity.findAll({where : {movieId : id}});
  }

  async findByMovieIdAndPersonId(movieId : string,personId :string){
    return await MovieRoleEntity.findOne({where : {movieId : movieId, personId : personId}});
  }

  async create(request : MovieParticipantCreateRequestDTO){
    return await MovieRoleEntity.create({movieId : request.movieId , personId : request.personId, role : request.role});
  }

  async delete(movieRole : MovieRoleEntity){
    return await movieRole.destroy();
  }
}