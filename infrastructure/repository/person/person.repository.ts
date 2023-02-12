import { PersonEntity } from '../../../model/person.entity';
import { PersonCreateRequestDTO } from '../../../dto/person/personcreaterequest.dto';
import { PersonUpdateRequestDTO } from '../../../dto/person/personupdaterequest.dto';
export default class PersonRepository {
  async findAll() {
    return await PersonEntity.findAll();
  }

  async findById(id : string){
    return await PersonEntity.findOne({where : {id : id}})
  }

  async create(request : PersonCreateRequestDTO){
    return await PersonEntity.create({name : request.name , gender : request.gender, birthDate : new Date(request.birthDate)});
  }

  async update(person : PersonEntity,request : PersonUpdateRequestDTO){
    return await person.update({name : request.name , gender : request.gender, birthDate : new Date(request.birthDate)});
  }

  async delete(person : PersonEntity){
    return await person.destroy();
  }
}