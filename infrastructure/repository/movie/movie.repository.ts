import { MovieEntity } from '../../../model/movie.entity';
import { MovieUpdateRequestDTO } from '../../../dto/movie/movieupdaterequest.dto';
import { MovieCreateRequestDTO } from '../../../dto/movie/moviecreaterequest.dto';


export default class MovieRepository {
  async findAll() {
    return await MovieEntity.findAll();
  }

  async findById(id : string){
    return await MovieEntity.findOne({where : {id : id}})
  }

  async create(request : MovieCreateRequestDTO){
    return await MovieEntity.create({title : request.title , summary : request.summary, releaseDate : new Date(request.releaseDate),speechLanguage : request.speechLanguage});
  }

  async update(movie : MovieEntity,request : MovieUpdateRequestDTO){
    return await movie.update({title : request.title , summary : request.summary, releaseDate : new Date(request.releaseDate),speechLanguage : request.speechLanguage});
  }

  async delete(movie : MovieEntity){
    return await movie.destroy();
  }
}