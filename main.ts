import { buildSchema } from "graphql"
import express from "express"
import { graphqlHTTP } from "express-graphql"
import { DatabaseCollection } from './infrastructure/extensions/database.collection';
import * as dotenv from 'dotenv';
import { ServiceCollection } from './infrastructure/extensions/service.collection';
import { GraphQLCollection } from './infrastructure/extensions/graphql.collection';

dotenv.config()

const app = express()
var database = new DatabaseCollection(process.env.DATABASE as string ?? '',process.env.DATABASE_USER as string ?? '', process.env.DATABASE_PASSWORD as string ?? '')
var services = new ServiceCollection();
var graphQL = new GraphQLCollection(app, services);

const PORT = 8000

app.listen(PORT)

console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`)