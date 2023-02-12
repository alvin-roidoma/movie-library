import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql"
import { ServiceCollection } from './service.collection';
import { MovieResponseDTO } from "../../dto/movie/movieresponse.dto";
import * as core from 'express-serve-static-core';
import { MovieDetailResponseDTO } from '../../dto/movie/moviedetailresponse.dto';
import { PersonResponseDTO } from '../../dto/person/personresponse.dto';
import { MovieParticipantResponseDTO } from '../../dto/movierole/movieparticipantresponse.dto';
import { MovieEntity } from '../../model/movie.entity';
import { MovieCreateRequestDTO } from '../../dto/movie/moviecreaterequest.dto';
import { MovieUpdateRequestDTO } from '../../dto/movie/movieupdaterequest.dto';
import { PersonCreateRequestDTO } from '../../dto/person/personcreaterequest.dto';
import { PersonUpdateRequestDTO } from "../../dto/person/personupdaterequest.dto";
import { MovieParticipantCreateRequestDTO } from "../../dto/movierole/movieparticipantcreaterequest.dto";
import { MovieParticipantDetailResponseDTO } from '../../dto/movierole/movieparticipantdetailresponse.dto';

export class GraphQLCollection {
    constructor(app : core.Express, service : ServiceCollection){
        const schema = buildSchema(`
           type MovieResponseDTO {
               id: String!
               title: String!
               releaseDate: String!
               summary : String!,
               speechLanguage : String!
           }

           input MovieInput {
               title: String!
               releaseDate: String!
               summary : String!,
               speechLanguage : String!
           }

           input PersonInput {
               name: String!
               birthDate: String!
               gender : String!
           }

           input MovieParticipantInput {
               movieId: String!
               personId: String!
               role: String!
           }

           type MovieDetailResponseDTO {
               id: String!
               title: String!
               releaseDate: String!
               summary : String!,
               speechLanguage : String!
               author : PersonResponseDTO
               actorList : [PersonResponseDTO]
           }

           type PersonResponseDTO {
               id: String!
               name: String!
               birthDate: String!
               gender : String!
           }

           type MovieParticipantResponseDTO {
               id: String!
               name: String!
               birthDate: String!
               gender : String!
               role : String!
           }

           type MovieParticipantDetailResponseDTO {
               id: String!
               name: String!
               birthDate: String!
               gender : String!
               role : String!
               movieTitle : String!
           }

           type Query {
                getMovies: [MovieResponseDTO]
                getMovie(id : String) : MovieDetailResponseDTO
                getPersons : [PersonResponseDTO]
                getPerson(id : String) : PersonResponseDTO
                getMovieParticipant(id : String) : [MovieParticipantResponseDTO]
            }

            type Mutation {
                createMovie(input: MovieInput): MovieResponseDTO
                updateMovie(id : String!, input: MovieInput): MovieResponseDTO
                deleteMovie(id : String!): MovieResponseDTO
                createPerson(input: PersonInput): PersonResponseDTO
                updatePerson(id : String!, input: PersonInput): PersonResponseDTO
                deletePerson(id : String!): PersonResponseDTO
                createMovieParticipant(input: MovieParticipantInput): MovieParticipantDetailResponseDTO
                deleteMovieParticipant(movieId:String!, personId : String!) : MovieParticipantDetailResponseDTO
            }
        `);

        type MovieInput = Pick<MovieCreateRequestDTO | MovieUpdateRequestDTO, "title" | "releaseDate" | "summary" | "speechLanguage">;
        type PersonInput = Pick<PersonCreateRequestDTO | PersonUpdateRequestDTO, "name" | "birthDate" | "gender">;
        type MovieParticipantInput = Pick<MovieParticipantCreateRequestDTO, "movieId" | "personId" | "role">;

        const getMovies = async () : Promise<MovieResponseDTO[]> => await service.movieService.findAll();
        const getMovie  = async (args : {id:string}) : Promise<MovieDetailResponseDTO> => await service.movieService.findById(args.id); 
        const getPersons = async () : Promise<PersonResponseDTO[]> => await service.personService.findAll();
        const getPerson  = async (args : {id:string}) : Promise<PersonResponseDTO> => await service.personService.findById(args.id);
        const getMovieParticipant = async (args : {id:string}) : Promise<MovieParticipantResponseDTO[]> => await service.movieRoleService.findMovieParticipantById(args.id);
        const createMovie = async (args : {input:MovieInput}) : Promise<MovieResponseDTO> =>  await service.movieService.create(args.input);
        const updateMovie = async (args : {id:string, input:MovieInput}) : Promise<MovieResponseDTO> =>  await service.movieService.update(args.id, args.input);
        const deleteMovie = async (args : {id:string}) : Promise<MovieResponseDTO> =>  await service.movieService.delete(args.id);
        const createPerson = async (args : {input:PersonInput}) : Promise<PersonResponseDTO> => await service.personService.create(args.input);
        const updatePerson = async (args : {id:string, input:PersonInput}) : Promise<PersonResponseDTO> => await service.personService.update(args.id, args.input);
        const deletePerson = async (args : {id:string}) : Promise<PersonResponseDTO> => await service.personService.delete(args.id);
        const createMovieParticipant = async (args : {input:MovieParticipantInput}) : Promise<MovieParticipantDetailResponseDTO> => await service.movieRoleService.create(args.input);
        const deleteMovieParticipant = async (args : {movieId:string, personId : string}) : Promise<MovieParticipantDetailResponseDTO> => await service.movieRoleService.delete(args.movieId,args.personId);

        const root = {
            getMovies,
            getMovie,
            getPersons,
            getPerson,
            getMovieParticipant,
            createMovie,
            updateMovie,
            deleteMovie,
            createPerson,
            updatePerson,
            deletePerson,
            createMovieParticipant,
            deleteMovieParticipant
        }

        
        app.use(
            "/graphql",
            graphqlHTTP({
                schema: schema,
                rootValue: root,
                graphiql:false
            })
        )

        app.use(
            "/graphiql",
            graphqlHTTP({
                schema: schema,
                rootValue: root,
                graphiql : true
            })
        )
    }
}